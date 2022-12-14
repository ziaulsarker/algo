// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.
 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


const isPalindrome = num => {
   const str = `${num}`;

   let head = 0;
   let tail = str.length - 1;

   while (head < tail) {
    if(str[head] !== str[tail]) {
      return false
    }

    head++;
    tail--
   }

   return true;

}

const isPalindromeNum = num => {
  let copy = num;
  let reverse = 0;

  while(copy > 0) {
    const digit = copy % 10;
    reverse = reverse * 10 + digit
    copy =  ~~(copy / 10);
  }

  return reverse === num;
}
