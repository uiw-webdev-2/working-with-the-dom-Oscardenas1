/**
 * Traverse the DOM tree using querySelector() and querySelectorAll()
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
 */

import Student from "./Student.js";

const newStudent = new Student(
  //firstName, lastName, age, gpa, idNum, image
  "Oscar",
  "Cardenas",
  23,
  3.42,
  1093846,
  "student.jpg"
);

//Template literals
const content = `
     <figure class="backpack__image">
       <img src=${newStudent.image} alt="" />
     </figure>
     <h1 class="Student__name">${newStudent.firstName}</h1>
     <ul class="Student__features">
     <li>First Name: ${newStudent.lastName}</li>
     <li>Last Name: ${newStudent.age}</li>
     <li>GPA: ${newStudent.gpa}</li>
     <li>id Number: ${newStudent.idNum}</li>
     </ul>
   </article>
 `;

const main = document.querySelector(".maincontent");


const newArticle = document.createElement('article');
newArticle.classList.add('backpack');
newArticle.setAttribute('id','everyday');
newArticle.innerHTML = content;

main.append(newArticle);

//main.innerHTML = content;



// const listItem = document.querySelector("ul li:first-child");

// listItem.classList.toggle("webdev");

// const backpackTitle = document.querySelector('h1').className;
// document.querySelector('img').setAttribute('alt', backpackTitle);
