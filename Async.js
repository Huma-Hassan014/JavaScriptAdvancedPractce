//Async JavaScript: it is single threaded and synchronous by default.
//threaded: means the code is executed one after the other.
//synchronous: means the code is executed in order.

// function longtask(){
//     for(let i = 0; i < 1e9; i++){
//         console.log("Done")
//     }
// }
// console.log("Start")
// //longtask()
// console.log("End")

//async works with:
// 1. Call Stack
// 2. Web APIs (browser)
// 3. Callback Queue
// 4. Event Loop (MOST IMPORTANT)
// Flow:
// Code goes to Call Stack
// Async task goes to Web API
// After completion → goes to Queue
// Event Loop pushes it back to stack

//CallBack
// console.log("start")
// setTimeout(() => {
//     console.log("Async task")
// }, 9000)

// console.log("End")
//the problem is that the async task is not executed in order which is not appropriat in case of real application

//when se have multiple funcion nested it cause the callback hell and complex
//example
// setTimeout(()=>{
//     console.log("1")
//     setTimeout(()=>{
//         console.log("2")
//         setTimeout(()=>{
//             console.log("3")
//         }, 1000)
//     },1000)
// }, 1000)

//The callback hell solved by promis 
//Promise: Give the future result reject/resolve

const p = new Promise((resolve, reject)=>{
    let success = true
    if (success){
        resolve("Success")
    }
    else {
        reject ("Error")
    }
})

// p.then(result => console.log(result))
// p.catch(error => console.log(error))
//then: it is used to handle the success case.
//catch: it is used to handle the error case.

//in form api calling
// function fetchData(){
//     return new Promise((resolve, reject)=>{
//         fetch("https://jsonplaceholder.typicode.com/todos/1")
//         .then(res => res.json())
//         .then(json => resolve(json))
//         .catch(err => reject(err))
//     })
// }
// fetchData().then(data => console.log(data))
// fetchData().catch(error => console.log(error))

function practice(){
    return Promise((resolve, reject)=>{
        fetch()
    })
}

