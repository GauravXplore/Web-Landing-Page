console.log("Faulty Calculator Ex 9");
let random = Math.random();
console.log(random);
let a = prompt("Enter first number: ");
let c = prompt("Enter operation to perform: ");
let b = prompt("Enter second number: ");
let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}
// if(random>0.1){
//     if( c == "-"){
//     console.log(a-b);
//     }
//     else if(c== "/"){
//     console.log(a+b)
//     }
//     else if(c== "*"){
//     console.log(a*b)
//     }
//     else{
//     let result = +a + +b;
//     console.log(result)
//     }
// }else{
//     // c=obj(c);
    
// }

// using eval()
// $-template literal

if(random>0.1){
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}else{
    c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
 }