'use strict'

/* Exercise 1 */
/* step 1 select the element as a JavaScript object */
const output = document.getElementsByClassName("output");

/* step 2 update the textContent property of the selected element => output:  "Hasan Safdari" */
const newContentText = document.createElement("p");
newContentText.innerText = "Hasan Safdari";
output[0].appendChild(newContentText);

/* step3 Using classList.add, add a class of red to element */
const classes = output[0].classList;
classes.add("red");

/* step4 update the id of the element to tester */
output[0].setAttribute('id', 'tester');

/* step5 add red color to page element */
const testerID = document.getElementById('tester');
testerID.style.backgroundColor = "red";

/* step6 and step7 GET the document URL */
output[0].textContent = document.URL;

/* step 8: */
// Console Output: http://localhost:63342/Assignment02/Bonus/Bonus/part1.html?_ijt=shgbu63rl6ebasmgliqe9v3j2g&amp;_ij_reload=RELOAD_ON_SAVE

/* Exercise 2 Using querySelectorAll() method to select all matching elements */
let select = document.querySelectorAll(".myEle"), i;
console.log(Array.from(select));

for(i = 0; i < select.length; ++i) {
  console.log((select[i]));
}