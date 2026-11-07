console.log("Classes and objects - OOPS");


// let obj = {
//     a:1,
//     b:"Harry"
// }
// console.log(obj);     
// //JS objects have a special property called prototype that is either null or references another object

// let animal ={
//     eats:true
// };
// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal;   //sets rabbit[[Prototype]] = animal;


class animal{
    constructor(name){
        this.name = name;   
        //(this) is a way to create properties in an object
        console.log("Object is created...");   
    }
    eats(){
        console.log("Kha rha hu");
    }
    jumps(){
        console.log("Kud rha hu");
    }
}
class lion extends animal{
    //extends keyword adds properties of other classes to the created class i.e. inheritance
   constructor(name){
        super(name);
        console.log("Object is created and he is a lion"); 
 
        //super function calls the constructor animal from above so that this.name could work. Super class - the parent class from which the inherited class was derived.
 }
 eats(){
    super.eats();
    console.log("Kha rha hu roar!");
 
    //lion's eat method has been overwritten this is called method overwriting.

      }
}

let a = new animal("Bunny");
console.log(a);

let l = new lion("Shera");
console.log(l);


//static methods are used to implement functions that belong to a class as a whole and not to any particular object.

class User{
    constructor(name){
        this.name = name;
    }
    get name(){
        return this._name;
    }
    set name(val){
 if(val.length < 4){
    console.log("Name is too short.");
    return;
 }
 this._name = val;
    }
}
let user = new User("John");
console.log(user.name);

user = new User("");

//instanceOf Operator checks if a particular object is created from a particular class. returns true or false.
//It returns true for the class and its parent classes





































