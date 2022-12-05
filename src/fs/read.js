const fs = require('fs');
const path = require('path')

const targetFile = path.join(__dirname, 'files', 'fileToRead.txt')


const read = async () => {
    try{
        fs.readFile(targetFile, 'utf-8', (err,data)=>{
            if(err) throw new Error('FS operation failed');
            console.log(data);
        })
    }catch(err){
        console.log(err)
    }
    // Write your code here 
};

read();