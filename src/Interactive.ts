function sum1(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sum1(1, 2, 3));
  console.log(sum1(10, 20));