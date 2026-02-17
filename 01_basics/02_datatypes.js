// console.log(9+53);

// let user = "root"
// let age = 20
// let isUserLoggedIn = false

//Primitive type

// Number => 2 to the power of 53
// bigInt => larger value than Number 
// String => "enclosed inside double quotes "
// boolean => true/false
// null => standalone value     // typeof null => object
// undefined => 
// symbol => uniqueness 

const score = 100;
const scoreValue = 100.98;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; 

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNum = 294326476427314612347239473n;

// Reference (Non- primitive)

// Arrays, Objects, Functions

const hero =["yash","sid","AP Dhokane"];
let obj= {
    name:"yashu",
    age: 18
}
const myFunction = function(){
    console.log("HEllo world!")
}

console.log(typeof scoreValue)