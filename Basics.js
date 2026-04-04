//variable: these are used to store data values. In JavaScript, you can declare a variable using var, let, or const.
//var: This is the old way to declare a variable. It has function scope and can be re-declared and updated.
//let: It is new way of decalring the variable. and it is helpful for changing the values
//const: used for fixed values
//Example:

let practice = "JavaScript";
var time = 12;
const intensity = "Continuosly"; 

//lets update the values
practice = "JS";
time = 20;
//intensity = "irregular"; --by using this it shows error

//console.log(practice, time, intensity)

//1 ✅. what is  hoising? Hoising mean moving declaration of the variable before any execuation like
var a ; //for let and const show reference error
//console.log(a) //undefined.
a = 12;
 //(TDZ) The Temporal Dead Zone is the time between: Variable hoisted and variable initialized. During time  You cannot access the variable at all

//2 ✅. Difference between var and let?
//var is a function scoped, let is block-scoped 
//Example
if(true){
    var a = 10;
    let b = 20;
}
//console.log(a) //10
//console.log(b) //error

//DATA TYPES:-> IT SHOWS WHAT KIND OF VALUE A VARIABLE HOLD 
//Primitive datatypes
let a1= "Huma";
let b1 = 23;
let student = true;
let c1 = null;
let d1; //undefined

//non-primitive object, array, function these are the reference types
let identity = {
    student: "Samaira",
    age: 24,
    pass: true,
    mole: null
}

//important primitive = copy vs reference (object = reference (same memory))
let val1 = 9;
let val2 = val1;
val2 = 2;
//console.log(val1) //9
//console.log(val2) //the value of val1 is not affected even change the value of val2 that uses the reference of val1

let obj1 = {name: "huma"};
let obj2 = obj1;

obj2.name =  "Aman" //by changing the value of the obj2 the value of obj1 is also change beacuse they use the same memory

//console.log(obj1);
//console.log(obj2);

//TYPE CORECION
//automatic conversion of dataType
//console.log(1 + "1"); //11
//console.log(1 + 1); //2
//console.log(1 + "1" + 1); //111
//== vs ===
//console.log(5=="5") //true
//console.log(5==="5") //false check both datatype and value

//lets do some practice 
//TASK 1 swap the values without using the third variable
let a2 = 200;
let b2 = 10;

//1st try conclusion: a2 = b2 this cause overwrite
//a2 = b2;  //30
//b2 = a2 + b2 //30 + 30 = 60
//b2 = b2 - a2 //60 - 30 = 30

//2nd try
//a2 = b2;  //30
//b2 = b2 + a2 //30 + 30 = 60
//b2 = a2 - b2 //30 - 60

//work finally
a2 = a2 + b2; //20 + 10 = 30
b2 = a2 - b2 //30 - 10 = 20
a2 = a2 - b2 // 30 - 20 = 10

//console.log("a2 = " , a2 , "b2 = " , b2)   

//TASK 2 lets predict the output 
 let x = "10";
 let y = 5;

//console.log(x + y); //105
//console.log(x - y); //5

//TASK 3 primitive v reference
let arr1 = [1, 2];
let arr2 = arr1;

console.log(arr1); 
console.log(arr2); 
//they both show same output then i add 3 in arr2 but the arr1 is also affected and also it show 3 in array beacuse they both hold same memory

arr2.push(3);
console.log(arr1); 
console.log(arr2); 
