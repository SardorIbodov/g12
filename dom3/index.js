// 1 => don't use reserved keywords
// Mouse events
// onclick
// ondblclick
// onmouseover
// onmousemove
// onmouseup
// onmousedown
// onmouseout
// oncontextmenu

// function myFunction(event){
//   console.log(event);
// };

// 2
// let button = document.querySelector("#button");
// let box = document.querySelector("#box");
// button.onmouseup = (e) => {
//   console.log(e.target);
// };
// box.onmouseover = (e) => {
//   console.log(e);
// };

// 3 => addEventListener
// let button = document.querySelector("#button");
// let box = document.querySelector("#box");
// button.addEventListener("click", () => {
//   console.log("clicked!");
// });

// Bubling, stopImmediatePropagition
// let parent = document.querySelector("#parent");
// let child = document.querySelector("#child");
// let grandchild = document.querySelector("#grandchild");

// parent.addEventListener("click", () => {
//   console.log("Parent");
// });
// child.addEventListener("click", (e) => {
//   e.stopImmediatePropagation();
//   console.log("Child");
// });
// grandchild.addEventListener("click", (e) => {
//   e.stopImmediatePropagation();
//   console.log("Grandchild");
// });

// preventDefault
// const link = document.querySelector("#link");
// link.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("Clicked");
// });

// keyboard events
// keyup
// keydown
// keypress
// const body = document.addEventListener("keydown", (e) => {
//   console.log(e);
// });
