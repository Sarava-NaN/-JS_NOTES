let x = 5;

// x = 5 + 4;
x *= 2
console.log(x);
const Y = 10;
const X = 10;
console.log(Y !== X);
console.log(true == 1);//1-true 0-false;
///===(same Datatype +value)
//==()
console.log("1" == 1);
//ternary operators condition ?"value1":'value2';
let Age = 18;
let result = (Age >= 18) ? "Yes" : "No";
console.log(result);
//logical operators
//Logical And(&&)
//Logical OR(||)
//Logical Not(!)
console.log('degree' && 'skill');
console.log(10 || 20);
let Salary = false;
let Cibil = true;
let Eligible = Salary || Cibil;
let App = !Eligible;
console.log("Loan Eligible:" + Eligible);
console.log("APP Eligible:" + App);
//Falsy(False)
//undefined
//null
//0
//NaN--Not A Number
//False
//''--""
let MyFav = '';
let Myhate = "Green";
let Color = MyFav || Myhate;
console.log("My Color: " + Color);
//#25video--
//Bitwise Operators
//Human code-->Machine Code
//    1--->0000001;
//    2--->0000010;
//    3--->0000011;
//    4--->0000100;
//    5--->0000101;
//Result-->0000010;--2
console.log(8 | 4);
console.log(8 | 87);
//Js conditional Statements;
//If-else condition;
let isCold = 0;
let isRainy = 1;
if (isRainy || isCold) {
    console.log("Pls Bring Umbrella");
    console.log("Pls Bring Umbrella");
}
else {
    console.log("Weather is Normal");
}
//Good Morning(12AM-12PM)
//Good Afternoon(12PM-17PM)
//Good Evening(17PM-11.59PM)
let Hrs = new Date();
let grettings;
if (Hrs < 12)
    gretting = "good morning"
else
    gretting = "good Evening:"
document.getElementById("demo").innerHTML = gretting;
document.getElementById("demo").style.color = "red";
document.getElementById("demo").style.fontSize = "2.6rem";
document.getElementById("demo").style.textDecoration = "underline";
document.getElementById("demo").style.textDecorationColor = "purple";
document.getElementById("demo").style.textTransform = "capitalize";
/*Arithmatic operators +-*%
Assignment operators += -= *=
Comparison operators X<B;A=B;
String operators "Abi"<"Anbu"
Bitwise operators |,&
Ternary operators (condition)?"":"";
Logical operators Logical And && logical OR|| Logical Not ! ??Nullish Coalescing :::::::::----
Type operators*/
//12/Aprial-2023//::::::---->
//Switch Case
let Grade = "S";
switch (Grade) {
    case "S":
        text = "90-100 Marks VVGood";
        break;
    case "A":
        text = "80-90 Marks Good";
        break;

    case "E":
        text = "70-80 Marks Average Pass";
        break;

    case "U":
        text = "1-45 Marks Fail Grade";
        break;

    default:
        text = "Unknown Grade";

}
document.getElementById("demo_1").innerHTML = text;
document.getElementById("demo_1").style.color = "red"
document.getElementById("demo_1").style.fontSize = "2.3rem"

let Marks = 55
switch (true) {
    case Marks > 90:
        document.write("Super Grade 99%");
        break;
    case Marks >= 70:
        document.write("Decent Mark pass");
        break;
    case Marks >= 50:
        document.write("Average Mark Pass");
        break;
    case Marks >= 49:
        document.write("Failed");
        break;
    default:
    case Marks > 1 && Marks < 30:
        document.write("Dhanda Karumam")
}
document.getElementById("demo_2").innerHTML = document.write()
document.getElementById("demo_2").style.color = "red";
let Budget = 10001;
switch (true) {
    case Budget > 80000:
        document.write("You can Buy a Iphone 14plus Now")
        break;
    case Budget > 50000:
        document.write("You can Buy a IPhone 8")
        break;
    case Budget > 30000:
        document.write("You can Buy a Android Now")
        break;
    case Budget > 10000:
        document.write("You can Buy a Basic Mobile Now")
        break;
    default:
        document.write("You Cant Buy Anything Please Save Money")
}
document.getElementById("demo_3").innerHTML = document.write()
document.getElementById("demo_3").style.fontSize = "2rem"
//#29--Js for Loops//
console.count(1)
console.count(2);
console.count(3);
console.count(4);
console.count(5);
// for (initialExpression; condition; step) {
//     console.log("");
// }
for (i = 31; i > 1; i--) {
    if (i % 2 !== 0) {
        console.log("Number#" + i);
    }
}
//#30--while loop-
let A = 30;
while (A >= 1) {
    console.log("While#" + A);
    A--
}
//for-in-loop
let Person = {
    name: "saravanan",
    age: 28,
    sex: 'MALE'
}
for (let key in Person) {
    console.log(key + ":", Person[key]);
}
let Array = ['red', 'green', 'orange', 'pink'];
for (let key in Array) {
    console.log(Array[key]);
}
// let $name = 'saravanan';
// let $age = 28;
// let interest = "Creating web Apps, and pages";

