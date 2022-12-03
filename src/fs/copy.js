const fs = require('fs')
const path = require('path')

const pathFolder = path.join(__dirname, 'files_copy')

const copy = async () => {    
    try{
         fs.stat(pathFolder,(err, stat)=>{            
            if(err === null){                
                throw new Error('FS operation failed')
            }
            else if(err.code === 'ENOENT'){
                fs.mkdir(pathFolder, (err)=>{
                    if(err) throw err;
                })
                console.log('Folder was create')
            }
            
        })           
    } catch(err){
        console.log(err)
    }
    // Write your code here 
};

copy();