//  INDEX ARR

// given an array fo zise N. containing elements from 0 to N-1. All values from 0 to n-1 are present in the array and if they are not present than a -1 is to take its place arrage values of the array so that value i is stored at arr[i];


const indexArr = (arr) => {
  const temp = []; // create temp array to hold stored values
  for (let i = 0; i < arr.length; i++) { // itterate over arr;
    const hasItem = arr.indexOf(i) !== -1; // check to see if index val is in array

    // if it is then set the value of temp[i] to i or -1 if it does not exist
    if(hasItem) {
      temp[i] = i;
    } else {
      temp[i] = -1;
    }
  }

  return temp;
}


let aTest = [];

const indexArrRecussion = (arr, size = arr.length - 1) => {
  if (size < 0) return; //

  const hasItem = arr.indexOf(size) !== -1; 

  if (hasItem) {
    aTest.unshift(size)
  } else {
    aTest.unshift(-1)
  }



  return indexArrRecussion(arr, size - 1);

}

const test = () => {
  const arr = [18,-1,6,1,9,3,2,7,4,-1];
  indexArrRecussion(arr);
  console.log(aTest)
}

test();