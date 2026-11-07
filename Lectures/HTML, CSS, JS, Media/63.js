console.log("Arrays");
let arr = [1, 2, 3, 4, 5];
  //Index  0, 1, 2, 3, 4

arr[0]=5666;  //assigns the value 5666 to arr 0th index. Arrays are mutable
// console.log(arr);
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr[4],typeof arr);   //type of array returns object.


console.log(arr.toString());
//converts array to string

console.log(arr.join(" and "));
//joins the strings with "given string" instead of commas.

let a = [1,2,3,4,5,6];
console.log(a.pop());   //pops out the last element of the array returns the array without the last element.

a.push(100);
console.log(a);
//adds another element to the end of array. Returns the updated length of array.

a.push("Harry");
console.log(a);
//we can add any datatype to the array.


a.shift();    //pops out the first element of the array     -  pop() ka bhai
console.log(a);      

a.unshift(10);   //adds element to the starting of the array.    - push() ka bhai
console.log(a);


delete a[6];   //deletes the element at 6th index but the memory allocated remains the same.
console.log(a);

let a1 = [1,2,3];
let a2 = [4,5,6];
let a3 = [9,8,7];

let anew = a1.concat(a2,a3);   //doesnt change existing arrays

console.log(anew);

anew.sort();  //sorts array elements alphabetically
//sort() takes an optional compare function. If this function is provided as the first argument, the sort() function will consider these values(the values returned from the compare function) as the basis of sorting.
console.log(anew);  

anew.splice(1,2);       //helps insert or remove elements from a certain position. Start index and end index given in braces. Example of removing elements

console.log(anew);


anew.splice(1,2,24,60);   //example of insertion of elements
console.log(anew);

const num = [1,2,3,4];
num.slice(1);           //returns a new array removed from the parent array from index 2.
 
console.log(num.slice(1,3));       //new array from index 1 to index 2 because index 3 is non-inclusive.


a1.reverse();      //reverses the source array
console.log(a1);








