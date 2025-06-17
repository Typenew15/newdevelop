class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    if (newName.length > 0) {
      this._name = newName;
    }
  }
}

const person = new Person("Alice");
console.log(person.name);
person.name = "Bob";
console.log(person.name);

function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));
console.log(sum(10, 20));