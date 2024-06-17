const fs = require("fs");
const {getUserInput} = require ("./lib/prompts");
const {Circle, Triangle, Square} = require ("./lib/shapes");

const generateSVG = ({ text, textColor, shape, shapeColor}) => {
    let selectedShape;

    switch (shape){
        case "Circle":
            selectedShape = new Circle(shapeColor);
            break;
        case "Triangle":
            selectedShape = new Triangle(shapeColor);
            break;
        case "Square":
            selectedShape = new Square (shapeColor);
            break;
    }
    
    const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${selectedShape.render()}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;

  fs.writeFileSync("logo.svg", svgContent.trim());
  console.log("Generated logo.svg");
};

const runApp = async () => {
    const userInput = await getUserInput ();
    generateSVG(userInput);
};

runApp();