// let address = {
//     city: "Chennai",
//     state: "Tamil Nadu",
// }
// function greeting() {
//     let Msg = "My name Is " + $name + " i Love Javascript and " + interest;
//     let Msg_2 = `My name is ${$name} and i love JS and ${interest}`
//     console.log(Msg);
//     console.log(Msg_2);
// }
// greeting()
//#35-- Object-oriented programming (OOP)
//Object-oriented programming (OOP)
let $person = {
    name: "Saravanan",
    $age: 28,
    interest: ["Creating web Apps, and pages"],
    isAlive: true,
    address: {                  //We call it Nested Objects
        city: "Chennai",
        state: "Tamil Nadu",
    },
    gretting: function () {
        let Msg = "My name Is " + this.name + " i Love Javascript and " + this.interest + " and " + this.address.city;
        let Msg_2 = `My name is ${this.name} and i love JS and ${this.interest}`
        console.log(Msg_2);
        console.log(Msg);

    }
};
console.log($person.gretting());
//#36--Factory Function
function CreatePerson(name) {
    return {
        name,
        $age: 28,
        interest: ["Creating web Apps, and pages"],
        isAlive: true,
        address: {                  //We call it Nested Objects
            city: "Chennai",
            state: "Tamil Nadu",
        },
        gretting() {
            let Msg = "My name Is " + this.name + " i Love Javascript and " + this.interest + " and " + this.address.city;
            let Msg_2 = `My name is ${this.name} and i love JS and ${this.interest}`
            console.log(Msg_2);
        }
    };
}
let Janani = CreatePerson("Janani");
let Kathir = CreatePerson("Kathir");
Janani.gretting()
Kathir.gretting()
//#37--Constructor Functions;
function PPT(first, last, age, email) {
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.email = email;
}
const MyFather = new PPT("SARWAN", "JR", 28, 'adamantium.sarwan@gmail.com');
console.log(MyFather.email);
//#38-dynamic Objects;
const $person_4 = {
    name: 'Sarwan',
}
$person_4.name = "Muthu Pandi"
$person_4.age = 28;
$person_4.gretting = function () { };
delete $person_4.age;
// delete $person_4.name;
delete $person_4.gretting;
delete $person_4
console.log($person_4);
//41--Primitive Values vs Reference;;
// let R = 10;
// let C = 20;
// [R, C] = [C, R];
// console.log(R);
// console.log(C);
let W = 10;
let E = W;
W = 30;
//this is primitive


//Reference Data type
let R = { value: 30, }
let T = R;

R.value = 4440404;

for (i = 0; i < 10; i++) {
    if (i % 2 && i !== 0) {
        console.log("Number " + i);
    }
}
let cart = { value: 5 };
function Update(cart) {
    cart.value++
}
Update(cart);
console.log("Carts Available ", cart);
let Peru = {
    name: "Saro",
    getFullName() {
        console.log(`my name is ${this.name}`);
    }
}
let Peer = Object.assign({ age: 28, }, Peru);
// for (let key in Peru) {
//     Peer[key] = Peru[key];
console.log(Peer);
// let Peer_ = { ...Peru }
let $Fname = `Saravanan`;
let $Lname = `Madeshwaran`;
const $Ffname = new String(`Saravanan`)
const $Llname = new String(`Madeshwaran`)
console.log($Ffname);
console.log($Llname);
//46 videos today
const $Cont = "Hello Boy i need \n\"Beer\" now"
console.log($Cont);
const $Cont_2 = `Hello
 Boy
  i
   need
    Beer
               now`
console.log($Cont_2);
//#47--Js Template Literals
//objests:{}
//Boolean:true,false
//String:'',"";
//#45 Math Objects;
console.log(Math.abs(-3));
function Random(min, max) {
    return Math.random() * (100 - 1) + 1;
}
console.log(Random());

