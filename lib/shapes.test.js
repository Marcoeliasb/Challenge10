const { Circle, Triangle, Square} = require("./shapes");// se importan las clases que se van a testear

test ("Circle render", () =>{
    const shape = new Circle();// se crea la instancia de Circle
    shape.setColor("blue");// Se establece el color del círculo
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');// Verifica que el render sea lo esperado
});

test ("Triangle render", () =>{
    const shape = new Triangle();// Se crea la instancia de Triangle
    shape.setColor("blue");// Se establece el color del triángulo
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');// Verifica que el render sea lo esperado
});

test ("Square render", () => {
    const shape = new Square();// Se crea la instancia de Square
    shape.setColor("blue");// Se establece el color del cuadrado
    expect(shape.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="blue" />');// Verifica que el render sea lo esperado
});