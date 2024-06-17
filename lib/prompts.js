const inquirer = require("inquirer");

const getUserInput = async () => {
    const questions = [
        {
            type: "input",
            name: "text",
            message: "Enter text for the logo",
            validate: (input) => input.length <= 3 || "Text must be 3 characters or less",
        },
        {
            type: "input",
            name: "textColor",
            message: "Enter text color",
        },
        {
            type: "list",
            name: "shape",
            message: "Choose a shape for the logo",
            choices: ["Circle", "Triangle", "Square"],
        },
        {
            type: "input",
            name: "shapeColor",
            message: "Enter the shape color",
        },
    ];

    return inquirer.prompt(questions);
};

module.exports = { getUserInput};
