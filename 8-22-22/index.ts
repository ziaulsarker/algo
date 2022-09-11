// Array Problems 

// Sum array. write an function that will take an aray of intgets and retuen a sum

const sumArray = (arr: number[]): number => {
  let total = 0;
  for(let x = 0; x < arr.length; x++) {
    total += arr[x];
  }

  return total;
}

const sumArrayFucntional = (arr: Array<number>): number => arr.reduce((acc, curr) => acc + curr, 0);


function test() {
  const number = [1,2,3,4,5,6,7,8,9,10];

  const sum = sumArray(number);
  const sumFn = sumArrayFucntional(number);

  console.log(`the sum is ${sum}`)
  console.log(`the sumFn is ${sumFn}`)
}


// sequtial search; write a meathd that till search an array for a given value;

class Seach {
  static sequtial(arr: Array<number>, itemToFind: number): number {
    let foundItemIndex;

    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === itemToFind) {
        return i;
      }
    }

    foundItemIndex = -1;
    return foundItemIndex;
  }

  static binarySearch(arr: Array<number>, itemToFind: number): number {
    let start = 0;
    let middle;
    let high = arr.length - 1;

    


    while(start <= high) {
      if(arr[start] === itemToFind) return start;
      if(arr[high] === itemToFind) return high;
  
      middle =  Math.floor((start + high) / 2);


      if(arr[middle] === itemToFind) return middle;

      if(arr[middle] < itemToFind) {
        start = middle + 1;
      } 

      if(arr[middle] > itemToFind) {
        high = middle - 1;
      }
 
    }

    return -1;
  }
}


const binarySearch = (arr: Array<number>, itemToFind: number): number => {
  let size = arr.length;
  let low = 0;
  let middle;
  let high = size - 1;

  while(low <= high) {
    middle = Math.floor((low + high) / 2);
    if(arr[middle] === itemToFind) {
      return middle;
    } else {
      if(arr[middle] < itemToFind) {
        low = middle + 1;
      } else {
        high = middle - 1;
      }
    }

  };

  return -1;
}


console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 7));
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 11));

