const prompt = require('prompt-sync')();

const arrayLength = Math.floor(Math.random() * 10) + 1; 
const randomArray = Array.from({ length: arrayLength }, () => Math.floor(Math.random() * 100)); 
randomArray.sort((a, b) => a - b); 

console.log('Випадковий відсортований масив чисел:', randomArray);

const target = parseInt(prompt('Введіть число, яке шукається: '));

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; 
    } else if (arr[mid] < target) {
      left = mid + 1; 
    } else {
      right = mid - 1; 
    }
  }

  return -1; 
}

const result = binarySearch(randomArray, target);

if (result !== -1) {
  console.log(`Елемент ${target} знайдено на позиції ${result}.`);
} else {
  console.log(`Елемент ${target} не знайдено в масиві.`);
}

//npm i prompt-sync