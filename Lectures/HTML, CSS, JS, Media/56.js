console.log("Conditionals");

let age = 45;
let grace = 2;

age += grace;   //age = age+grace;
//  console.log(age);
//  console.log(age%grace);     //modulus(remainder)
//  console.log(age+grace);     //add
//  console.log(age-grace);    //subtract
//  console.log(age*grace);   //multiply
//  console.log(age/grace);  //divide
//  console.log(age**grace);//exponential operater


/*(Multi line comments) 
comments are ignored by the 
compiler*/



if (age == 18) {              //checks whether age is equal to 18 if age=18 was written in its stead then the condition will always be true
   //!= - not equals to
   //=== - checks value as well as type
   //!== - not equal value or not equal type
   console.log("You can drive");    //if-block
} else if (age == 0) {
   console.log("Are you bachaaing me?");
} else if (age == 1) {
   console.log("Firse baccha kr rhe ho?")
} else {
   console.log("You cannot drive");    //else-block
}
let a = 6;
let b = 8;
let c = a > b ? (a - b) : (b - a);

/*
translates to:
if(a>b){
let c= a-b;
}else{
   let c = a+b;
}
   */