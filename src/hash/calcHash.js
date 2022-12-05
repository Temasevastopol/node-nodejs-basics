const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt')

const calculateHash = (alg) => {

    try{
        const algoritm = alg;
        const shaResult = crypto.createHash(algoritm);
        const stream = fs.ReadStream(filePath)

        stream.on('data', (data)=>{            
            shaResult.update(data)
        })

        stream.on('end', ()=>{
            const hash = shaResult.digest('hex')
            console.log('hash - ' + hash + '  for ' + filePath)
        })
    } catch(err){
        console.log(err)
    }
    

    // Write your code here 
};

calculateHash('sha256');