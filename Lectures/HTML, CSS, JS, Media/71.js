

console.log("Inserting and Removing Elements");

console.log(document.querySelector(".box").innerHTML)
console.log(document.querySelector(".container").innerHTML)
console.log(document.querySelector(".box").innerText)          // the text is hey i am a box only


console.log(document.querySelector(".container").outerHTML)    //gives the element as well as the content of the element.

console.log(document.querySelector(".container").tagName);      //gives div is applicable only for elements

console.log(document.querySelector(".container").nodeName);     //also gives div is applicable for all nodes

console.log(document.querySelector(".container").tagContent)


// console.log(document.querySelector(".container").hidden=true)   
// //hides the element 


document.querySelector(".box").innerHTML="Hi, now I am changed"


document.querySelector(".box").hasAttribute("style")   //gives true or false if the element has the attribute or not

document.querySelector(".box").getAttribute("class")   //gives the value of the attribute if it is present

// document.querySelector(".box").setAttribute("class","newBox")  
//sets the value of the attribute if it is present

// document.querySelector(".box").removeAttribute("class")  
// //removes the attribute if it is present

console.log(document.querySelector(".container").attributes)   //gives all the attributes of the element in the form of a collection

console.log(document.querySelector(".box").dataset);

let div = document.createElement("div");   //creates a new element in the memory but not in the DOM

div.innerHTML = "I have been inserted";
div.setAttribute("class","created");
// document.querySelector(".container").append(div)  
//appends the new element to the DOM (at the end)

document.querySelector(".container").before(div);
//adds the element before the query element in the DOM


//similarly after adds the element after the query element in the DOM.

//Prepend adds the element to the start of the query element.




let cont1 = document.querySelector(".container");
cont1.insertAdjacentHTML("afterbegin", "Hiiiiiiiiii");
//creates a element and inserts it immediately after the conatiner div(afterend)
//afterbegin adds element after the beginning of the div container
document.querySelector(".box").remove();
//removes selected node


document.querySelector(".container").classList;
document.querySelector(".container").classList.add("Hi");
document.querySelector(".container").classList.add("red");
document.querySelector(".container").classList.toggle("red");



document.querySelector(".container").className;




