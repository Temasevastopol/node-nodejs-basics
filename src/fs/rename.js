const fs = require('fs')
const path = require('path')

const pathFileBefore = path.join(__dirname, 'files', 'wrongFilename.txt')
const pathFileAfter = path.join(__dirname, 'files', 'properFilename.md')

const rename = async () => {      
    try{        
       fs.rename(pathFileBefore, pathFileAfter, (err, stats)=>{          
            if(err) throw new Error('FS operation failed');
        })
       
    } catch(err){
        console.log(err)
    }
    // Write your code here 
};

rename();