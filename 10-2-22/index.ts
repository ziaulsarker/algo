// BINARY SEARCH 

// this search only works on sorted arrays

const binarySearch = (sortedArray: Array<number>, valueToSearch: number): number => {
  let high: number = sortedArray.length - 1;
  let low = 0;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);

    if(valueToSearch === sortedArray[middle]) return middle;
    
    if(valueToSearch < sortedArray[middle]) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }

  }

  return -1;
}

const sortedArray: Array<number> = [1,2,3,4,5,6,7,8,9,10]

console.log(sortedArray.length)
console.log(binarySearch(sortedArray, 7))
console.log(binarySearch(sortedArray, 11))
