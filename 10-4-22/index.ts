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

const test = () => {
  const arr = [-2,1,-3,4,-1,2,1,-5,4];
  maxSumArr(arr)
  console.log(maxSoFar);
}

test();