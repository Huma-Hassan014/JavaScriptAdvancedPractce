//Functions: these are the reuseable blocks of code that perform a specific task.
//  They can take inputs, called parameters, and can return outputs. 
// Functions help to break down complex problems into smaller, manageable pieces, making code more organized and easier to read.
//functions runs when they are called or invoked.

//these functions are called function declaration they called and hoist before the definition of the function.
// function coding(){
//     console.log("I started learning basic coding of coding again to improve my coding skills");
// }
// coding(); // calling the function to execute it

// //Practice with parameters and arguments
// function name(name){
//     console.log("My name is " + name);
// }
// name("Huma");

// function multiply(num1, num2){
//     return num1 * num2;
// }
// console.log (multiply(5, 10));    

// //Task returning the square of num
// let val = 2;
// function square(s){
//  return s * s ;
// }
// console.log(square(val));
// console.log(square(7));

// console.log(e(9));
// function e(t){
//     if( t%2==0 )
//         return true
//     else
//         return false;
// }

// console.log(e(6));

// //function expression: not hoisted and called before the definition
// //hey();//not working
// const hey = function(){
//     console.log("Hey, I am a function expression");
// }
// hey(); //it works here

//Arrow Functions: show syntax for writing the function ES6
// const add = (a, b)=>{
//     return a+b
// }
// console.log(add(5, 10));

// const trying = (f) => f*f;
// console.log(trying(5));

//change the multiply function into arrow
const multiply = (x,y,z) => {
    return x*y*z
}
console.log(multiply(54, 63,78));

//✅importance of the return keyword: it sends the valuse back and stop the further execution.
function test() {
  return 10;
  console.log("Hello"); // never runs
}

console.log(test())

//what is hoisting? hoiting means moving the variable declaration and definition after the execution like invoke the function first and then define it works for declaration function not for expreassion function
//d/f b/w arrow and normal funct: arrow function doesn't have 'this' keyword and not use for constructor
//what if the fucntion doesn't have return?  In an interview, you can explain it like this:

//A function without a return performs an action—like printing text or saving data—but doesn't hand a value back to the code that called it. Consequently, if you try to assign its result to a variable, that variable will simply hold a placeholder for "nothing," such as `None` or `undefined`.