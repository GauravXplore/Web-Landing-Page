console.log("Async/Await and Fetch API");


// settle means resolve or reject
//resolve means promise has settled successfully.
//reject means promise has not settled successfully.

async function getData() {
    //Simulate getting data from a server
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455);
        }, 3500);
    })                //async function will keep running in the background.
}
async function getData() {
    //Simulate getting data from a server
      let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
              method: 'POST',
              body: JSON.stringify({
                title: 'foo',
                body: 'bar', 
                userId: 1,
              }),
              headers: {
                'Content-type':'application/json; charset=UTF-8',
              },
      })



//   let x = await fetch('https://jsonplaceholder.typicode.com/posts/1');

  let data = await x.json();
  console.log(data);





  //.then(response => response.json())
//   .then(json => console.log(json))
}

async function main() {

    console.log("Loading modules");

    console.log("Do something else");

    console.log("Load data");


    let data = await getData();
    // data.then((v) => {


    console.log(data);

    console.log("process data");

    console.log("task 2");

}


main();
