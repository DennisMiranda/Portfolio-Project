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
var colors = [" #40E0D0", " #FF007F", " #8A2BE2", " #EAEAEA", " #00bFFF"];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector(idContainer).style.color = random_color;

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});
