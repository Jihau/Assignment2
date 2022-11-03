//convert functions to Arrow function:

//1
const add = (a, b) => a + b;
console.log(add(2,3))

//2
const square = (n) => n*n;
console.log(square(3))

//3
let chuck = 42;
const myFunc = (a, b) => a + b + chuck;
console.log(myFunc(2,3))

//4
const sayHello = () => "Hello there";
console.log(sayHello());	

//5
const myObj = () => ({cost : 500})
console.log(myObj());