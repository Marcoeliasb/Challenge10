const fs = require("fs");// 
const {getUserInput} = require ("./lib/prompts");// Llamamos la funcion getuserinput del archivo de prompts
const {Circle, Triangle, Square} = require ("./lib/shapes");// llamamos las clases que se crearon en el archivo shapes

const generateSVG = ({ text, textColor, shape, shapeColor}) => {
    let selectedShape;

    switch (shape){// Selecciona la forma basada en lo que solicitó el usuario
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
  `;// se crea el contenido SVG conforme lo que solicitó el usuario

  fs.writeFileSync("logo.svg", svgContent.trim());// Escribe el contenido SVG en un archivo
  console.log("Generated logo.svg");
};

const runApp = async () => {
    const userInput = await getUserInput ();// Obtenemos las entradas que ingresó el usuario
    generateSVG(userInput);// Genera el archivo SVG con lo que ingresó el usuario
};

runApp();// Ejecuta la aplicación