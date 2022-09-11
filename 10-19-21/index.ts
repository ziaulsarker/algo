// https://leetcode.com/problems/two-sum/



function twoSum(nums: number[], target: number): number[] {
    const result: Array<number> = [];

    if(nums.length < 2) {
      return result;
    }

    for (let i = 0; i < nums.length; i++) {
      for(let j = i+1; j < nums.length; j++) {
        if(nums[i] + nums[j] === target) {
          result.push(i, j);
        }
      }
    }

    return result;
};

console.log(twoSum([2,7,11,15], 9)) // [0,1]
console.log(twoSum([3,2,4], 6)) // [1,2]
console.log(twoSum([2,7,11,15], 9)) // [0,1]
console.log(twoSum([3,2,3], 6)) // [0,1]