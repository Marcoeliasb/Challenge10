class Shape {
    constructor(color){
        this.color = color;// inicia el color del shape
    }

    setColor(color){
        this.color = color;// Establece el color del shape
    }
}

class Circle extends Shape {
    render(){// Aqui devuelve el SVG de un círculo
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    render(){// Aqui devuelve el SVG de un triangulo
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render(){// Aqui devuelve el SVG de un cuadrado
        return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`; 
    }
}

module.exports = { Circle, Triangle, Square};// Exporta las clases (Circle, Triangle, Squeare)