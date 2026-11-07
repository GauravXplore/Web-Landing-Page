console.log("Try and Catch");

let a = prompt("Enter First number: ");

let b = prompt("Enter Second number: ");
if(isNaN(a)||isNaN(b)){
    throw SyntaxError("Sowwy cutie no luck >w<")
}
let sum = parseInt(a) + parseInt(b);   //parses our string input to integer 

function main(){
let x = 1;
try {
    console.log("The sum is", sum*x);
    return true;
    
} catch (error) {
    console.log(error.name);
    console.log(error.stack);
    console.log(error.message);

    console.log("Sowwy cutie");
    return false;
}


finally{
    console.log("Files are being closed and db connection is being closed ")
}
}
//finally is useful in functions when we want a line of code to execute even when return is used within try and catch which does not allow any other statements outside try and catch to execute except for finally.
