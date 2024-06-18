const inquirer = require("inquirer");

const getUserInput = async () => {
    const questions = [ // Definimos las preguntas que se harán al usuario
        {
            type: "input",// Tipo de pregunta de entrada de texto
            name: "text",// Nombre en la respuesta
            message: "Enter text for the logo",// Que es lo que verá el usuario
            validate: (input) => input.length <= 3 || "Text must be 3 characters or less",// Validación para asegurarnos que el texto tenga máximo 3 caracteres
        },
        {
            type: "input",// Tipo de pregunta de entrada de texto
            name: "textColor",// Nombre en la respuesta
            message: "Enter text color",// Que es lo que verá el usuario
        },
        {
            type: "list",// Tipo de pregunta de entrada de texto
            name: "shape",// Nombre en la respuesta
            message: "Choose a shape for the logo",// Que es lo que verá el usuario
            choices: ["Circle", "Triangle", "Square"],//Opciones que tendrá el usuario
        },
        {
            type: "input",// Tipo de pregunta de entrada de texto
            name: "shapeColor",// Nombre en la respuesta
            message: "Enter the shape color",// Que es lo que verá el usuario
        },
    ];

    return inquirer.prompt(questions);// Retorna las respuestas que dió el usuario
};

module.exports = { getUserInput}; // Exporta la función
