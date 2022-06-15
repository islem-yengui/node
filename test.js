// console.log("hello")
// let x = 5
// let y = 10 
// console.log(x+y)
// const add = require('./addition')

// // node js modules
// // global , local , third party
// const http = require('http');
// // http module is used for web based operation

var fs = require('fs');
// fs module (file system) is used for file based operation

// const hostname = '127.0.0.1';
// const port = 3000;
// // node js is asynchronus === callback functions
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// console.log("start reading")


  
// Use fs.readFile() method to read the file
// fs.readFileSync('exemple.txt', 'utf8', function(err, data){
     
//     // Display the file content
//     console.log(data);
// });
  

// const fs = require('fs');
  
// Calling the readFileSync() method
// to read 'input.txt' file
// const data = fs.readFileSync('./exemple.txt',
//             {encoding:'utf8', flag:'r'});
 
// // Display the file data
// console.log(data);

// console.log("finish reading")


// const express = require('express')
// const app = express()


// app.get("/",(req,res)=>{
//     res.send("<h1>hello</h1>")
// })

// app.listen(5000,err=>err?console.log(err):console.log("server is running on port 5000"))