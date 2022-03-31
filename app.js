const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')

// create express app
const app = express();

// mongoDB connect 
const dbURI = "mongodb+srv://Shianwei:1234abcd@nodejs.5wj6q.mongodb.net/NodeJS?retryWrites=true&w=majority"
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((error) => console.log("Eror ", error))

// register view engine
app.set('view engine', 'ejs');

// for setting the location of views and static folder
app.set('views', 'ejs_views');
app.use(express.static('static'));

// Morgan Middleware
app.use(morgan('dev'))

// url encoded middleware
app.use(express.urlencoded({ extended: true }));

// // Next() helps to invoke the others middleware function for the browser to return response
// app.use((req, res, next) => {
//     console.log('new request made:');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// });



// // ----------- USING HTML -----------
// // listen for request
// // 3000 shows that we are listening to the localhost
// app.listen(3000);

// // respond to request
// app.get('/', (req, res) => {
//     // Automatically set the content type of header/ No need to manually set Status Code
//     // res.send('./views/index.html');
//     res.sendFile('./html_views/index.html', { root: __dirname });
// })

// app.get('/about', (req, res) => {
//     // Automatically set the content type of header/ No need to manually set Status Code
//     // res.send('./views/index.html');
//     res.sendFile('./html_views/about.html', { root: __dirname });
// })

// //redirect
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// })

// // 404 - code find from top to bottom to see a match of the URL link
// // should be at the last
// app.use((req, res) => {
//     res.status(404).sendFile('./html_views/404.html', { root: __dirname });
// })

// ----------- USING MONGOOSE (SAMPLES) -----------
// mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'Super Mario 2',
//         snippet: 'About super mario',
//         body: 'Game oever'
//     });

//     blog.save()
//         .then((result) => res.send(result))
//         .catch((error) => console.log(error))
// })

// // get all
// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => res.send(result))
//         .catch((error) => console.log(error))
// })

// // find by ID
// app.get('/single-blog', (req, res) => {
//     Blog.findById("62449ded92ed0716016eb931")
//         .then((result) => res.send(result))
//         .catch((error) => console.log(error))
// })



// ----------- USING EJS -----------
// listen for request
// 3000 shows that we are listening to the localhost
// respond to request
app.get('/', (req, res) => {
    res.redirect('/blogs');
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
})

//redirect
app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

// blog_routes
app.use('/blogs', blogRoutes);

// 404 - code find from top to bottom to see a match of the URL link
// should be at the last
app.use((req, res) => {
    res.status(404).render('404', { title: '404 Error' });
})