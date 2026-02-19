// Array 

const newArr = ['yash',"uke",9,38,738];
// console.log(newArr[0]);
// console.log(newArr[1]);
// console.log(newArr[2]);
// console.log(newArr[3]);
// console.log(newArr[4]);

const myArr = new Array(1,2,3,4,5);
// console.log(myArr[1]);

// Array Methods 

// myArr.push(6);
// myArr.push(7);
// myArr.pop();
// myArr.unshift(0);
// myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const orgArr = myArr.join();
// console.log(orgArr);
// console.log(typeof orgArr);

// console.log("A ",myArr);

// const $1Arr = myArr.slice(1,4);
// console.log(`Sliced : ${$1Arr}`);

// console.log("B ",myArr);
// const $2Arr = myArr.splice(1,4);
// console.log(`Spliced : ${$2Arr}`);

// console.log("C ",myArr); // remaining ORIGINAL Array

const marvel_heroes = ["Ironman","Thor","Hulk","Spiderman"];
const dc_heroes = ["Superman","Flash","Batman","Aquaman"];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[4][2]); // Batman

const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes];
// console.log(all_new_heroes);

const anotherArr = [1,1,2,3,[4,5,6],6,7,[758,986,974,[846,857,394]]];

const realAnotherArr = anotherArr.flat(Infinity);
// console.log(realAnotherArr);

// console.log(Array.isArray("Yashu"));
// console.log(Array.from("Yashu"));
// console.log(Array.from({name:"yash"}));

let sc1 = 100;
let sc2 = 200;
let sc3 = 300;

// const new2 = Array.of(sc1,sc2,sc3);
// console.log(new2);
