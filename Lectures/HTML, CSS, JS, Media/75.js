console.log("Callbacks");




console.log("I am a Hacker");    //1
console.log("He is a Hecker");   //2 


setTimeout(() => {
    console.log("I am inside settimeout.")    //4
}, 0);
setTimeout(() => {
    console.log("I am inside settimeout 2.")   //5
}, 0);


console.log("The End");    //3 

// Order of execution is written in comments


//This code tells us about the asynchronous nature of JS which executes all statements but not always linewise like the above function gets printed after 2 sec of execution of every statement in the code.





const fn = () => {
  console.log("Nothing");
}

const callback = (arg, fn) => {
    console.log(arg);
    fn();
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Hi", fn);
    document.head.append(sc);
}


loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prisms.min.js", callback)





