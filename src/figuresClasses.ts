export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: 'red' | 'green' | 'blue',
  getArea():number;
}

export class Triangle implements Figure {
  constructor(
    public shape:"triangle",
    public color:"red" | "green" | "blue",
    public a:number,
    public b:number,
    public c:number,
  ) {
    const max = Math.max(a, b, c);
    const sum = [a, b, c].reduce((acc, curr) => acc + curr, 0);

    if ((max >= sum - max) || a <= 0 || b <= 0 || c <= 0) {
      throw new Error('the longest side of a triangle is >= than a sum of two others');
    }
  }

  getArea():number {
    const s = (this.a + this.b + this.c) / 2;
    const result = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    return Math.floor(result * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public shape: "circle",
    public color: "red" | "green" | "blue",
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be > 0');
    }
  }
  getArea():number {
    return Math.floor(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public shape: "rectangle",
    public color: "red" | "green" | "blue",
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and Height must be > 0');
    }
  }
  getArea():number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure:Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
