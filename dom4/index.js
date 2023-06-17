const forms = document.forms;
// console.log(forms);

// Accessing
// Index
// console.log(forms[0], "by index g12");
// console.log(forms[1], "by index g10");

// Name
// console.log(forms.g12, "by name g12");
// console.log(forms.g10, "by name g10");

// Accessing element
// const g12Elements = forms.g12.elements;
// console.log(g12Elements);
// 1
// console.log(g12Elements.email, "by name");
// 2
// console.log(g12Elements[0], "by index");

// Inputs with same name => RadioNodeList
// console.log(g12Elements.email);

// Directly accessing
// console.log(forms.g12.email);
// console.log(forms.g12.password);

// Select
let selectLang = forms.g12.languages;
// console.log(forms.g12.languages);
// select value
// console.log(forms.g12.languages.value);
// change value
// selectLang.value = "eng";
// console.log(selectLang.value);

// Practice with select
const greeting = document.querySelector("#greeting");

const sayHello = (value) => {
  switch (value) {
    case "uz":
      return "Assalomu alaykum";
    case "ru":
      return "Привет";
    case "eng":
      return "Hello";
  }
};
greeting.innerText = sayHello(selectLang.value);

// selectLang.addEventListener("input", ({ target: { value } }) => {
//   greeting.innerText = sayHello(value);
// });

// Input validation
let passwordInput = forms.g12.password;
let passwordValue;
let message = document.querySelector("#message");
let submitBtn = document.querySelector("#submitBtn");
submitBtn.disabled = true;
submitBtn.style.cursor = "not-allowed";

const inputValidation = (value) => {
  if (value.length === 0) {
    return { message: "", color: "red" };
  } else if (value.length >= 1 && value.length < 8) {
    return { message: "Eng kamida 8ta simvol kiriting", color: "red" };
  } else {
    return { message: "Ishonchli parol", color: "green" };
  }
};
passwordInput.addEventListener("input", ({ target: { value } }) => {
  message.innerText = inputValidation(value).message;
  message.style.color = inputValidation(value).color;
  passwordValue = value.length;
  if (passwordValue >= 8) {
    submitBtn.disabled = false;
    submitBtn.style.cursor = "pointer";
  } else {
    submitBtn.disabled = true;
    submitBtn.style.cursor = "not-allowed";
  }
});

// Submit
let userValue = forms.g12.users.value;
forms.g12.users.addEventListener("input", ({ target: { value } }) => {
  userValue = value;
});
forms.g12.addEventListener("submit", (e) => {
  if (passwordValue >= 8) {
    forms.g12.action = `https://jsonplaceholder.typicode.com/users/${userValue}`;
  } else {
    e.preventDefault();
    alert("Eng kamida 8ta simvol kiriting");
  }
});
