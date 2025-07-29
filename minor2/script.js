const button = document.querySelector(".button");

button.addEventListener("click", function () {
  const colors = ["#1abc9c", "#e74c3c", "#8e44ad", "#3498db", "#2ecc71", "#f39c12"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
