// use npm init -y to create a package 
// use spaces in between packages to download more than one packages at once
//A module is a code that we borrowed from someone else to use in our code
//use npm install --global (package name) to download a package for the whole pc instead of the created package only


// const http = require('node:http');
//Modules are included using require() in CommonJS

// import {a, b} from "./86(ii).js" 
// console.log(a);
// Named Export example


// import hi from "./86(ii).js"
// console.log(hi);  
// we can rename and import the default value by any name(Example of Default Export)


import http from "http"  
//import used in EcmaScript(modern and similar to python)


// let http = require("http");
const hostname ='127.0.0.1';
const port = 3000;
const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    // res.setHeader('Content-Type','text/plain');
    //text/plain writes the content as is to the server not including the html tags so we use text/html

    //Content type header determines the way our content will be outputed
    res.setHeader('Content-Type','text/html');
    res.end('<h1> Hello World </h1>');
})
server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})


//The code above is for a private server we include the nodemon module so that we don't have to start the server all over again and again after making changes 

//nodemon starts watching the files for changes(if any)

//nvm package is used for maintaining and using various node versions


// when we set type to the main as module(go to package.json to see) it uses ecmascript from its version 6 onwards which works asyncronously unlike the commonjs which works syncronously (blocking code is used)


