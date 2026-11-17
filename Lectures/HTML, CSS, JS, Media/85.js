console.log("Hello World")
// var slugify = require('slugify')
import slugify from 'slugify'
let a = slugify('some String')
console.log(a);

//if you prefer anyhting other than '-' as separator
const b = slugify('some st&&*(^%$$ring', '_')
//returns some_st(converted slug)ring
console.log(b);

//basically slug is a naming pattern used in urls it does not intake some special characters designated before or spaces so it removes them and replaces them accordingly.

//the imported package has a logic of its own written before so everyone can use it

//packages are like mobile phones most people dont know what's inside them they just know how to use it

//to install a package use npm i (package name) or npm install (package name) or npm i- downloads all the dependencies required for the package

//go to https://nodejs.org/en/learn/getting-started/introduction-to-nodejs