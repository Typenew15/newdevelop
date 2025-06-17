function sum1(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sum1(1, 2, 3));
  console.log(sum1(10, 20));

  interface Shape {
    calculateArea(): number;
  }
  
  class Rectangle implements Shape {
    width: number;
    height: number;
  
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
  
    calculateArea(): number {
      return this.width * this.height;
    }
  }
  
  const rect = new Rectangle(5, 10);
  console.log(rect.calculateArea());


  interface Shape1 {
    calculateArea(): number;
  }
  
  class Rectangle1 implements Shape1 {
    width: number;
    height: number;
  
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
  
    calculateArea(): number {
      return this.width * this.height;
    }
  }