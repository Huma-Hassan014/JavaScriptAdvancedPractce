//start with a simple control flow statement
//if else

let age = 24;

// if(age < 9 || age > 25){
//     console.log("you are a child or an adult");
// }
// else{
//     console.log("you are a teenager");
// }

//practice task 1
let num = 2;

// if(num > 0){
//     console.log("the number is positive");
// }
// else if(num < 0){
//     console.log("the number is negative");
// }
// else{
//     console.log("the number is zero");
// }

let mark = 99;

// if (mark > 90){
//     console.log("Grade: A")
// }
// else if(mark > 75 && mark < 89){
//     console.log("Grade: B")
// }
// else if(mark > 50 && mark < 74){
//     console.log("Grade: C")
// }
// else {
//     console.log("Grade: D")
// }

//✅ what is truthy and falsy? Its about the condition like true or false.
//✅ what if the condition is not the boolean? JavaScript automatically convert the condition into boolean if (age > 20) treated as true/false

//switch statement: work same as a if else but have a cleaner then if else

// let day = 3;

// switch(day){
//     case 1:
//          console.log("Monday");
//          break;
//     case 2:
//          console.log("Tuesday");
//          break;
//     case 3:
//          console.log("Wednesday");
//          break;
//     case 4:
//          console.log("Thursday");
//          break;
//     case 5:
//          console.log("Friday");
//          break;
//     case 6:
//          console.log("Saturday");
//          break;
//     case 7:
//          console.log("Sunday");
//          break;
//     default:
//          console.log("Invalid day");
//          }

// //practice task

// let fruits = "PineApple";
// switch(fruits){
//     case 'apple':
//         console.log("Red")
//         break;
//     case 'PineApple':
//         console.log("Green")
//         break;
//     case 'Mango':
//         console.log("Orange")
//         break;
//     case 'banana':  
//         console.log("Yellow")
//         break;
//     default:
//         console.log("Invalid")
    
// }

// //task 
// let marks = 88;
// switch(true){
//     case (marks > 90):
//         console.log("A")
//         break;
//     case (marks >= 75 && marks <= 89):
//         console.log("B")
//         break;
//     case (marks >= 50 && marks <= 74):
//         console.log("C")
//         break;
//     case (marks < 50):
//         console.log("D")
//         break;
//     default:
//         console.log("Invalid")
    
// }

//✅why break is important and what happen if it missing?
//if break is missing the switch statement will continue to execute the next case. 
//✅when prefer switch over if else?
//switch prefer when the comparing a single value against the multiple fixed values for better readability. if else use when dealing with complex conditions and espaecially with ranges or check conditions for 2 or more values at a time like (salary and time)

//Loops
//for loop used when the iterations is known

// for (let i  = 0; i < 5; i++){
//     console.log(i)
// }

//task 1
// for (let i  = 1; i <= 10; i++){
//     console.log(i)
// }

// for (let i  = 0; i <= 20; i++){
//     if ( i % 2 == 0 )
//     console.log(i + " is even number")
// }
//when does the loop become infinit? when the condition never been false

//while loop
// let wi = 0;

// while(wi < 30){
//     if( wi % 5 == 0)
//     console.log(wi)
//       wi++
// }

// let dw = 0;
// do{
//     console.log(dw)
//     dw++
// } while(dw < 30)

//difference between for and while and when to use them in which cases?
//If the no. itertions are known then use the for otherwise while

//for...of: used iterating objects, array, string.

// let word = "Hello";
// for (let w of word){
//     console.log(w)
// }

// let arr = [90, 80, 70, 60];
// for (let a of arr){
//     console.log(a)
// }

//for...in: Used to iterate over keys (properties) of an object
let data = {
    name: "Huma",
    age: 24,
    studyComplete: true
}
for (let o in data){
    console.log(o, " = ", data[o])
}

//Task 
let student = {
  name: "Abiii",
  marks: 90
};
for (let s in student){
    console.log(s, " = ", student[s])
}

//✅Key difference in for...in or for...of
//for...in is used to iterate over keys (properties) of an object not used for array because it return the index as a string like "0", "1" also it doesn't gurantee numeric order
//for..of is used to iterate over values of an object 

