// Array Wave Form

// given an array arrage its elements in wave form such that odd elements are lesser than its surrounding even elements;

const swap = (arr, index, target) => {
  [arr[index], arr[target]] = [arr[target], arr[index]]
}

const waveForm = (arr) => {
  const size = arr.length;

  for (let i = 1; i < size; i += 2) {
    if( (i - 1) > 0 && arr[i] > arr[i - 1]) {
      swap(arr, i, i - 1);
    }

    if ( (i + 1) < size && arr[i] > arr[i + 1]) {
      swap(arr, i, i + 1);
    }
  }

  return arr;
}


const swap2 = (arr: Array<number>) => {
    // sort the arrays 
    // then swap even and odd indexes to

    // sort
    arr.sort((a, b) => a - b);

    // itterate over sorted arrays
    for(let i = 0; i < arr.length - 1; i+=2) {
      swap(arr, i, i + 1);
    }

    return arr;
}




const test = () => {
  const numbers = [8,1,2,3,4,5,6,4,2];
  console.log( swap2(numbers) );

}

test();