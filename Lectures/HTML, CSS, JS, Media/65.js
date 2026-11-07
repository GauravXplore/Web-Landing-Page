console.log("Exercise 11");
// let a = prompt("Enter the number:");

// let arr = [];
// for (let i = 1; i<=a; i++) {
//     arr.push(i);
// }console.log(arr);
// const fact =(a,b)=>{
//    return a*b;
// }
// console.log("Factorial: ",arr.reduce(fact));
let a = 6;

function factorial(number){
    let arr = Array.from(Array(number+1).keys()); // this function(Array.from(Array(number).keys())) returns a array
    console.log(arr.slice(1,));
    let c = arr.slice(1,).reduce((a, b)=>{
     return a*b;
    })
    console.log(c);
}
factorial(a);


function facFor(number){
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index;
        
    }
    return fac;
}
facFor(a);

