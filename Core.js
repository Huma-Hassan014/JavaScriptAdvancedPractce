//What id Execution Context?
//It provide the environmnt where the code it run. It create a somthing like a box where code execute. It contain functions, Variables etc.
//types: 
//Global execution context: created once and run entire program
//function execution: created everytime the program function is called.

//What is call stack?
//stack that manages execution of the functions. it use the LIFO.
//example
function one() {
    two()
    console.log("One")
}

function two() {
    three()
    console.log("Two")
}

function three() {
    console.log("Three")
}

//one()

//important questions
// why JS is single threaded: beacause it has one call stack. 
// what  happen when the function is aclled: it create the new execution context and pushed into the call stack.
// what is stack overflow: what too many functions call the stack exceeds limit.

//undefined 
// console.log(x)
// var x = 5

// function test() {
//     console.log(y)
//     var y = 10
// }
// test() //undefined undefined

// function a() {
//     console.log("A")
// }

// function b() {
//     a()
//     console.log("B")
// }

// b()

//Hoisting means: Hoisting means JS moves declarations to the top BEFORE execution (in memory phase), not after.
//Scope
//Global: the value of global variable and function call anywhere in the program like var
//function: the value of function calls only within the function  
//block: value accessible only in block level like let. Accessible inside { } → applies to let and const


//Closure: the functions can be inside the other function. The inner function has the access to the outer function variables.
//Then the closure is formed when function is "saved" to be used later.
//The Closure Exception: If an inner function still needs those outer function variables, JavaScript keeps them alive in a "closure" so the inner function can use them later.
//lexical scope: means the scope decided by where the code is written like inner function not where the it is called.
//Example
// function outer() {
//     let a = 10
//     function inner() {
//         console.log(a)
//     }
//     return inner
// }
// //call the inner function
// var inner = outer()
// inner() //10    


function outer() {
    let x = 10

    return function() {
        console.log(x)
        x++
    }
}

const fn = outer()
//fn()//10
//fn()//11 The inner function remembers and updates the same variable x using closure *beacause the inner func send the value back to outer*  


function counter() {
    let count = 0

    return function() {
        return ++count
    }
}

const c1 = counter()
const c2 = counter()

console.log(c1()) //1
console.log(c1()) //2
//console.log(c2()) //1
//Each function call creates its own closure with its own separate memory space.
