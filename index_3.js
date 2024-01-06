const fs = require('fs')

const txtIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(txtIn)

const txtOut = `This is what we know about avocardo ${txtIn}.\nCreate on ${Date.now()} `
fs.writeFileSync('./txt/output.txt', txtOut)
console.log('File Written');
