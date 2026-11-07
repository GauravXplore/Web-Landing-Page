let arr = [1, 13, 5, 7, 11];
// let newArr= [];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2);
    
// }

let newArr =arr.map((e)=>{
     return e**2;
})
console.log(newArr); // prints the square array of arr


const greaterThanSeven = (e)=>{
    if(e>=7){
         return true;
    }
    return false;
}                   //filters elements greater than 7
console.log(arr.filter(greaterThanSeven));


let arr2 = [1, 2, 3, 4, 5, 6];
const red = (a, b)=>{                   //6*5*4*3*2*1 a*b multiplies the elements of arr2 one at a time.
    return a*b;
}
console.log(arr2.reduce(red));