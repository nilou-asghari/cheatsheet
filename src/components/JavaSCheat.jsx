import React from "react";
import Prism from "prismjs";
import "../prism.css";
import Styles from "./JavaSCheat.module.css";
import { useEffect } from "react";

import "prismjs/plugins/toolbar/prism-toolbar.min.css";
import "prismjs/plugins/toolbar/prism-toolbar.min";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min";

export default function JavaSCheat() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className={Styles.container}>
      <h3>General</h3>

      <p>Comments</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-JavaScript">{`// this is a comment 
/* or this is a comment */`}</code>
        </pre>
      </div>
      <h3>Variables</h3>

      <p>Variable creation</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-JavaScript">{`let school = "WBS Coding School";
let projects = 4;
let awesome = true;`}</code>
        </pre>
      </div>
      <p>Variable operations</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-JavaScript">{`let x = 2;
let y = 3;
let z = x + y; // 5

let city = "Lisbon";
let country = "Portugal";
let place = city + " " + country; //Lisbon Portugal`}</code>
        </pre>
      </div>
      <p>Variable data Types</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-JavaScript">{`let age = 23; // Number
let name = "Julie"; // String
let canCode = true; // Boolean, could also be false`}</code>
        </pre>
      </div>
      <p>Structure structure types</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-JavaScript">{`let students = ["Kate", "Julie", "Mariana"]; // Array

let kate = {
  firstName: "Kate",
  lastName: "Johnson",
  age: 23,
  canCode: true,
}; // Object`}</code>
        </pre>
      </div>
      <h3>Alerts & Prompts</h3>

      <p>Alert</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-JavaScript">{`alert("Olá");

let name = "Angela";
alert(name);`}</code>
        </pre>
      </div>
      <p>Prompt</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-JavaScript">{`let firstName = prompt("What is your first name");
let lastName = prompt("What is your last name");
let fullName = firstName + " " + lastName;
alert(fullName);`}</code>
        </pre>
      </div>
      <h3>If else</h3>

      <p>if statement</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-JavaScript">{`let country = prompt("What country are you from?");

if (country === "Portugal") {
  alert("You are cool");
}

if (country !== "Portugal") {
  alert("Too bad for you");
}`}</code>
        </pre>
      </div>
      <p>if else statement</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-JavaScript">{`let age = prompt("How old are you?");

if (age < 18) {
  alert("You cannot apply");
} else {
  alert("You can apply");
}`}</code>
        </pre>
      </div>
      <p>Nested if else statements</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-JavaScript">{`if (age < 18) {
  alert("you can't apply");
} else {
  if (age > 120) {
    alert("you can't apply");
  } else {
    alert("you can apply");
  }
}`}</code>
        </pre>
      </div>
      <p>Logical Or</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-JavaScript">{`if (age < 18 || gender === "male") {
  alert("You can't join this club");
}`}</code>
        </pre>
      </div>
      <p>Logical And</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-JavaScript">{`if (continent === "Europe" && language === "Portuguese") {
  alert("You are from Portugal 🇵🇹");
} else {
  alert("You are not from Portugal");
}`}</code>
        </pre>
      </div>
      <p>Comparison and Logical Operators</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-JavaScript">{`2 > 3 // false 
2 < 3 // true 
2 <= 2 // true
3 >= 2 // true
2 === 5 // false 
2 !== 3 // true 
1 + 2 === 4 // false`}</code>
        </pre>
      </div>
      <h3>Functions</h3>

      <p>JS Functions</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-JavaScript">{`function sayFact() {
  let name = prompt("What's your name?");

  if (name === "Sofia") {
    alert("Your name comes from the Greek -> Sophia");
  }
}

sayFact();`}</code>
        </pre>
      </div>
      <p>JS Functions Parameters</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-JavaScript">{`function fullName(firstName, lastName) {
  alert(firstName + " " + lastName);
}

let firstName = prompt("What's your first name?");
let lastName = prompt("What's your last name?");
fullName(firstName, lastName);
fullName("Kate", "Robinson");`}</code>
        </pre>
      </div>
      <p>JS Functions Return</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-JavaScript">{`function add(x, y) {
  return x + y;
}

let result = add(3, 4);
let result2 = add(result, 0);


function getFullName(firstName, lastName) {
  let fullName = firstName + " " + lastName;
  return fullName;
}

let userFullName = getFullName("Kate", "Robinson");
alert(userFullName); // Kate Robinson
alert(getFullName("Julie", "Smith")); // Julie Smith`}</code>
        </pre>
      </div>
      <p>Closures</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-JavaScript">{`function hello() {
  function go(name) {
    alert(name);
  }

  let name = "SheCodes";
  go(name);
}

hello();`}</code>
        </pre>
      </div>
      <h3>Arrays</h3>

      <p>Array declaration </p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-JavaScript">{`let myList = [];
let fruits = ["apples", "oranges", "bananas"];
myList = ['banana', 3, go, ['John', 'Doe'], {'firstName': 'John', 'lastName': 'Smith'}]`}</code>
        </pre>
      </div>
      <p>Access an Array </p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-JavaScript">{`fruits
fruits[0]
fruits[1]
fruits[2]
fruits[3]`}</code>
        </pre>
      </div>
      <p>Update an Array item </p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-JavaScript">{`fruits[1] = "Mango";
fruits[1] = 3;`}</code>
        </pre>
      </div>
      <p>while loop </p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-JavaScript">{`let times = 0;
while (times < 10) {
  console.log(times);
  times = times + 1;
}`}</code>
        </pre>
      </div>
      <p>forEach loop</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-JavaScript">{`let fruits = ['apples', 'oranges', 'bananas'];
fruits.forEach(function(fruit) {
  alert("I have " + fruit + " in my shopping bag");
});`}</code>
        </pre>
      </div>
      <p>do while loop</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-JavaScript">{`let times = 0;
do {
  console.log(times);
  times = times + 1;
} while(times < 10)`}</code>
        </pre>
      </div>
      <p>for loop</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-JavaScript">{`for (let i = 0; i < 10; i++) {
  console.log("i is " + i);
}

for (let i = 0; i < myList.length; i++) {
  alert("I have " + myList[i] + " in my shopping bag");
}`}</code>
        </pre>
      </div>
      <h3>Events</h3>

      <p>Creating an event listener </p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-JavaScript">{`function sayHi() {
  alert("hi");
}

let element = document.querySelector("#city");
element.addEventListener("click", sayHi);`}</code>
        </pre>
      </div>
      <p>setTimeout </p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-JavaScript">{`function sayHello() {
  alert('Hello')
}
setTimeout(sayHello, 3000);`}</code>
        </pre>
      </div>
      <p>setInterval </p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-JavaScript">{`function sayHello() {
  alert('Hello')
}
setInterval(sayHello, 3000);`}</code>
        </pre>
      </div>
      <h3>Selectors</h3>

      <p>QuerySelector</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-JavaScript">{`let li = document.querySelector("li");
let day = document.querySelector(".day");
let paragraph = document.querySelector("ul#list p");`}</code>
        </pre>
      </div>
      <p>QuerySelectorAll</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-JavaScript">{`let lis = document.querySelectorAll("li");
let paragraphs = document.querySelectorAll("li#special p");`}</code>
        </pre>
      </div>
    </div>
  );
}
