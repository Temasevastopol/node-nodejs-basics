const { createReadStream, createWriteStream } = require('fs');
const { pipeline } = require('stream');
const { promisify } = require('util');
const { createGzip } = require('zlib');
const path = require('path')
const pipe = promisify(pipeline);

const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
const fileCompressPath = path.join(__dirname, 'files', 'archiv.gz')

const compress = async (input, output) => {

    try{
        const gzip = createGzip();
        const source  = createReadStream(input);
        const destination = createWriteStream(output);
        await pipe(source, gzip, destination);
    } catch(err){
        console.log(err);
        process.exitCode = 1; 
    }

    // Write your code here 
};

 compress(filePath, fileCompressPath);