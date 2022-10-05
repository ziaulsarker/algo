// find the largest sub contiguous subarray 

// given an array or posite and negative integers find a contignous subarray whose sum is maximum;


// recusrion way 

let maxSoFar = Number.MIN_VALUE;
let maxEndingHere = 0;

const maxSumArr = (num) => {

  if (num.length === 0) return;
  
  maxEndingHere = maxEndingHere +  num.shift();

  if(maxEndingHere < 0) {
    maxEndingHere = 0;
  }

  if(maxSoFar < maxEndingHere) {
    maxSoFar = maxEndingHere;
  }

  return maxSumArr(num);
  
}

const minSumArrLoop = (arr) => {
  let maxSoFar = 0;
  let maxEndingHere = 0;
  let size = arr.length;

  for(let i = 0; i < size; i++) {
    maxEndingHere = maxEndingHere + arr[i];

    if(maxEndingHere < 0) {
      maxEndingHere = 0;
    }

    if(maxSoFar < maxEndingHere) {
      maxSoFar = maxEndingHere;
    }

  }

  return maxSoFar
}

const slideingWindowApproach = nums => {
  let maxSoFar = nums[0];
  let currSum = 0;

  for(let i = 0; i < nums.length; i++) {
    if(currSum < 0) {
      currSum = 0;
    }

    currSum += nums[i];
    maxSoFar = Math.max(maxSoFar, currSum);
  }

  return maxSoFar;
}

const test = () => {
  const arr = [-2,-1];

  console.log(  minSumArrLoop(arr));
}

test();