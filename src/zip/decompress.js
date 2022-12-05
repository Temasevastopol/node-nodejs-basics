const fs = require('fs');
const zlib = require('zlib');
const unzip = zlib.createUnzip()
const path = require('path');

const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
const fileCompressPath = path.join(__dirname, 'files', 'archiv.gz');

const decompress = () => {
    try{
        const input = fs.createReadStream(fileCompressPath);
        const output = fs.createWriteStream(filePath);
        input.pipe(unzip).pipe(output);
    }catch(err){
        console.log(err)
    }
    // Write your code here 
};
decompress();