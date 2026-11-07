let a = [1, 93, 5, 6 ,88];

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element);
// }

a.forEach((value, index, arr)=>{
console.log(value, index, arr)     //it gives value then its index and then the full array as output.
});


let obj= {
     a: 1,
     b: 2,
     c: 3
}

for (const key in   obj) {
    if (Object.hasOwnProperty.call(obj, key)){    //if statement is there becoz of some built in objects having properties not deriving from the user created object.
    
    const element = obj[key];
    console.log(key, element);    //key are a,b,c elements are 1,2,3.
    
    }
}



for (const iterator of a) {      //iterator can be changed to any variable.
    console.log(iterator);       //prints value one by one of the array.
    
}

//if we want to make a new array from the original array in minimal lines of code we use map() function.
