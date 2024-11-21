// Shapes
// Area, Perimeter
// simple - single function calculateTotalArea

// interface A shape
interface Shape {
  area(): number;
  perimeter(): number;
}

export class Circle implements Shape {
  constructor(private radius: number) {}

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

export class Reactangle implements Shape {
  constructor(
    private height: number,
    private width: number,
  ) {}

  area(): number {
    return this.height * this.width;
  }
  perimeter(): number {
    return 2 * (this.height + this.width);
  }
}

export function calculateTotalArea(shape: Shape): number {
  return shape.area();
}

export default function main() {
  const circle = new Circle(5);
  const reactangle = new Reactangle(4, 6);

  console.log("Area of Circle", calculateTotalArea(circle));
  console.log("Area of Reactangle", calculateTotalArea(reactangle));
}
