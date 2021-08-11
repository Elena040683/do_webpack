import imgCat from './images/cat.png';
import imgDog from './images/labrador-640.jpg';
import { sum } from './helpers/sum.js';
import './styles/main.scss';




// Create a class property without a constructor
class Game {
  name = "Violin Charades";
}
const myGame = new Game();
// Create paragraph node
const p = document.createElement("p");
p.textContent = `I like ${myGame.name}.`;

// Create heading node
const heading = document.createElement("h1");
heading.textContent = "Interesting!";

// Append SVG and heading nodes to the DOM
const app = document.querySelector("#root");
app.append(heading, p);

const cat = document.createElement("img");
cat.src = imgCat;
app.append(cat);

const dog = document.createElement("img");
dog.src = imgDog;
app.append(dog);

console.log(sum(2, 3));



// const svgImg = document.createElement("img");
// svgImg.src = imgSvg;
// app.append(svgImg);