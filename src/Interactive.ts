function sum1(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sum1(1, 2, 3));
  console.log(sum1(10, 20));

abstract class Animal1 {
  abstract makeSound(): void;

  move(): void {
    console.log('Moving...');
  }
}

class Dog1 extends Animal1 {
  makeSound(): void {
    console.log('Bark');
  }
}

const myDog = new Dog1();
myDog.makeSound();
myDog.move();
