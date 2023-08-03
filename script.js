//1 Ways to print in JS
console.log("Hello Jok");
//alert("me");

// 2. Javascript console API
//console.log("Hello world",4+6);
console.error("helllll");
//console.warn("no bro");

// 3. Variables

/* 
Automatically
Using var
Using let
Using const
*/

//container to store daata

//4 . DATATYPES 
/*
1.primitive Datatype : undefined , null , number , string , boolean , symbol;
2.Reference Data type: arrays , objects
*/

// numbers datatype
var A;
var num=A;
var num2=4.5;
console.log(num);

//string datatype
var str1 ="hello";
//console.log(str1);

//object datatype
var marks={
    ravi: 30,
    meera :89
}
//console.log(marks);

//boolean
var a= true;
//console.log(a)

//(if just declared it is undefined)
var und;
//console.log(und);

//null
var n=null;
//console.log(n);

//arrays
//console.log(arr[2])

//--------------------------------------------------------------------------------
// OPERATORS
var a1=8;
var b1=9;

console.log(a1);
console.log(a1++);
console.log(++a1);


//arithmetic


console.log("value", a1+b1);
console.log("value", a1-b1);
console.log("value", a1*b1);
console.log("value", a1/b1);

//assignment

var  c = b1;
c+=2;
console.log(c)

//comparison

console.log("value", a1>b1);
console.log("value", a1<b1);
console.log("value", a1==b1);
console.log("value", a1>=b1);
console.log("value", a1<=b1);

//Logical 
console.log(!false)
console.log(!true)

//----------------------------------------------------------------------------------------
//FUNCTIONS in javascript (do not repeat urself)

function avg(a,b){
    return (a+b)/2;
}
console.log(avg(1,2))

summ = (a,b)=>{
    return  a+b;
}
console.log(summ(8,9));
//conditionals

var age=4;
if(age>8){
    console.log('adult')
}
else{
    console.log('kid')
}

// else if  , switch
var arr=[1,2.6,"hello ",4,5];

//loops
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}

for (i in arr){
    console.log(arr[i]);
}
for (i of  arr){
    console.log(i);
}

//let has scope for specific function block
//let can not be redeclared
/* 
function exampleFunction() {
  if (true) {
    var x = 10; // Function-scoped variable
    let y = 20; // Block-scoped variable
    console.log(x); // Output: 10
    console.log(y); // Output: 20
  }
  console.log(x); // Output: 10 (var is accessible outside the block)
  console.log(y); // Error: y is not defined (let is not accessible outside the block)
}

exampleFunction();

*/
/* //
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error
------------------------------------------------------------------------------------

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

-----------------------------------------------------------------------------
// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";
*/
/*
let j=0;
const ac=0;
//const cant be changed
while(j<arr.length){
    console.log(arr[j]);
    j++;
}
//do while


//------------------------------------------------------------------------

//String methods
let st="hello shrutika how u feeling";  
console.log('length',st.length)
console.log(st.indexOf('shrutika'))
console.log(st.lastIndexOf('how'))

//------------------------------------------------------------------------
//Dates


//--------------------------------------------------------------------------
//TYPE document in console
//we can use document to access html page contents
// DOM document object Modelsling MANIPULATION





//child parent

ce=document.createElement('p')
ce.innerText="hello ";
ele[0].appendChild(ce)

//------------------------------------------------------------------------------------
//Query Selection in JS

se=document.querySelector('#link')
console.log(se)

//--------------------------------------------------------------------------------------
//events in JS (listening events)

window.onload=function(){
    console.log("loadded")
    
}



button.addEventListener('click',function(){
console.log('clickedd bro')
})
button.addEventListener('mouseover',function(){
    console.log('clickedd yrr')
})
button.addEventListener('mouseout',function(){
    console.log('thike re')
})
button.addEventListener('mouseup',function(){
    console.log('UP')
})
button.addEventListener('mousedown',function(){
    console.log('DOWN')
})

button.addEventListener('click',function(){
    console.log('clickedd bro')
    })

//---------------------------------------------------------------------------------------
//Set Timeout and Set Interval

summ = (a,b)=>{
    return  a+b;
}
//scedule 2000ms later
logKaro = ()=>
{
    console.log("i am log")
}
setTimeout(logKaro,2000);
//clr= setInterval(logKaro,2000);
//to stop clearInterval(clr)

//-------------------------------------------------------------------------------------------------
//Javascript local storage
//localStorage.setItem('name','shru')
//locakStorage
//locakStorage.getItem('name')

//Json (double qotes) string   DATATRANSPORT
obj = {name: "shrutika",length:1}
jso=JSON.stringify(obj);   //string

parsed = JSON.parse('{"name":"shrutika","length":1}') //obbject
*/
// You can create a constant array:
var cars = ["Saab", "Volvo", "BMW",];

// You can change an element:
cars[0] = "Toyota";
console.log(cars)
// You can add an element:
cars.pop(cars[0]);
console.log(cars)

const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";
console.log()

//String methods
let st="abcdefafga";  
console.log('length',st.length)
// console.log(st.indexOf('shrutika'))
console.log(st.lastIndexOf('a'))

mydate = new Date();
console.log(mydate)
console.log(mydate.getTime());
console.log(mydate.getDay());
console.log(mydate.getMinutes());
console.log(mydate.getHours());
console.log(mydate.getFullYear());

//methods in DOM
let element = document.getElementById('button')
console.log(element);

let elementsWithClassName = document.getElementsByClassName('heelo');
console.log(elementsWithClassName);

let element2 = document.getElementById('link')
console.log(element2);

let ele=document.getElementsByTagName('h1')
console.log(ele)

//attributes
// element.style.background="pink";
// element2.href ="hii.c";

// function clicked(){
//     element.innerHTML = "shrutika";

// }

se=document.querySelector('#link')
console.log(se)
 ;navigator