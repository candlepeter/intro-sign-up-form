const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.querySelector(".btn");
const errorMessage = document.querySelectorAll(".error-message");
const inputData = document.querySelectorAll(".input-data");

function displayError() {
  let firstNameValue = firstName.value;
  let lastNameValue = lastName.value;
  let emailValue = email.value;
  let passwordValue = password.value;

 if (firstNameValue === "") {
   errorMessage[0].textContent = `first name cannot be empty`
   errorMessage[0].classList.remove("one");
   errorMessage[0].classList.add("display");
   inputData[0].classList.add("error-image");
 } else{
   errorMessage[0].classList.remove("display");
   errorMessage[0].classList.add("one");
   inputData[0].classList.remove("error-image");;
 };

  if (lastNameValue === "") {
   errorMessage[1].textContent = `Last name cannot be empty`
   errorMessage[1].classList.remove("two");
   errorMessage[1].classList.add("display");
   inputData[1].classList.add("error-image");
 } else{
   errorMessage[1].classList.remove("display");
   errorMessage[1].classList.add("two");
   inputData[1].classList.remove("error-image");
 };

  if (emailValue === "") {
   errorMessage[2].textContent = `Email address cannot be empty`
   errorMessage[2].classList.remove("three");
   errorMessage[2].classList.add("display");
   inputData[2].classList.add("error-image");
 } else{
   errorMessage[2].classList.remove("display");
   errorMessage[2].classList.add("three");
   inputData[2].classList.remove("error-image");
 };

 if (passwordValue === "") {
   errorMessage[3].textContent = `Password cannot be empty`
   errorMessage[3].classList.remove("four");
   errorMessage[3].classList.add("display");
   inputData[3].classList.add("error-image");
 } else{
   errorMessage[3].classList.remove("display");
   errorMessage[3].classList.add("four");
   inputData[3].classList.remove("error-image");
 };
  
}

btn.addEventListener("click", displayError)

