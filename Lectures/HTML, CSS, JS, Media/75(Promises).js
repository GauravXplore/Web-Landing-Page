console.log('Promsies');

let prom1 = new Promise((resolve, reject)=>{    // Promise Constructor

    let a = Math.random();
    // console.log(a);
    
    if(a<0.5){
        reject("No random number is not supporting you!")
    }else{

        setTimeout(()=>{
            console.log("Yes I am done!");
            resolve("Hi");
        },3000)
    }
})
let prom2 = new Promise((resolve, reject)=>{    // Promise Constructor

    let a = Math.random();
    
    if(a<0.5){
        reject("No random number is not supporting you too")
    }else{

        setTimeout(()=>{
            console.log("Yes I am done!");
            resolve("Hello");
        },1000)
    }
})

// let p3 = Promise.all([prom1,prom2]);
// p3.then((a)=>{
//     console.log(a);    
// }).catch((e)=>{
//     console.log(e);
// })

// let p3 = Promise.allSettled([prom1,prom2]);
// p3.then((a)=>{
//     console.log(a);    
// }).catch((e)=>{
//     console.log(e);
// })



let p3 = Promise.race([prom1,prom2]);
p3.then((a)=>{
    console.log(a);    
}).catch((e)=>{
    console.log(e);
})

//races between promises the one that gives value first becomes the outcome of the promise


//any - waits for 1st promise to be fulfilled(not rejected) its result becomes the outcome.Throws aggregate error if all promises are rejected

//settle means either all values have been resolved or rejected. Resolve = value without error


// prom1.then((a)=>{
//     console.log(a);
    
// }).catch((err)=>{
//    console.log(err);
   
// })


//resolve - makes the value appear to be resolved same for promise.reject function