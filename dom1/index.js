// Node vs Element
// console.log(menu);
// console.log(menu.childNodes); // Node
// console.log(menu.firstChild);
// console.log(menu.lastChild);

// console.log(menu.children); // Element
// console.log(menu.firstElementChild);
// console.log(menu.lastElementChild);

// console.log(firstChild);
// console.log(firstChild.nextElementSibling.nextElementSibling);
// console.log(thirdChild.previousElementSibling.previousElementSibling);
// console.log(firstChild.nextSibling);

// console.log(firstChild.parentElement.parentElement);

// Selectors
// by tag
// const menu = document.getElementsByTagName("ul")[0]; // return array
// console.log(menu);

// by class
// const menu = document.getElementsByClassName("menu"); // returns array
// console.log(menu);

// by id
// const menu = document.getElementById("menu");
// console.log(menu.class);

// querySelector vs querySelectorAll
// const menu1 = document.querySelector("ul");
// const menu2 = document.querySelector(".menu");
// const menu3 = document.querySelector("#menu");

// const menu4 = document.querySelectorAll("ul");
// const menu5 = document.querySelectorAll(".menu");
// const menu6 = document.querySelectorAll("#menu");

// innerHTML, innerText, textContent, outerHTML
// innerHTML => element, text, space
// let menu = document.querySelector("#menu");
// menu.innerHTML = "Webbrain";
// menu.innerHTML = "<a href='#'>Webbrain</a>";
// console.log(menu.innerHTML);

// innerText => text
// let menu = document.querySelector("#menu");
// menu.innerText = "<a href='#'>Webbrain</a>";
// console.log(menu.innerText);

// textContent => text, space
// let menu = document.querySelector("#menu");
// console.log(menu.innerHTML, "html");
// console.log(menu.innerText, "text");
// console.log(menu.textContent, "content");

// outerHTML => itself, element, text, space
// let menu = document.querySelector("#menu");
// console.log(menu.outerHTML);
// console.log(menu.innerHTML);

// hidden
// let menu = document.querySelector("#menu");
// menu.hidden = true;
// console.log(menu.hidden);

// console.log(window);
// console.log(window.document); // DOM
// console.log(window.location); // BOM
// window.title = "DOM | Birinchi";

// let user = {
// 	login: "webbrain",
// 	password: 1234
// }

// getAttribute("attributeName")
// const anchor = document.querySelector("#link");
// console.log(anchor.getAttribute("href"));
// console.log(anchor.getAttribute("class"));

// setAttribute("attributeName", "attributeValue")
// const item = document.querySelector("#second");
// item.setAttribute("class", "ITEM");
// item.setAttribute("style", "color: red");

// removeAttribute("attributeName")
// const item = document.querySelector("#second");
// item.removeAttribute("class");
