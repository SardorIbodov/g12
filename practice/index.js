const images = document.querySelectorAll(".image");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

const dots = document.querySelector(".dots");
for (let i = 0; i < images.length; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (images[i].getAttribute("class").includes("active")) {
    dot.classList.add("active");
  }
  dots.append(dot);
}

const dotElement = document.querySelectorAll(".dot");
for (let i = 0; i < dotElement.length; i++) {
  dotElement[i].addEventListener("click", () => {
    for (let item = 0; item < dotElement.length; item++) {
      dotElement[item].classList.remove("active");
      images[item].classList.remove("active");
    }
    dotElement[i].classList.add("active");
    images[i].classList.add("active");
  });
}

// const nextFunction = (e) => {
//   for (let i = 0; i < images.length; i++) {
//     if (images[i].getAttribute("class").includes("active")) {
//       if (i === images.length - 1) {
//         images[i].classList.remove("active");
//         images[0].classList.add("active");
//       } else {
//         images[i + 1].classList.add("active");
//         images[i].classList.remove("active");
//       }
//       break;
//     }
//   }
// };

// const prevFunction = (e) => {
//   for (let i = 0; i < images.length; i++) {
//     if (images[i].getAttribute("class").includes("active")) {
//       if (i === 0) {
//         images[i].classList.remove("active");
//         images[images.length - 1].classList.add("active");
//       } else {
//         images[i - 1].classList.add("active");
//         images[i].classList.remove("active");
//       }
//       break;
//     }
//   }
// };

// const buttonAction = (type) => {
//   for (let i = 0; i < images.length; i++) {
//     if (images[i].getAttribute("class").includes("active")) {
//       if (type === "next") {
//         if (i === images.length - 1) {
//           images[i].classList.remove("active");
//           images[0].classList.add("active");
//         } else {
//           images[i + 1].classList.add("active");
//           images[i].classList.remove("active");
//         }
//       } else {
//         if (i === 0) {
//           images[i].classList.remove("active");
//           images[images.length - 1].classList.add("active");
//         } else {
//           images[i - 1].classList.add("active");
//           images[i].classList.remove("active");
//         }
//       }
//       break;
//     }
//   }
// };

const buttonAction = (type) => {
  for (let i = 0; i < images.length; i++) {
    if (images[i].getAttribute("class").includes("active")) {
      if (type === "next") {
        images[i].classList.remove("active");
        if (i === images.length - 1) {
          images[0].classList.add("active");
        } else {
          images[i + 1].classList.add("active");
        }
        dotElement[i].classList.remove("active");
        if (i === images.length - 1) {
          dotElement[0].classList.add("active");
        } else {
          dotElement[i + 1].classList.add("active");
        }
      } else {
        images[i].classList.remove("active");
        if (i === 0) {
          images[images.length - 1].classList.add("active");
        } else {
          images[i - 1].classList.add("active");
        }
        dotElement[i].classList.remove("active");
        if (i === 0) {
          dotElement[images.length - 1].classList.add("active");
        } else {
          dotElement[i - 1].classList.add("active");
        }
      }
      break;
    }
  }
};

next.addEventListener("click", () => {
  buttonAction("next");
});
prev.addEventListener("click", () => {
  buttonAction("prev");
});
