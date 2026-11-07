console.log("Advanced JS");

async function sleep(){
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve(45);
      }, 1000);
    })
}

function sum(a, b, c){
   return a+b+c;
}



(async function main(){
  console.log(a1);    // this log throws error if the variable is let or const value upar nhi aayegi bs declare ho jayega a1.

  



    // let a = await sleep();
    // console.log(a);
    // let b = await sleep();
    // console.log(b);


// let [x, y, ...well] = [1, 5, 7, 8, 9, 10];
// console.log(x, y, well);

//(...)triple dots represent destructuring

let obj = {
    a:1,
    b:2,
    c:3
}

let {a,b}=obj;
console.log(a, b);


let arr = [1, 4, 6];
console.log(sum(arr[0], arr[1], arr[2]));
// console.log(arr[0]+ arr[1]+ arr[2]);
console.log(sum(...arr));
//{0:1,       index:value
// 1:4, 
// 2:6}

//here (...) triple dots are known as spread operator.
})();
//Above is an example of Immediately Invoked Function Expression (IIFE). 


const arr = [1, 7, 11];
const obj = {...arr};
console.log(obj);

var a1 = 6;

// hoisting is the process by which a (var) variable appears to be going towards the log of variable 




