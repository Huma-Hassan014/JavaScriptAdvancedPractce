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

//Level 2
//Task 4
const reverse = (num) => {
    let rev = 0;

    while( num > 0){
        let digit = num % 10; //extract the last value
        rev  = rev * 10 + digit;
         num = Math.floor( num / 10) //remove the last digit
    }
     return rev
}
console.log(reverse(1234))

//Task 5
const counting = (m) => {
  let count = 0;
  while (m > 0) {
    m = Math.floor(m / 10);
    count++;
  }
  return count;
};
console.log(counting(1234));

//Task 6

const Palindrom = (num) => {
    let rev = 0;
    let orig = num
    while( num > 0){
        let digit = num % 10; 
        rev  = rev * 10 + digit;
         num = Math.floor( num / 10) 
    }
     return orig === rev
}
let h = prompt("Enter the Number to find the Palindron: ")
h = Number(h)
console.log(Palindrom(h))

