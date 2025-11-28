// 1. Select <h1> by id and change text
let heading = document.getElementById("main-heading");
heading.textContent = "Welcome to the DOM World!";

// 2. Select all <p> tags and make text blue
let paragraphs = document.getElementsByTagName("p");
for (let p of paragraphs) {
  p.style.color = "blue";
}

// 3. Select first div with class "container" and change background
let firstContainer = document.querySelector(".container");
firstContainer.style.backgroundColor = "yellow";
