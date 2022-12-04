const fs = require('fs');
const path = require('path')

const targetFile = path.join(__dirname, 'files', 'fileToRemove.txt')

const remove = async () => {
    try{
        fs.unlink(targetFile, (err)=>{
            if(err) throw new Error('FS operation failed')
        })
    } catch(err){
        console.log(err)
    }
    
    // Write your code here 
};

remove();