// Create a class Rectangle with:

// A property width
// A property height
// A method constructor(width,height)
// A method calculatePerimeter()
// A method calculateArea()
// Create a class Square that extends Rectangle with:

// A property side
// A method constructor(side) (make sure you call super and pass the required parameters)

class Rectangle {
  // TODO
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculatePerimeter() {
    return `The rectangle perimeter is ${(this.height + this.width) * 2}`;
  }
  calculateArea() {
    return `The rectangle area is ${this.height * this.width}`;
  }
}

class Square extends Rectangle {
  // TODO
  constructor(size) {
    super(size, size);
  }
}

const r1 = new Rectangle(6, 7);
console.log("Perimeter of r1 =", r1.calculatePerimeter()); // 26
console.log("Area of r1 =", r1.calculateArea()); // 42

const s1 = new Square(5);
console.log("Perimeter of s1 =", s1.calculatePerimeter()); // 20
console.log("Area of s1 =", s1.calculateArea()); // 25

const s2 = new Square(10);
console.log("Perimeter of s2 =", s2.calculatePerimeter()); // 40
console.log("Area of s2 =", s2.calculateArea()); // 100
//Note: Although the square class accepts just one parameter you have to pass two parameters while calling the super method ?
//Why ? Because as we saw in class the super method invokes/calls the parent class constructor method.
//And here the parent class is rectangle .
