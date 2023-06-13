import mockData from "./mock.js";

// Element yaratish
// const box = document.createElement("div");
// box.innerHTML = "<a href='#'>LINK</a>";

// Insert
// const container = document.querySelector("#container");
// const title = document.querySelector("#title");
// append
// container.append(box);
// prepend
// container.prepend(box);
// before
// container.before(box);
// after
// container.after(box);
// title.after(box);

// insertAdjecentHTML
// container.insertAdjacentHTML("beforebegin", box);

// cloneNode
// const cloneContainer = container.cloneNode(true);
// console.log(cloneContainer);

// Styling
// 1
// container.style.background = "lightblue";
// container.style.borderRadius = "4px";
// container.style.padding = "10px";
// 2
// container.style.cssText = `
// 	background: lightblue;
// 	border-radius: 4px;
// 	margin: 10px;
// 	padding: 10px;
// `;

// Geometry
// console.log(container.offsetWidth);
// console.log(container.clientWidth);
// console.log(container.offsetHeight);
// console.log(container.clientHeight);
// console.log(container.scrollHeight);

// scroll
// scroll(x, y)
// scrollTo(x, y)
// scrollBy(x, y)
// scroll({
// behavior
// top
// })
// container.scroll(0, 100);
// const button = document.querySelector("#button");
// button.onclick = () => {
// container.scroll(0, 25);
// container.scrollTo(0, 25);
//   container.scrollBy({
//     behavior: "smooth",
//     top: -25,
//   });
// };

// getBoundingClientRect
// console.log(container.getBoundingClientRect());

// classlist vs attribute

// const text = document.querySelector("#text");
// const changeColor = document.querySelector("#changeColor")
// getAttribute, removeAttribute, setAttribute
// text.setAttribute("class", "size");
// classlist.add(), classlist.toggle, classlist.remove()
// text.classList.add("size");
// text.classList.remove("color");
// changeColor.onclick = () => {
// 	text.classList.toggle("color");
// }

// Practice
// const button = document.querySelector("#button");
// const initialHeight = container.clientHeight;
// button.onclick = () => {
//   console.log(container.clientHeight);
//   console.log(container.scrollHeight);
//   if (container.clientHeight !== container.scrollHeight) {
//     container.style.height = `${container.scrollHeight}px`;
//     button.innerText = "Show less";
//   } else {
//     container.style.height = `${initialHeight}px`;
//     button.innerText = "Show more";
//   }
// };

// CRUD
const body = document.querySelector("#body");
const list = document.createElement("div");
body.append(list);
let data = mockData;

// display => HTML ga chiqarish
const displayData = (info) => {
  list.innerHTML = "";
  info.map((user) => {
    const userElement = document.createElement("h3");
    const onDelete = (id) => {
      data = info.filter((user) => {
        return user.id !== id;
      });
      displayData(data);
    };
    const button = document.createElement("button");
    button.innerText = "Delete";
    button.onclick = () => onDelete(user.id);
    userElement.innerText = `${user.id}. ${user.fullName}`;
    userElement.append(button);
    list.append(userElement);
  });
};
displayData(data);

// sort
const sort = () => {
  data = data.sort((a, b) => a.fullName.localeCompare(b.fullName));
  displayData(data);
};
const sortButton = document.querySelector("#sort");
sortButton.onclick = () => sort(data);

// search
const searchInput = document.querySelector("#searchInput");
searchInput.oninput = ({ target: { value } }) => {
  value = value.toLowerCase();
  let res = [];
  res = data.filter((user) => {
    return user.fullName.toLowerCase().includes(value);
  });
  displayData(res);
};

// add
const addButton = document.querySelector("#addButton");
const addInput = document.querySelector("#addInput");
let newName = "";
addInput.oninput = ({ target: { value } }) => {
  newName = value;
};
const addUser = () => {
  data = [...data, { id: data.length + 1, fullName: newName }];
  displayData(data);
  addInput.value = "";
};
addButton.onclick = () => addUser();

// end