let Mol = [55, 90, 98, 44, 22, 11];
let Result = Math.max(...Mol);
console.log(Result);
console.log("THis is Var Keyword");//Function scope
var d = 33;
var d = 66;
function DD() {
    var d = 111
    console.log(d);
}
console.log(d);
DD();
console.log("THis is Let Keyword");//Block Scope
let web = 303;
web = 440;
// let web = 66;
function DD() {
    let d = 113
    console.log(d);
}
console.log(web);
DD();
console.log("THis is Const Keyword");//Block Scope
const peb = 303;
// const peb = 440;
// let web = 66;
function DD() {
    const peb = 1443;
    console.log(peb);
}
console.log(peb);
DD();
//#49Array in depth
const Actors = ['Suriya', 'Arya', 'Maddy', 'Vikram', 'Rajini', 'Kamal', 'Vijay', 'Ajith', 44, true, undefined, NaN];
Actors[13] = "VijaySethupathi"
Actors.push('Vijayakanth')
Actors.unshift(`Kollywood Kings:`)
Actors.splice(1, 0, 'Sivaji', 'sivakarthikeyan')
console.log(Actors);
console.log(Actors.length);
console.log(Actors.indexOf('Vijay'));
console.log(Actors.lastIndexOf('Vijayakanth'))
//Finding Elements in JS_Arrays 
console.log(Actors.indexOf('red') == -1);
console.log(Actors.includes('Sivaji'));
const Bolly = {
    Actor1: 'Amirkhan',
    Actor2: 'Sharuk khan',
    Actor3: 'Salman khan',
    Actor4: 'Hritick Roshan',
}
console.log(Bolly.Actor4.concat(`         
 

`
    + 'Punda'));
console.log(Bolly.Actor1.length);
let Orders = {
    id: [1, 2, 3, 4, 5, 6]
}
console.log(Orders.id.includes(1));


//#53--ES6 Arrow Functions
//Syntex
// #Noraml Function           #Arrow function
//  function(parameters)     (Parameters)=>
//  { your logics}           {Your logics}
let Vegitales = [
    { No: 1, item: 'Onion', quantity: '1/2kg', },
    { No: 2, item: 'tomato', quantity: '2kg', },
    { No: 3, item: 'Brinjal', quantity: '4kg', },
    { No: 4, item: 'Cucumber', quantity: '.5kg', },
]
let $result = Vegitales.find((Or) => Or.No === 4)
console.log($result);
//#54-Removing element in the JS array
const Num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

Num.pop()
Num.pop()
Num.pop()
Num.shift()
Num.shift()
Num.splice(2, 1);
console.log(Num);


//#55Emptying an js Array
let Hp = ['Hp Pavilon', 'Hp NoteBook']
// Hp = [];
Hp.length = 0
console.log(Hp);
//56 combine two arrays
let $A1 = ['Mutton', 'Rice', 'Oil,'];
let $b1 = ['Salt', 'Ghee', 'Onions'];
// let Concat = 'Cooking Instructions:'.concat($A1 + $b1)
let Concat = 'Cooking Instructions:' + [...$A1, ...$b1];//Spread Operators after Es6
console.log(Concat);

let Rotine = ["Play", 'Eat', 'Sleep', 'Repeat', ''];
//for of
for (let Daily of Rotine)
    console.log(Daily);
//for in
for (let Daily in Rotine)
    console.log(Daily, Rotine[Daily]);
//for each--recomdended
Rotine.forEach((Rotine, Non) => {
    console.log(Non, Rotine);
});
let yyy = Rotine.join('ing,');
console.log(yyy);
let $enPeru = 'Saravanan Madeshwaran'
let $ppp = $enPeru.split(" ");
let $fname = $ppp[0];
let $lname = $ppp[1];
document.getElementById('demo_5').innerHTML = `My First Name is ${$fname}and my last name is ${$lname}`;
document.getElementById('demo_5').style.color = 'white'
document.getElementById('demo_5').style.fontSize = '2.3rem'
document.getElementById('demo_5').style.fontWeight = '900'
document.getElementById('demo_5').style.backgroundColor = 'magenta'
document.getElementById('body').style.backgroundColor = 'gray'
document.getElementById('body').style.color = 'blue'
console.log($ppp);

