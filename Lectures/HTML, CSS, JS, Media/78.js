console.log("Exercise 14");
let html;

async function msg(){
    return new Promise((resolve,reject)=>{
        resolve(
    setInterval(() => {
        
    let a = Math.random()*7;
    if(a<1.4){
        html = "Initializing Hacking";
    }else if(a<2.8){
        html = "Reading your Files";
    }else if(a<4.2){
        html = "Password files Detected";
    }else if(a<5.6){
        html = "Sending all passwords and personal files to server";
    }else{
        html = "Cleaning up";
    }
    let next = document.createElement("div");
    next.setAttribute("class","msg");
    document.querySelector(".container").append(next);
    next.innerHTML = html;
    next.style.backgroundColor = "green";
},Math.random()*7000));
})
}


async function dots() {
    let msgfst = await msg();
    
    let dotcontainer = document.createElement("div");
    dotcontainer.setAttribute("class","dots");
    document.querySelector(".msg").appendChild(dotcontainer)[0];
    let dot1 = document.createElement("div");
    document.querySelector(".dots").appendChild(dot1);
    let dot2 = document.createElement("div");
    document.querySelector(".dots").appendChild(dot2);
    let dot3 = document.createElement("div");
    document.querySelector(".dots").appendChild(dot3);
    


    setInterval(() => {
      dot1.innerHTML = ".";
    },1000);

    setInterval(() => {
      dot2.innerHTML = ".";
    },750);

    setInterval(() => {
      dot3.innerHTML = ".";
    },1000);
}dots