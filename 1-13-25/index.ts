// 169. Majority Element
// Easy
// Topics
// Companies
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2






var majorityElement = function(nums) {
  let majority;
  let max = 0;
  let frequency = {}

  for(let i = 0; i < nums.length; i++) {
      frequency[nums[i]] = frequency[nums[i]] ? ++frequency[nums[i]]  : 1
  }

  for(let key in frequency) {
      if(frequency[key] > max) {
          max = frequency[key];
          majority = key
      }
  }


  return majority


};