let demo_6 = 'This is my posts'
let Slug = demo_6.toUpperCase().split(" ");
let joinThis = Slug.join('_   ')
document.getElementById('demo_6').innerHTML = joinThis;
document.getElementById('demo_6').style.backgroundColor = 'black'
document.getElementById('demo_6').style.color = 'white'
document.getElementById('demo_6').style.fontSize = '2rem'

//#60-videosorting array
const Students = [3, 8, 1, 4]
// Students.reverse()--Reverse
Students.sort() //--Ascending order-Increament
// Students.sort((a, b) => { return b - a })--Descending orders--Decrement
console.log(Students);
//63-Filtering an Array
const Cart=[{id:1,items:'Android Mobiles',cost:15000},
            {id:2,items:'Iphone Mobiles',cost:85000},
            {id:3,items:'Windows Mobiles',cost:55000},
        ]
        let $Result=Cart.filter(function(value){
            return value.cost>50000
        });
        console.log("Affortable phones_filter",$Result);
        //64-Finding Js Array
const $Cart=[{id:1,items:'Android Mobiles',cost:15000},
            {id:2,items:'Iphone Mobiles',cost:85000},
            {id:3,items:'Windows Mobiles',cost:55000},
        ]
        let $Result_2=Cart.find(function(value){
            return value.cost>20000
        });
        console.log("Affortable_find phones",$Result_2);
  //-^65JS Mapping
  const Function=[1,2,3,4,5,6,7,8,9];
  //66-sort//a-b,b-a
  const Products=[
    {id:1,item:'Phones',cost:30000,},
    {id:2,item:'Playstation',cost:60000,},
    {id:3,item:'TV',cost:20000,},
    {id:4,item:'Laptop',cost:50000,},
]
let FINAL=Products.sort(function(a,b){
    return a.cost-b.cost 
}).sort(function(a,b){
    if(a.item<b.item)return -1;
    if(a.item>b.item)return 1;
    return 1;
}).filter(function(value){
    return value.cost<=30000;
}).map(function(val){
    return val.item+"$"+val.cost
})
console.log(FINAL);
//67reduce()method
let donation=[45,66,44,64,12,99,1000,500,200,100];
let TTD=donation.reduce(function(previousValue,currentValue){
// console.log('previousvalue',previousValue);
// console.log('currentvalue',currentValue);
return previousValue+currentValue
})
console.log(TTD);
//
let Shoppie=[
    {id:1,item:'Milk',cost:50},
    {id:2,item:'biscut',cost:10},
    {id:3,item:'Cigrate',cost:100},
    {id:4,item:'cake',cost:500},
]
let $Shop= Shoppie.reduce((Pre,Cre)=>{
    return Pre+Cre.cost
},0)
console.log("Your Total Cost is:",$Shop);
//68-video
const Fix=[33,11,4,34,52,10];
//sort
let Nir=Fix.sort()
console.log(Nir);
//find frist result
let fin=Fix.find((value)=>{
    return value>22;
});
console.log(fin);
//filter
let fill=Fix.filter((value)=>{
    return value>20;
});
console.log(fill);
//map
let map=Fix.map((value)=>{
    return '#'+value;
});
console.log(map);
//reduce
let red=Fix.reduce((value,b)=>{
    return value+b
});
console.log(red);
//#70--FUNCTIONS IN JS--
//Add numbers
let num1=77;
let num2=333;
//this is function declaration
function Myfunction(){ 
   //code
   let rst=num1+num2;
   console.log(rst);
}
 Myfunction()
 //function Expression
 const Myfun=function Myfunction(){ 
   //code
   let rst=num1*num2;
   console.log(rst);
};
 Myfun();
 //Anonymous function
 const Myf=()=>{ 
   //code
   let rst=num1===num2;
   console.log(rst);
}
  functiondeclaration();
 Myf();
//constuctor function
// let n=1
// let m=2
// const add=new Function(console.log(n+m));
// add();
//72-Javascript hoisting:
//func declaration
  functiondeclaration();
  function functiondeclaration(){
    console.log("Adding number of fun() declaration");
  }
