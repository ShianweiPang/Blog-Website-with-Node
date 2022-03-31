
// backtick is the template string in javascript
const greet = (name) => {
    console.log(`hello, ${name}`);
}

greet("mario")

console.log(global)

setTimeout(() => {
    console.log("HERE TIMEOUT")
    clearInterval(interval)
}, 3000);


const interval = setInterval(() => {
    console.log("HERE INTERVAL")
}, 1000);


// getting directories path
console.log(__dirname);
console.log(__filename);

const people = { a: '1', b: 'a' }

module.exports = { people };