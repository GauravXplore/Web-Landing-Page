let a = 5;               //when let is used here it becomes a global variable too
var b = 6;
var c = "Harry";
// numbers, letters, underscores, dollar sign can be used to define a variable.
// but the name must start with underscore, dollar or a letter 
//variables are case sensitive.
console.log(a+b);
console.log(typeof a, typeof b , typeof c);

{
    let a = 66;
    // now the value shown will be 66.
    //as let is block scoped 
    console.log(a);         
    //example of using value of a in a block
    // hence a is now a global variable
    // let is used for blocks as the value can be taken from var incase let is not used.
}
console.log(a);
// here value of a will be 5.
 

const a1 =6;
// now a1's value cant be changed a1 + 1 will be a invalid change. This is to ensure that the value of a1 is not changed unknowingly.
// var can be used anywhere in the script whereas let and const can only be used in their specified blocks


// Primitive data types in JS:
// null
// Number
// String
// Symbol
// undefined
// Boolean
// BigInt



let x = "Hi Baccho";
let y = 22;
let z = 3.5;
const p = true;
let q = undefined;
let r = null;


console.log(x, y, z,p, q, r);
console.log(typeof x, typeof y, typeof z,typeof p, typeof q, typeof r);



let o = {
    "name": "Haha",               //"key": "Value", next key : value 
    "job code" : "5600",
    "is_good": true
}
console.log(o);
console.log(typeof o);


o.salary ="100crores";
console.log(o);
o.salary ="500crores";
console.log(o);