console.log("Functions");


function nice(name) {
    console.log("Hey " + name + " you are nice!");
    console.log("Hey " + name + " you are good!");
    console.log("Hey " + name + " you are Hahu!");
}
nice("Harry");
//by using function we are packing a block of code in a particular parameter(here nice) which can be changed easily and can be reused as many times as necessary


function sum(a,b,c=3){
    // console.log(a+b); using console.log the javascript doesnt know what is the value of result.

    //c=3 is a default function and its value is optional to enter.
    console.log(a, b, c);
    return a+b+c;
}
result1 = sum(3);    //example of passing only one number output is NaN(Not a Number)
result2= sum(19,65);
result3 = sum(64,90,1);

console.log("The sum of these numbers is: ",result1);
console.log("The sum of these numbers is: ",result2);
console.log("The sum of these numbers is: ",result3);


const func1 = (x)=>{
         console.log("Hi I am an arrow Function",x);
}
func1(34);
func1(66);
func1(84);





