let button = document.getElementById("btn");
button.addEventListener("dblclick",()=>{
//    alert("I was clicked yayyy!")
document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!!"
})
button.addEventListener("contextmenu",()=>{
     alert("Don't Right click Please!!")
})
document.addEventListener("keydown",(e)=>{
     console.log(e.key);
})