//WordMap skills
const myTags = [
  "JavaScript",
  "CSS",
  "HTML",
  "C++",
  "Python",
  "Github",
  "VBA",
  "MySQL",
  "Three.js",
];

const idContainer = "#skills_content";

const tagCloud = TagCloud(idContainer, myTags, {
  radius: 100,

  // animation speed
  maxSpeed: "fast",
  initSpeed: "fast",
  direction: 100,

  // interact with cursor move on mouse out
  keep: true,
});

//To change the color of text randomly
var colors = ["#3B2A45", "#1D1F30", "#4E5B6E", "#7F6B9B", "2C3E50", "7C9E92"];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector(idContainer).style.color = random_color;

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});
