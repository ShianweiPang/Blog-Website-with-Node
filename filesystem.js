const { error } = require('console');
const fs = require('fs');
// console.time('time')

// //read files
// fs.readFile('./docs/blog.txt', (err, data) => {
//     if (err)
//         console.log(err);
//     console.log(data.toString())
// })

// console.timeEnd('time')
// console.log("last line")



// //write files
// //if file not exists, it will create one instead of giving any error code
// fs.writeFile('./docs/blog.txt', "JOJO", () => {
//     console.log("file written")
// })

//mkdir and rmdir
// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (error) => {
//         if (error)
//             console.log(error);
//         console.log('folder created')
//     })
// } else {
//     fs.rmdir('./assets', (error) => {
//         if (error) {
//             console.log(error);
//         }
//         console.log("folder deleted")
//     })
// }


//delete
// fs.unlink('./docs/deleteme.txt', (error) => {
//     if (error)
//         console.log(error)
//     else
//         console.log("file deleted")
// })
