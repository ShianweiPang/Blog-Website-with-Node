const http = require('http');
const fs = require('fs');
const lo = require('lodash');


const server = http.createServer((req, res) => {
    // console.log(req.url, req.method);

    // lodash
    const num = lo.random(0, 20);
    console.log(num)

    const greet = lo.once(() => {
        console.log('hello');
    })

    greet();
    greet();

    let path = './html_views/';
    switch (req.url) {
        case '/':
            path += "index.html";
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end()
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // set header content type
    // First- set content type, second write, third end
    res.setHeader('Content-Type', 'text/html');

    //send HTML file
    fs.readFile(path, (error, data) => {
        if (error) {
            console.log(error);
            res.end();
        }
        else {
            // res.write(data);

            res.end(data);
        }
    });
});

server.listen(3000, 'localhost', () => {
    console.log("listening for request")
});

