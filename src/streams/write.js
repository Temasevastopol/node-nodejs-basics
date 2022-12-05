const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { stdin, stdout } = process;

const  filePath = path.join(__dirname, 'files', 'fileToWrite.txt')

let newFile = fs.createWriteStream(filePath, 'utf-8');

stdout.write('Привет! Напиши что-нибудь - ');

const write = () => {
    let rl = readline.createInterface({ 
        input: stdin,
        output: newFile 
      });
      
      rl.on('line', line => {  
        if (line.toLowerCase() === 'exit') {
          rl.close();
          stdout.write('\n' + 'Удачи!' + '\n');
        } else {
          newFile.write(line + '\n');
          stdout.write('Я внимательно записываю...');
        }
      });
      
      process.on('SIGINT', () => {
        stdout.write('\n' + 'Удачи!' + '\n');
        rl.close();
      });
    // Write your code here 
};

write();

