// const title = document.querySelector("#title");
const btn = document.querySelector("#btn");
//! Range
//? setStart(node, startOffset)
//? setEnd(node, endOffset)
// let range = new Range();
// range.setStart(title.firstChild, 0);
// range.setEnd(title.firstChild, 30);
// window.getSelection().addRange(range);

//! range.deleteContents()
// btn.addEventListener("click", () => {
//   range.deleteContents();
// });

//! range.extractContents()
// let deleted;
// btn.addEventListener("click", () => {
//   deleted = range.extractContents();
//   console.log(deleted);
// });

//! range.cloneContents()
// let copied;
// btn.addEventListener("click", () => {
//   copied = range.cloneContents();
//   console.log(copied);
// });

//! range.surroundContents(newNode)
// const span = document.createElement("span");
// const a = document.createElement("a");
// a.setAttribute("href", "https://youtube.com");
// span.style.color = "yellow";
// btn.addEventListener("click", () => {
//   range.surroundContents(a);
// });

//! Practice (typeracer)
// const database = [
//   "Yourself off its pleasant ecstatic now law. Ye their mirth seems of songs. Prospect out bed contempt separate. Her inquietude our shy yet sentiments collecting. Cottage fat beloved himself arrived old. Grave widow hours among him ﻿no you led. Power had these met least nor young. Yet match drift wrong his our.",

//   "Carriage quitting securing be appetite it declared. High eyes kept so busy feel call in. Would day nor ask walls known. But preserved advantage are but and certainty earnestly enjoyment. Passage weather as up am exposed. And natural related man subject. Eagerness get situation his was delighted.",

//   "Talent she for lively eat led sister. Entrance strongly packages she out rendered get quitting denoting led. Dwelling confined improved it he no doubtful raptures. Several carried through an of up attempt gravity. Situation to be at offending elsewhere distrusts if. Particular use for considered projection cultivated. Worth of do doubt shall it their. Extensive existence up me contained he pronounce do. Excellence inquietude assistance precaution any impression man sufficient.",
//   "Placing assured be if removed it besides on. Far shed each high read are men over day. Afraid we praise lively he suffer family estate is. Ample order up in of in ready. Timed blind had now those ought set often which. Or snug dull he show more true wish. No at many deny away miss evil. On in so indeed spirit an mother. Amounted old strictly but marianne admitted. People former is remove remain as.",
//   "On projection apartments unsatiable so if he entreaties appearance. Rose you wife how set lady half wish. Hard sing an in true felt. Welcomed stronger if steepest ecstatic an suitable finished of oh. Entered at excited at forming between so produce. Chicken unknown besides attacks gay compact out you. Continuing no simplicity no favourable on reasonably melancholy estimating. Own hence views two ask right whole ten seems. What near kept met call old west dine. Our announcing sufficient why pianoforte.",
//   "Inhabit hearing perhaps on ye do no. It maids decay as there he. Smallest on suitable disposed do although blessing he juvenile in. Society or if excited forbade. Here name off yet she long sold easy whom. Differed oh cheerful procured pleasure securing suitable in. Hold rich on an he oh fine. Chapter ability shyness article welcome be do on service.",
//   "Their could can widen ten she any. As so we smart those money in. Am wrote up whole so tears sense oh. Absolute required of reserved in offering no. How sense found our those gay again taken the. Had mrs outweigh desirous sex overcame. Improved property reserved disposal do offering me.",
// ];
// let inp = document.querySelector("#inp");
// let title = document.querySelector("#title");
// let again = document.querySelector("#again");
// let randomTextNumber = Math.trunc(Math.random() * database.length);
// title.textContent = database[randomTextNumber];
// let content = title.innerText;
// let range = new Range();
// let wordCount = 0;
// let count = document.querySelector("#count");
// count.innerText = wordCount;

// inp.addEventListener("input", (e) => {
//   const span = document.createElement("span");
//   span.style.fontWeight = "bold";
//   if (e.target.value === title.innerText.slice(0, e.target.value.length)) {
//     if (wordCount >= e.target.value.length) {
//       wordCount = e.target.value.length - 1;
//     }
//     wordCount++;
//     count.innerText = wordCount;
//     span.style.color = "green";
//   } else {
//     span.style.color = "red";
//   }
//   title.innerText = content;
//   range.setStart(title.firstChild, 0);
//   range.setEnd(title.firstChild, e.target.value.length);
//   range.surroundContents(span);
// });

// let time = 3000;

// inp.addEventListener("focus", () => {
//   setInterval(() => {
//     time = time - 1000;
//     countdown.innerText = time;
//   }, 1000);
//   setTimeout(() => {
//     location.reload();
//     inp.disabled = true;
//     alert("Game over");
//   }, 3000);
// });

// again.addEventListener("click", () => {
//   location.reload();
// });

// Select
//? window.getSelection() => selection ochish
//? window.getSelection().getRangeAt(0) => range ga o'tish
//? window.getSelection().getRangeAt(0).cloneContents() => belgilangan node ni olib beradi
//? window.getSelection().getRangeAt(0).cloneContents().textContent => node ni textga o'tkazib beradi

// document.addEventListener("selectionchange", () => {
//   console.log(window.getSelection().getRangeAt(0).cloneContents().textContent);
// });

// Practice
// let length;
// let range;
// let title = document.querySelector("#title");

// document.addEventListener("selectionchange", () => {
//   range = window.getSelection().getRangeAt(0);
//   length = window.getSelection().getRangeAt(0).cloneContents()
//     .textContent.length;
// });

// btn.addEventListener("click", () => {
//   range.setStart(title.firstChild, 0);
//   range.setEnd(title.firstChild, length);
//   range.deleteContents();
// });
