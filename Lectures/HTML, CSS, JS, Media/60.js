console.log("Strings");
let a = "Harry";
// index starts from 0
console.log(a[0]);      //access character at index 0
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]);

console.log(a.length);


let real_name ="Harry";
let friend = "Rohan";
console.log("His name is "+ real_name+ " and his friend's name is "+friend);

console.log(`His name is ${real_name} and hsi friend's name is ${friend}`);

//with template literals(${``}) we can use both single and double quotes inside a string. We can also insert variables using templates this is called string interpolation.

// Escape sequences 
// \n - new line 
// \t - tab space 
// \r - carriage return


let b = "Shivam"
console.log(b.toUpperCase());
console.log(b.toLowerCase());     // to upper and lowercase are functions
console.log(b.length);           // .length is  a property

console.log(b.slice(1,4));     // 4 not included gives the string from 1st index to 3rd index

console.log(b.slice(1));   //gives all the remaining characters from index 1.

console.log(b.replace("Sh", "77"));   // replaces 1st occurence of specified String

console.log(b.concat(a, "Aishwarya", "Rahul", "Priya"));
// we can even use + operator

let c = "    Hehe    "
console.log(c.trim());   // removes whitespaces


//Strings are immutable even after applying many operations it doesnt change. Example:

console.log(b);
// even though we changed b so many times its still the same string showcasing the immutable property of strings.

console.log(b.indexOf("i"));   //tells the index of given character or string

console.log(b.startsWith("Sh"));  //returns output as a       boolean if Sh is present at the start of the string.

