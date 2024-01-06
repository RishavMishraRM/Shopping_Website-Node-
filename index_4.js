const fs = require('fs')


//Blocking way
const txtIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(txtIn)
const txtOut = `This is what we know about avocardo ${txtIn}.\nCreate on ${Date.now()} `
fs.writeFileSync('./txt/output.txt', txtOut)
console.log('File Written');

//Non-Blocking Way
fs.readFile('./txt/start.txt', 'utf-8', (err, data) =>{
    console.log(data);
});
console.log("Will execute this")