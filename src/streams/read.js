const fs = require('fs')
const path = require('path');
const precess = require('process')

const  filePath = path.join(__dirname, 'files', 'fileToRead.txt')

const read = (path) => {
    try{
        const stream = fs.createReadStream(path, 'utf-8');

        let data = '';

        stream.on('data', chunk => data += chunk); 
        stream.on('end', ()=>process.stdout.write(data));
        stream.on('error', error => process.stdout.write('error ' + error.message));
    }catch(err){
        process.stdoun.write(err)
    }
    
    // Write your code here 
};

read(filePath);