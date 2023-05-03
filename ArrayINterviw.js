//1-Create an Array object - (Atleast 3 methods);
//method-1
console.log("1-Create an Array object - (Atleast 3 methods)");
let Array1=["Banana","Apple","Papaya","Orange"];
console.log(Array1);
//method-2
let Array2=[];
Array2[0]='Saravanan Madeshwaran';
Array2[1]='My Age is:'+28;
Array2[2]="I'm from Chennai" ;
console.log(Array2);
//method-3
let Array3=new Array ("New Array")
console.log(Array3);
//method-4
let Array4=Array.of("id:1,item:'Phones',Price:25000")
console.log(Array4);
//
// let Array1=[10,20,30]
// console.log(Array1);
// let Array2=[]
// Array2[0]='Saravanan';
// Array2[1]=true
// Array2[2]=false
// console.log(Array2);
// let Array3=new Array('Pondati',22)
// console.log(Array3);
// let Array4=Array.of("Madhan",'Kumar')
// let Sort=Array4.join(' ')
// console.log("Name:",Sort);
// console.log(Array4);
//2-Take the below array and copy it using the slice method and the for loop method.
console.log("2-Take the below array and copy it using the slice method and the for loop method.");
var array = [1, 9, 3, 4, 5];
let ArrayEmpty=[]
//slice
let Result= array.slice(2,4)
console.log(Result);
//for loop
for(let i=0;i<array.length; ++i){
    ArrayEmpty[i]=array[i]
}
    console.log(ArrayEmpty);
    //
console.log("3-Empty this Arrays");
let Array_Emp=[1,2,3,4,5];
Array_Emp=[];//method-1
console.log(Array_Emp);
//method-2
Array_Emp.length=0
console.log(Array_Emp);
//method-3
while(Array_Emp.length){
    Array_Emp.pop();
}
console.log(Array_Emp);
//method-4
Array_Emp.splice(0,Array_Emp.length)
console.log(Array_Emp);
console.log("4-");
console.log(typeof Array_Emp);
console.log("5th question");
let arry=[1,2,3,4,5]
let obj={id:1}
let other=undefined;
let string="Sarwan"
let $Result=Array.isArray(arry)
let $Result2=Array.isArray(obj)
let $Result3=Array.isArray(other)
let $Result4=Array.isArray(string)
console.log($Result);
console.log($Result2);
console.log($Result3);
console.log($Result4);