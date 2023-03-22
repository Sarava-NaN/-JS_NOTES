// variable
let name = "sarwan";
name = "saravanan";
const dob = "25-09-1994";
var msg = "hello my name is " + name + " and i was born on " + dob + " i'm learning Javascript";
// alerting
// alert(msg);
// logging
console.log(msg);
// concatenation example two "strings" merge
let $text1 = "hello";
let $text2 = "World!";
const Result = $text1.concat(" " + $text2);
document.getElementById("demo").innerHTML = Result + msg;
document.getElementById("demo").style.fontSize = "1rem";
document.getElementById("demo").style.color = "purple";
document.getElementById("demo").style.backgroundColor = "lightgreen";
document.getElementById("body").style.backgroundColor = "black";
document.getElementById("div").style.border = "2px solid red";
document.getElementById("div").style.backgroundColor = "gray";
document.getElementById("div").style.width = "1000px";
// document.getElementById("body").style.margin = "auto";
/*
JS Rules;
1.variables could,nt store with keywords;
2.variables Not start with numbers;
3.variables not start spacing _use underscore or $;
4.its case sensitive
*/
// VARIABLE KEYWORDS
//var-is a old keyword
//let-is a new keyword
//const-is a keyword
//Javascript Datatypes-
/*
primitive types / reference type
 1."string"            Object
 2.integer/number2,2.33   Array
 3.booleantrue,false       Function
 4.undefined
 5.null
*/
let firstName = "Saravanan";
let Age = 28;
let Last_Name = undefined;
let married = true;
let tropy = null;
//Javascript Objects,key,Values
console.log("Objects");
let Objects = {
    FirstName: 'Saravanan Madeshwaran',
    age: 28,
    gender: "Male",
    isAlive: true,
    PlaceOfBirth: "Puliyandapatti,Tamil Nadu,India",
    siblings: {
        brother: 'sivanesh',
        sister: 'Jenifer'
    }
}
Objects.age = 25;
//Dot Notation
console.log(Objects.PlaceOfBirth);
console.log(Objects.age);
console.log(Objects.siblings.sister);
//Bracket Notation
console.log(Objects['gender'], Objects['isAlive'], Objects['PlaceOfBirth']);
console.log(Objects['siblings']);
console.log(Objects['siblings']['sister'], Objects['siblings']['brother']);

//JS ARRAYS
console.log("arrays");
let favColors = ["red", 'wthite', 'black'];
favColors[3] = 'pink'
console.log(favColors);
console.log(favColors[3], favColors[2]);
console.log(favColors.length);

//Functions
console.log("Functions");
function myFunction($firstName, $lastName) {
    let name = 'saravanan';
    let msg = "Hello i'm " + $firstName + " " + $lastName + " i'm Learning JAVASCRIPT";
    console.log(msg)
}
myFunction('Sarwan', 'Madeshwaran');
myFunction('Kalai_SELVI', "Moorthi");
//My Exercise Using Functions
console.log("Functions using integers");
function $myIdea(num1, num2) {
    console.log(num1 + num2);
    console.log(num1 - num2);
    console.log(num1 / num2);
    console.log(num1 % num2);
}
//call a function
$myIdea(78, 22);
$myIdea(100, 100);
$myIdea(22, 88.22);
$myIdea(22, 134.99);


