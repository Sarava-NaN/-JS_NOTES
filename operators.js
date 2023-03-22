//operators is like a spinal bone for js
console.log("Operators and its types");
console.log("1.Arithmetic Operators");
console.log("2.Comparison Operators");
console.log("3.Assignment Operators");
console.log("4.Logical Operators");
console.log("5.Bitwise Operators");
console.log("Arithmetic Operators++,--,**");
let $num1 = 5;
let $num2 = 25;
//increment(++)
console.log(++$num1);
//Decrement(--)
console.log(--$num2);
function $operators($num_1, $num_2) {
    let $num1 = 5;
    let $num2 = 25;
    console.log($num_1 + $num_2);
    console.log($num_1++);
    console.log($num_1);
}
$operators(5, 25)
$operators(25, 25);
console.log("2.Comparison Operators 1>5");
let x = 100;
//Equality Operators
console.log(x === 100);
//Relational Operators

console.log(1 > x)//Greaterthan
console.log(1 < x)//less than
console.log(x = ++x)
console.log(--x, x++)
console.log(x);
console.log(101 <= x);//lessthan or equal too
console.log(100 >= x);//Greaterthan or equal too

let X = 300;
//Equality Operators
console.log(X === 300);
console.log(X !== 300);
//string comparison
console.log('Sarwan' > 'Ajith');//dictionary mode
console.log('ZZZ' <= 'ZZZ');//dictionary mode
console.log("1" < 5);//true
console.log(true == 1);//1 means true 0 means false
console.log("ABCD" < "ABCF");
//Strict Equality Operators(Datatype+Value should be same)
console.log(1 === 1);//Number===Number=True
console.log('1' === 1);//String===Number=False
//Lose Equality Operators
console.log(1 == 1);//(Number==Number)=True
console.log('1' == 1);//(String==Number)=True
console.log(true == "0");//(Boolean==String)=True
//Ternary Operators before they use if else statement
let $Age = 18;
// window.prompt($Age)
let result = $Age >= 18 ? "Adult Ticket" : "Please EXIT";
console.log(result)
//Function in Ternary Operators-
function $Event(Age) {
    let $Age = 22;
    let $Evnt = Age >= 18 ? "Adult Ticket" : "Child Not Allowed"
    console.log($Evnt)
}
$Event(10)
$Event(18)
$Event(17)
$Event(13)
$Event(38)



