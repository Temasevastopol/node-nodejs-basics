const fs = require('fs');
const path = require('path')


const list = async () => {
    try{
        fs.readdir(path.join(__dirname, 'files'), (err, files)=>{
            if(err) throw new Error('FS operation failed');
            console.log(files)
        })
    }catch(err){
        console.log(err)
    }
    // Write your code here 
};

 list();