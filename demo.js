/*Variables-keywords names=Values
Variables Keywords is var(Old version),let(echma script or Es6),const(Constant Value) 
*/
let $Name = "Sarwan";
$Name = "Saravanan";
let $LastName = "Madeshwaran"
// document.write($Name);
document.write(" Hi I'm " + $Name + " " + $LastName + " i'm Learning Javascript ");
let Age = 28;
document.write(" My Age IS " + Age + ' ');
//Concatation examples
var X = 'My';
var Y = 'Pleasure';
var $End = X.concat(" ", Y);
console.log($End);
//Js Data Types * 8-Data types
/*
{PRIMITIVE DATA TYPE
1."String".
2.Number/Integer.
3.Boolean/True,False.
4.Null.
5.Undefined.
}
{REFERENCE TYPE
6.Object.
7.Array.
8.Function.}
 */
//Functions
function Input() {
    alert('Virus Ditected')
}
function MyFun(name, subject, num1) {
    let Mark = "Hi " + name + " your " + subject + " Mark is " + num1;
    document.getElementById("Demo").innerHTML = Mark;
    console.log(Mark)
}
MyFun("Saravanan", "English", 88);
MyFun("Saravanan", "Tamil", 80);
MyFun("Saravanan", "Maths", 78);
//Objects
let $Person = {
    Fname: "Saravanan",
    Lname: 'Madeshwaran',
    Age: 28,
    DOB: "25 - 09 - 1994",
    IsAlive: true,
    Place_of_Birth: 'Krishnagiri',
    Fav_Food: {
        Veg: 'VegMeal',
        Non_veg: "Mutton Biriyani"
    }
}
console.log($Person)
document.getElementById('Demo-1').innerHTML = $Person;
console.log($Person);
//Dot Notation
console.log($Person.Fname, $Person.Lname, $Person.IsAlive, $Person.Place_of_Birth)
//Bracket Notation
console.log($Person["Fav_Food"], $Person["Fav_Food"]['Non_veg'], $Person['Fav_Food']['Veg']);
//Arrays
let FavCar = [' Tata Altroz', 'BMW', 'Mahendra XUV', 'Scoda'];
FavCar[4, 5] = ['Honda i20', 'KIA SONET']
document.getElementById("Demo-3").innerHTML = FavCar;
document.getElementById("Demo-4").innerHTML = FavCar[2] + FavCar[0];
//string
let $string = "Hello"
console.log($string);
let A = 100;
let B = 20;
console.log(A >= B);
//ternary operation
let Zoo = 17.9;
let Con = Zoo >= 18 ? "Yes Allow" : "No Exit"
console.log(Con)
//arithmatic operators
let $num_1 = 10;
let $num_2 = 20;
console.log($num_1++);
console.log($num_1);
console.log(++$num_1);
console.log(++$num_1);
console.log(++$num_1);
console.log(++$num_1);
console.log(++$num_1);
console.log($num_1++);
console.log($num_1++);
function $Aritmatic(Num1, Num2) {
    console.log(Num1 + Num2);
}
$Aritmatic(90, 10)
$Aritmatic(90, 10)
let $X = '1000';
let $Y = 1000;
console.log($X == 1000);
console.log($Y === 1000);
let x = 100;
//Relational Operators
console.log(1 > x)//Greaterthan
console.log(1 < x)//less than
console.log(x = ++x);
console.log(--x, x++, x++);
console.log(x);
console.log(101 <= x);//lessthan or equal too;
console.log(100 >= x);//Greaterthan or equal too;
console.log(false == 0);//(Boolean==String)=True;
//New Idea;
function Ternary() {
    let $Input = document.getElementById("input_1").value;
    console.log($Input);
    let $workout = ($Input >= 18) ? "EnTER" : "ExIT";
    document.getElementById("show").innerHTML = $workout;
}
//FUnction tables
function Scorer(name, goals) {
    this.name = name;
    this.goals = goals;
}
let p1 = new Scorer("Erling Haland", 29);
let p2 = new Scorer("C.Ronaldo", 28);
let p3 = new Scorer("Lional Messi", 27);
let p4 = new Scorer("Neymar JR", 25);
let p5 = new Scorer("Keylen Mbapee", 24);

console.table([p1, p2, p3, p4, p5]);
//console.count
function print() {
    console.count("Prints");
}
print()
print()
print()
//Javascript Swap values
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a);
console.log(b);



