 //Level 1
const prompt = require("prompt-sync")();
 //Task 1
const sumofn = (n) => {
    for (let i = 0; i <= n; i++){
        sum = sum + i
    }
    return sum
}
let sum = 0;
let num = prompt("Enter number: ");
num = Number(num)
console.log(sumofn(num))

//Task 2
const evenNum = (n)=>{
    for (let i = 0; i <= n; i++){
        if(i % 2 == 0){
            console.log("Even: " + i)
        }
    }
}
let e = prompt("Enter the Number to find even in range: ")
e = Number(e)
console.log (evenNum(e))

//Task 3
const factorial = (n) => {
    let mul = 1
    for (let i = 1; i <= n; i++){
        mul = mul * i
    }
    return mul
}
let f = prompt("Enter the Number to find factorial: ")
f = Number(f)
console.log(factorial(f))

