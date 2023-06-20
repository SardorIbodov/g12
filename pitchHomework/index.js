const pitch = document.querySelector("#pitch");
const ball = document.querySelector("#ball");

pitch.addEventListener("click", (e) => {
  if (
    e.offsetX >= 25 &&
    e.offsetX <= 775 &&
    e.offsetY >= 25 &&
    e.offsetY <= 375
  ) {
    ball.style.cssText = `
			top: ${e.offsetY - 25}px;
			left: ${e.offsetX - 25}px;
		`;
  } else {
    alert("Out");
  }
});
