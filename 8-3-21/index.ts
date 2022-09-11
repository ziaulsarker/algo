// count unique values. implement a function which accepts a sorted array and counts the unique values.


// one way 
function countUniqueVal(arr: Array<number>): number {
 const tracker:any = {};

 for(let i = 0; i < arr.length; i++){
  tracker[arr[i]] = arr[i];
 }
 
 return Object.keys(tracker).length;
} // O(n)

function countUniqueVal_2(arr: Array<number>): number {
 let counter = 0;


 if(!arr.length) {
  return counter;
 }

 for(let i = 1; i < arr.length; i++){
  if(arr[counter] !== arr[i]) {
   counter += 1;
   arr[counter] = arr[i];
  } 
 }


 
 return counter+1;
} // O(n)


console.log(countUniqueVal([1,1,1,1,1,2])) // 2
console.log(countUniqueVal([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueVal([])) // 0
console.log(countUniqueVal([-2, -1, -1, 0, 1])) // 4

console.log("func 2")

console.log(countUniqueVal_2([1,1,1,1,1,2])) // 2
console.log(countUniqueVal_2([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueVal_2([])) // 0
console.log(countUniqueVal_2([-2, -1, -1, 0, 1])) // 4
