console.log("DOM - Children, Parent and Sibling Elements")

// document.body.childNodes[0]
// this will return the first child node of the body element which will be a text node (the whitespace before the first element)

//childNodes property returns a collection of child nodes of the specified element, including text and comment nodes.

document.body.childNodes[1].childNodes; // this will return children of the second child node of the body element 


let cont = document.body.childNodes[1];
cont.firstChild;   //returns what is the type of first child


cont.lastChild;   //text node of the last child of the container


//To target only the div boxes we use the elementchild property which only targets the elements unlike childnodes which also target the text


console.log(cont.firstElementChild);

cont.lastElementChild.style.backgroundColor = "red";  //this will change the background color of the last child element of the container to red



//To target the parent of the element we use the parentElement property

console.log(cont.lastElementChild.parentElement);  //this will return the parent element of the last div box which is the container div


//To target the sibling elements of an element we use the nextElementSibling and previousElementSibling properties

console.log(cont.firstElementChild.nextElementSibling);  //this will return the next sibling element of the first div box which is the second div box

console.log(cont.lastElementChild.previousElementSibling);  //this will return the previous sibling element of the last div box which is the fourth div box

// only previoussibling returns a text node

//To obtain all the child elements of a parent element we can use the children property which returns a live HTMLCollection of all child elements of the specified element.

console.log(cont.children);  //this will return all the child elements of the container div




document.body.children; // returns container div and the table.

let table = document.body.children[1];  //this will return the table element

console.log(table);  

table.rows //collection of all the rows in the table
table.rows[0].cells //collection of all the cells in the first row of the table

table.caption;  //reference to the caption element of the table

table.thead;  //reference to the thead element of the table

table.tfoot; //reference to the tfoot element of the table

table.tBodies; //collection of all the tbody elements in the table

table.tBodies[0].rows; //collection of all the rows in the first tbody element of the table

table.tBodies[0].rows[0].cells; //collection of all the cells in the first row of the first tbody element of the table

table.rows[0].sectionRowIndex; //returns the index of the row in the table's rows collection

table.rows[0].rowIndex; //returns the index of the row in the table's rows collection, including thead and tfoot rows

table.rows[0].cells[0].cellIndex; //returns the index of the cell in the row's cells collection

console.log(typeof(document));
console.log(typeof(window));