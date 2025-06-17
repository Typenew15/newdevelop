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

// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({page}) => {
  await page.addInitScript(() => {
    class FileSystemHandleMock {
      constructor({name, children}) {
        this.name = name;
        children ??= [];
        this.kind = children.length ? 'directory' : 'file';
        this._children = children;
      }

      values() {
        // Wrap children data in the same mock.
        return this._children.map(c => new FileSystemHandleMock(c));
      }
    }
    // Create mock directory
    const mockDir = new FileSystemHandleMock({
      name: 'root',
      children: [
        {
          name: 'file1',
        },
        {
          name: 'dir1',
          children: [
            {
              name: 'file2',
            },
            {
              name: 'file3',
            }
          ]
        },
       
    // Make the picker return mock directory
    window.showDirectoryPicker = async () => mockDir;
  });
});

test('should display directory tree', async ({ page }) => {
  await page.goto('/ls-dir.html');
  await page.locator('button', { hasText: 'Open directory' }).click();
  // Check that the displayed entries match mock directory.
  await expect(page.locator('#dir')).toContainText([
    'file1',
    'dir1', 'file2', 'file3',
    'dir2', 'file4', 'file5'
  ]);
});


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
    //   window.showOpenFilePicker = async () => [new FileSystemFileHandleMock(new File(['Test content.'], "foo.txt"))];
    });
  });