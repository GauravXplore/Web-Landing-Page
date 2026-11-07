console.log("More Properties of DOM");

let boxes = document.getElementsByClassName("box");
    console.log(boxes);  //this will return a HTMLCollection of all the elements with the class name "box"

// boxes[2].style.backgroundColor = "green";  

// document.getElementById("red").style.backgroundColor = "red";

document.querySelector(".box").style.backgroundColor = "green";  //this will change the background color of the first element with the class name "box" to green 

document.querySelectorAll(".box");  //this will return a NodeList of all the elements with the class name "box" Properties cant be applied to the NodeList directly and we have to use a loop to apply the properties to each element in the NodeList.

document.querySelectorAll(".box").forEach(e =>{
 e.style.backgroundColor = "blue";
})


let a = document.getElementsByTagName("div")  //returns a HTML collection

a[4].matches("#redbox")  //returns true if the element matches the specified selector, otherwise returns false


a[3].closest(".container")  //returns the closest ancestor of the element that matches the specified selector, otherwise returns null



console.log(document.querySelector(".container").contains(a[0]))
console.log(document.querySelector(".container").contains(document.querySelector("body")))