let fruits = ['banana', 'apple', 'grapes', 'orange'];
let result = fruits.sort();
console.log(result)

let nums = [1, 3, 7, 10, 12, 15];
let result = nums.find(num => num % 2 === 0)
console.log(result)

console.log("Test the conflicts")

// let fruits = ['banana', 'apple', 'grapes', 'apple', 'orange'];
// let result = fruits.indexOf('apple','orange)//cooment out new try
// console.log(result)

test.beforeEach(async ({page}) => {
    await page.addInitScript(() => {
      class FileSystemFileHandleMock {
        constructor(file) {
          this._file = file;
        }
  
        async getFile() {
          return this._file;
        }
      }
      window.showOpenFilePicker = async () => [new FileSystemFileHandleMock(new File(['Test content.'], "foo.txt"))];
    });
  });