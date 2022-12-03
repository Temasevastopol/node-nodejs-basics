const fs = require('fs')
const path = require('path')

const pathFile = path.join(__dirname, 'files', 'fresh.txt')

const create = async () => {
    try{
         fs.stat(pathFile, (err, stat)=>{            
            if(err === null){
                throw new Error('FS operation failed')
            } 

            else if(err.code === 'ENOENT'){                
               fs.writeFile(pathFile, 'I am fresh and young', (err)=>{
                    if(err) throw err;
                })
            }
        })
    } catch(err){
        console.log(err)
    }    
    // Write your code here e
};

create()