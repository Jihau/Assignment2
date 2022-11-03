# BONUS / Extra

> These exercises are NOT mandatory. They are optional and you can get extra points.

1.  Fix the attempts to access values in the `person` object:

```js
let key = "name";
let person = {
        name: "Alyssa P. Hacker",
        age: 26,
        hometown: "somewhere"
};
person[age]; // => 26
person.key; // => "Alyssa P. Hacker"


<!-- Answer -->
person.age;
console.log(person.age);  // => 26
person.name
console.log(person.name);

```

2. Write a function `fullName` that takes a person object as an argument, and
   returns that person's full name as a string. By **person object**, we mean an object that has the structure of the object you created to  represent yourself above, for example:

 ```js
   let alyssa = {
     name: {
       first: "Alyssa",
       middle: "P.",
       last: "Hacker"
     },
     age: 26
};

function fullName(person) {
    return console.log(person.name.first + " " + person.name.middle + " " + person.name.last)
}

fullName(alyssa); // => "Alyssa P. Hacker"
   ```

3. What happens if you pass a person object to `fullName` that doesn't have a
   middle name?


```js
fullName({name: {first: "John", last: "Doe"}}); // => "John Doe"
```

Your `fullName` function should work correctly regardless of whether or not
the person has a middle name -- if it doesn't produce the output shown above
when given the object `{name: {first: "John", last: "Doe"}}`, fix it so that it does.

```js
   function fullName(person) {
     if (person.name.middle) {
       return person.name.first + " " + person.name.middle + " " + person.name.last;
     }
     return person.name.first + " " + person.name.last;
   }
   ```

4. We often deal with **arrays of objects**; below is an example of an array of objects, where each object represents a **person**:

```js
let  people = [
     {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
     {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
     {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
     {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
     {name: {first: "Louis", last: "Reasoner"}, age: 21}
   ];
```

- Add the object representing yourself to this array of people (if your `name` key does not have the same "shape" as the ones above, make sure you  change it to look like these).

```js
   let  people = [
   {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
   {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
   {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
   {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
   {name: {first: "Louis", last: "Reasoner"}, age: 21},
   {name: {first: "Hasan", last: "Safdari"}, age: 26}
];
```
- Write a function that finds the average age of the `people` array.
```js
   function averageOfAge (p) {
  let total = 0;
  for(i = 0; i < p.length; i += 1) {
    total = total + p[i].age;
  }
  return total / p.length;
}
```

## Reference
- [Hack Reactor](https://github.com/hackreactor/javascript_301/tree/master/4-objects)