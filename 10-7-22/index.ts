// sort 1 to n

// given an array of length n, it contains unique elements sort the elements from 1 to n


const sort1ToN = (arr, size) => {
  for (let i = 0; i < size; i++) {
    for (let j = i; j < arr.length; j++) {
      if(arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

const test = () => {
  const arr = [8,8,6,9,9,3,2,7,4,9,9,9,10];
  const size = arr.length;

  console.log(sort1ToN(arr, size));

}

test();