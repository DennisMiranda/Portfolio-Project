//WordMap skills
const myTags = [
    'JavaScript', 'CSS', 'HTML', 'C++',
    'Python', 'Github', 'Node.js', 'MySQL', 'jQuery',
];

var tagCloud = TagCloud('.content', myTags,{

  // radius in px
  radius: 100,

  // animation speed
  // slow, normal, fast
  maxSpeed: 'fast',
  initSpeed: 'fast',

  direction: 100,
  
  // interact with cursor move on mouse out
  keep: true
  
});

//To change the color of text randomly
var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector('.content').style.color = random_color;


document.querySelectorAll('.card').forEach(card => { 
	card.addEventListener('click', () => { 
		card.classList.toggle('flipped'); 
		}); 
	}); 

