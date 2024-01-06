interface Shape {
  getArea(): number | Float32Array;
  perimeter(): number | Float32Array;
}

class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getArea(): number | Float32Array {
    return Math.PI * this.radius ** 2;
  }

  perimeter(): number | Float32Array {
    return 2 * Math.PI * this.radius;
  }
}

class Square implements Shape {
  side: number;

  constructor(side: number) {
    this.side = side;
  }

  getArea(): number | Float32Array {
    return this.side ** 2;
  }

  perimeter(): number | Float32Array {
    return this.side * 4;
  }
}

class Rectangle implements Shape {
  height: number;
  width: number;

  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
  }

  getArea(): number | Float32Array {
    return this.height * this.width;
  }

  perimeter(): number | Float32Array {
    return 2 * (this.height + this.width);
  }
}

let circle = new Circle(10);
console.log(circle.getArea());
console.log(circle.perimeter());

let square = new Square(10);
console.log(square.getArea());
console.log(square.perimeter());

let rectangle = new Rectangle(10,20)
console.log(rectangle.getArea());
console.log(rectangle.perimeter());