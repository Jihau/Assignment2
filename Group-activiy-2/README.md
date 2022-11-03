## Group Activity

## Activity 1: Import/Export

1. cd  to the `example` folder, and execute the following command inside the example folder:

```js
node ./index.mjs
```
-It prints 2 and 4

2. What is the difference between `export` and` export default`?

-export { variable as default }: exports the reference to the exported variable 
-export default value: the importing modules do not receive the reference to the exported variable. Export default is used when there is only one export to be made from a particular file. You can only have one default export per module.




3. Why do we need `mjs` extensions in the example folder?

-Because we are using the javascript on the operating system and not in the browser.
-mjs extension is a JavaScript source code file that is used as an ECMA Module (ECMAScript Module) in Node. js applications. Node. js's natvie module system is CommonJS that is used to split the code in different files to keep the JS code organized. MJS is the only way used by Node.

## Activity 2: Refactoring

1. Run the file `activity2.js`. You can execute the following command: 

```js
node ./activity2.mjs
```
2. Extract `checkAge()` to its module.  
3. Refactor `activity2.js`. Remember to use mjs extension
4. OPTIONAL: Rewrite `checkAge()` to use a **question mark operator** `?` 


## Link(s)
- [ES6 modules in node](https://appdividend.com/2019/03/13/es6-modules-in-node-tutorial-with-example/)
- []()

