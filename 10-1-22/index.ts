//  write a meathod which will search and array for some given value;
// SEQUENTIAL SEARCHING //

// function sequtialSearch(arr: number[], valToSearch: number): number;
// function sequtialSearch(arr: str[], valToSearch: str): str;

function seqSearch(arr: unknown[], valToSearch: unknown): unknown {
  let returnVal = -1;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === valToSearch) returnVal = i;
  }

  return  returnVal;
}

const numArr = [1,2,3,4,5,6,7,8,9,10];
const strArr = ["1", "ziaul", "amena", "2", "3", "4", "5", "6", "7", "8"]

console.log(seqSearch(numArr, 0));
console.log(seqSearch(numArr, 10));
console.log(seqSearch(numArr, 11));
console.log(seqSearch(numArr, 1));

console.log(seqSearch(strArr, "ziaul"));
console.log(seqSearch(strArr, "0"));
console.log(seqSearch(strArr, "amena"));
console.log(seqSearch(strArr, "5"));
console.log(seqSearch(strArr, "11"));