//Array colletion of values stored in a single variable.
// It is a data structure that can hold multiple values of different types,
// such as numbers, strings, objects, and even other arrays. Arrays are ordered,
// meaning that the values are stored in a specific sequence and can be accessed
// using their index (position) in the array. In JavaScript, arrays are created
// using square brackets [] and can be manipulated using various built-in methods.

const arr = [1, 2, 3, 4, 5];
console.log(arr);

console.log(arr[0]); //accessing the first element of the array
console.log(arr[2]); //accessing the third element of the array

//Array Methods
//1. push() - adds an element to the end of the array
arr.push(6);
console.log(arr);

arr.pop(); //removes the last element of the array
console.log(arr);

//slice: copy no change in real
console.log(arr.slice(2, 4)); //3,4

//splice: modify the original
//            0  1  2  3  4
const arr1 = [1, 2, 3, 4, 5];
console.log(arr1.splice(2, 2)); //3,4

const arr2 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr2.splice(4, 4)); //5,6,7

//Map : It returns the new array by performing some actions on the existing array
let m = [1, 2, 3, 4];
const double = m.map((n) => {
  return n * 2;
});
console.log(double);

//Filter: It return the new array with elements that matches the condition
const even = m.filter((n) => {
  return n % 2 === 0;
});
console.log(even);

//reduce: reduces the array to single value

const sum = m.reduce((acc, curr) => {
  return acc + curr;
});
console.log(sum);

//Object: A collection of key-value pair
const obj = {
  name: "Huma",
  age: 24,
};
console.log(obj.age);

//Update
obj.age = 26;
console.log("Updated age:", obj.age);

//Add
obj.gender = "Female";
console.log("Added gender:", obj.gender);

//Delete
delete obj.name;
console.log("Deleted name:", obj);

//nested object
const obj1 = {
  name: "Alina",
  age: 24,
  address: {
    city: "New York",
    country: "USA",
  },
};
console.log(obj1.address.country);

//difference between map and forEach?
//map returns the new array with elements that matches the condition and forEach perform the task on the same array like it modify the array
//difference between filter and find? filter return the array that satisfy the condition and find return the very element that satisfy the condition
//how reduce work internally? it iterate over the array and perform the task on each element and return the result as a single value
// slice: donot change the original array. splice: modify the original array