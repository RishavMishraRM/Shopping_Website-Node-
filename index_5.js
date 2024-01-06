const fs = require('fs')


//Blocking way
//const txtIn = fs.readFileSync("./txt/input.txt", "utf-8");
//console.log(txtIn)
//const txtOut = `This is what we know about avocardo ${txtIn}.\nCreate on ${Date.now()} `
//fs.writeFileSync('./txt/output.txt', txtOut)
//console.log('File Written');

//Non-Blocking Way
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) =>{

    if (err) return console.log('Error')
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) =>{
        console.log(data2);
        fs.readFile('./txt/append.txt', 'utf-8', (err, data3) =>{
            console.log(data3);
            fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err =>{
                console.log('your file has been written');
            });
});
});
});
console.log("Will execute this");