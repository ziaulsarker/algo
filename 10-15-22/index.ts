// given a sortedArray, maximum minimum form.

// input [1,2,3,4,5,6,7]
// output [7,1,6,2,5,3,4]

const minMaxArr = arr => {
  const tempArr = [];
  let start = 0;
  let end = arr.length - 1;
  let middle;

  if(arr.length % 2 === 1) {
    middle = Math.floor(arr.length / 2);
  }

  while(start < end) {
    tempArr.push(arr[end]);
    tempArr.push(arr[start]);
    start++;
    end--;
  }

  if(middle) {
    tempArr.push(arr[middle]);
  }
  return tempArr;
}


const test = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 9];
  console.log(minMaxArr(arr))
}

test();