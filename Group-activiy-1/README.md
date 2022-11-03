## Group Activity

## Activity 1: first-Class Citizens

- Why functions are considered first-Class Citizens in Javascript?

Because the functions in Javascript has the same functionality as the objects so for that:
1. Function can be stored as a value in a variable.
2. Ability to be passed as arguments to another function.
3. Ability to return a function from another function.

- What is the difference between arguments and parameters?

When you create a function we have parameters and when we call the function so it is an argument:
 function (a, b) {
  return a+b;
} 
so now they are parameters, but when we call the function, they will have values which will make them arguments

## Activity 2: Arrow function

convert the following functions to Arrow function:

```js
function add(a,b) {
  return a+b
}
console.log(add(2,3))
```

```js
function square(n) {
  return n * n
}
console.log(square(3)) 
```

```js
function myFunc(a, b){
  let chuck = 42;
  return a + b + chuck;
}
console.log(myFunc(2,3))
```


```js
function sayHello() {
     return "Hello there";
}
console.log(sayHello());		
```

```js
function myObj() {
    return { cost: 500};
}
console.log(myObj());		
```

## Activity 3: Function Expressions &  Arrow functions

Replace function expressions with arrow functions in the code below:

```js
const ask = (question, yes, no) => (confirm(question) ? yes() : no());

ask(
        "Do you agree?",
        () => alert("You agreed"),
        () => alert("You canceled the execution.")
)
```

## Link(s)

- [First-Class Citizens in Javascript](https://codezup.com/why-functions-are-first-class-citizens-in-javascript/)