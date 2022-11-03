## Group Activity

## Creating Objects

1. Create an object that represents **you**. It should contain your first name, last name, age and hometown.
```js
let you = {
firstName: "Johanna",
lastName: "Toivanen",
age: "30",
hometown: "Espoo"
} 

```
2.  Add three more key/value pairs to your object that represent other attributes of yourself. Ideas include (but are not limited to):
- Favorite TV Shows/Movies/Sports/Activities etc.
- Occupation
- Date of Birth
- Pets (number of pets, names of pets, etc.)

```js
let you = {
firstName: "Johanna",
lastName: "Toivanen",
age: "30",
hometown: "Espoo",
Favorites: {
  shows: "",
  movies: "",
  activities: ""
},
occupation: "Student and hard worker",
dateOfBirth: "26.11.1991",
Pets :{
  numberOfPets: 0.5
}
} 
```

**HINT:** You can just modify the object that you created before.

3.  The values in an object can be objects themselves, and in fact, this is a very common pattern. For example, consider the following object that represents a computer:

 ```js
let computer = {
      brand: "Apple",
      year: 2014,
      model: "MacBook Pro",
      size: "15-inch",
      specs: {
        processor: "2.3GHz Intel Core i7",
        memory: "16 GB 1600 MHz DDR3",
        graphics: "Intel Iris Pro 1536 MB"
      }
}
 ```

You should notice that the `specs` key in the `computer` object is an object itself! We could access information about the processor using dot-notation like so:

```js
computer.specs.processor; // => "2.3GHz Intel Core i7"
```

Change your object to have a `name` key, the value of which is an **object** ; this object should have `first`, `last` and `middle` keys containing your first, last, and middle names respectively (make sure to remove the `firstName` and `lastName` keys that you added before). You should be able to access your **last name** afterwards like so (assuming your object is called `you`):

```js
let you = {
name: {
firstName: "Johanna",
lastName: "Toivanen"
},
age: "30",
hometown: "Espoo",
Favorites: {
  shows: "Star Trek",
  movies: "Interstellar",
  activities: "Existing"
},
occupation: "Student and hard worker",
dateOfBirth: "26.11.1991",
Pets :{
  numberOfPets: 0.5
}
} 
```

I have no middle name :(

```js
you.name.last; // => YOUR LAST NAME
```

4.  Look up your favorite movie on IMDB, and make an object that represents some aspects of that movie, *e.g.*:
- Title
- Director
- Year released
- Rating
- Actors

```js
let you = {
name: {
firstName: "Johanna",
lastName: "Toivanen"
},
age: "30",
hometown: "Espoo",
Favorites: {
  shows: {
  title: "Star Trek",
  director: "Gene Roddenbery",
  yearReleased: "1966",
  rating: "7.9",
  Actors: {
    actor1: "William Shatner",
    actor2: "Leonard Nimoy"
  }
  },
  movies: "Interstellar",
  activities: "Existing"
},
occupation: "Student and hard worker",
dateOfBirth: "26.11.1991",
Pets :{
  numberOfPets: 0.5
}
} 
```

**HINT:** Most movies have multiple actors. What data-structure do we use to represent a collection of similar things?

## Creating New Key/Value Pairs

1. Create a new empty object in your console called `obj` like this:

```js
let  obj = {};
```
answer:

```js
let you = {};
```

2. Add a new key/value pair to the object `obj` by *assigning* a new value to a new key like so:

```js
obj.hello = "world";
obj["number"] = 25;
```
answer: 

```js
you.name = "Johanna Toivanen";
you["age"] = 30;
```
3. Now, check the value of `obj` in the console and ensure that it has the two key/value pairs added above. This is how we create new key/value pairs in existing objects.

```js
console.log(obj);

<!--output:-->
/*
   {hello: "world", number: 25} 
   or
   hello : "world"
   number : 25
   */
```
4. In the console, add a `favoriteColor`key/value pair to the object that represents you.

answer:
```js
console.log(you.favoriteColor = 'Violet')
<!--output:-->
/*Violet*/
```
## Reference
- [Hack Reactor](https://github.com/hackreactor/javascript_301/tree/master/4-objects)