// smallest postive missing number

// given an unsorted arra, find the smallest positve number missin in the array;

const smallestPositiveMissingNumber = arr => {
  let temp;
  for (let i = 0; i < arr.length - 1; i++) {
    while (arr[i] !== i + 1 && arr[i] > 0 && arr[i] < arr.length) {
      temp = arr[i];
      arr[i] = arr[temp - 1];
      arr[temp - 1] = temp; 
    }
  }

  console.log(arr);

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] !== i + 1) {
      return i + 1
    }
  }



  return -1;
}

const smallestPositiveMissingNumberHashTableEx = arr => {
  const hashTable = new Set();

  for (let i = 0; i < arr.length; i++) {
    hashTable.add(arr[i]);
  }

  for(let j = 1; j <= arr.length; j++) {
    if(hashTable.has(j) === false) {
      return j
    }
  }

  return -1
}


const test = () => {
  const arr = [8,5,6,1,3, 14,9,11,2,7,4,10]  //3
  const arr2 = [1,2,0]  // 3

  console.log(smallestPositiveMissingNumberHashTableEx(arr2));
  console.log(smallestPositiveMissingNumber(arr2));
}

test();