//func Expression
   let Expression=function(){
    console.log("Adding number of fun() Expression");
};
Expression()
//#73-Js self invoking(IIFE)
//Impmediately invoked function Expression;
//IMMEDIATELY
//INVOKED
//FUNCTION
//EXPRESSION-(IIFE)
let no1=5000;//Global Variable
let no2=45000;
//Impmediately invoked function Expression;
//function
(function myApp(){
     let Result=no1+no2;
    console.log(Result);
})();
//using Arrow function
(()=>{
    let Result=no1+no2;
    console.log(Result);
})();
//onother method
(function myApp(num1,num2){
     let Result=num1*num2;
    console.log(Result);
})(no1,no2);
//onother method
(()=>{
    let no1=5000;//Local variable
    let no2=45000;
     let Result=no1+no2;
    (()=>{
    console.log("Result=",Result);
    })();
})();
//74-Js function Arguments
let Breakfast=50;
let Lunch=200;
let Dinner=300;
let Bar=2000;
function Sunday(){
 let weekEnd=Breakfast+Lunch+Dinner+Bar;
 console.log(`Your Total Expence in this Weekend is ${" $"+weekEnd}`);   
};
Sunday()
//function should be reusable
function Weekend(tiffen,lunch,dinner){
    console.log(tiffen,lunch,dinner);
    console.log(arguments);
    return tiffen+lunch+dinner;
};
let Final=Weekend(80,200,50,45,66,77,10);
 console.log(`Your Total Expence in food is ${" $"+Final}`);
console.log("BA"+NaN+"A");
//
function Apps(){
let total=0;
for(let value of arguments){
    total+=value;
}
    return total;

}
let Fnl=Apps(30,30,30,40,100,300)
console.log("Total is:",Fnl);
//#75 Javascript Rest Operator
function asap(...rest){
    console.log(rest);
    let ttl=0;
    for(let val of rest){
        ttl+=val
    }
    return ttl
}
  let Asap=asap(3000,500,22)
  console.log(Asap);
  //reduce method
  function sumExpence(...exp){
    return exp.reduce((a,b)=>a+b);
  }
  let random=sumExpence(330,44,55,21,100);
  console.log(`This is reduce method using rest operator =${random}`);
  //#76 Js Default Parameters
function Gst(cost,title,tax=20){
    // tax = tax || 80;//
    let taxAmnt= cost*(tax/100);
    console.log(`Total cost is:₹${cost} \n\nGST of tax(${tax}%)is:₹${taxAmnt}\n\n Total Amount is:₹${cost+taxAmnt}`);
 }
  let Bill= Gst(50,"Bar")
  //#77Getters&Setters;
  let Obj={
    firstname:"Saravanan",//Data properties
    lastname:"Madeshwaran",
    get fullname(){
      return  `${Obj.firstname} ${Obj.lastname}`
    },
    set fullname(value){
        let values=value.split(" ");
        console.log(values);
        this.firstname=values[0];
        this.lastname=values[1] ??"";

    }
  };
   Obj.fullname="Samantha"
  //getters-used to get data
  //setters-used to set data
//   console.log(Obj.fullname());
  console.log(Obj.fullname);
  //#78 ERROR HANDLING
  //#79 Scopes//--local-global
 {let bar="BEER"+" Wiskey";
console.log(bar);
}//This is local scope
 let bar="Brandy"+" Wine";//This is global scope
console.log(bar);
function greetUser(){
     let bar="Bacardi"+" KingFisher";
     console.log(bar);
}
greetUser()
//func
function green(){
    let msg="Hello World";
//    console.log(msg);
   for(i=1;i<=10;++i){ //automatically in var
       if(++i)
    console.log(msg+" "+i);
   }
   console.log(i);
}
green()//
//global  scope
let Name="Saravanan";
function greek(){
    let Name="Saro";//Overright-first priority
    let msg="Hello "+ Name;
    console.log(msg);
   }
greek()
//Local scope is best practice;
//#80-->Diffrence Between Var And Let Keywords:::
//Var-Function Scope,Redclared And ReAssigned Values
//Let-Block Scope,ReAssigned Values
//const-Block Scope
 function DisplayNum(){
    for(i=1;i<=10;i++){
        console.log("My Number is "+i);
    for(i=11;i<=20;i++)
    console.log(i);;
 }
}
 DisplayNum()
 //#81-->Js This.keyword
 const Games={
    Fav_game:'Fifa 23',
    topHits:'Last Of Us'+' Last of us-2',
    Play(){
        console.log(this.Fav_game);
    }
 }
 function Share(){
    console.log(this);
 }
  Games.Play()
  Share()
  console.log(10+6.99);
//#82-->

//#83-->