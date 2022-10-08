// sort 1 to n

// given an array of length n, it contains unique elements sort the elements from 1 to n


const sort1ToN = (arr, size) => {
  for (let i = 0; i < size - 1; i++) {
    if(arr[i] > arr[i + 1]) {
      const temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;

      i = -1;
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