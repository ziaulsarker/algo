// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  
// The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

// Function description

// Complete the  function in the editor below.

// diagonalDifference takes the following parameter:

// int arr[n][m]: an array of integers
// Return

// int: the absolute diagonal difference
// Input Format

// The first line contains a single integer, , the number of rows and columns in the square matrix .
// Each of the next  lines describes a row, , and consists of  space-separated integers .

// Constraints

// Output Format

// Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

// Sample Input

// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output

// 15
// Explanation

// The primary diagonal is:

// 11
//    5
//      -12
// Sum across the primary diagonal: 11 + 5 - 12 = 4

// The secondary diagonal is:

//      4
//    5
// 10
// Sum across the secondary diagonal: 4 + 5 + 10 = 19
// Difference: |4 - 19| = 15

// Note: |x| is the absolute value of x


const diagonalDifference = arr => {
  const matrixCross = arr.shift();
  let left = 0;
  let right = 0;

  for(let i = 0; i < matrixCross; i++) {
    right += arr[i][i];
  }

  let dy = 0;
  let dx = matrixCross - 1;

  while(dy < matrixCross) {
    left += arr[dy][dx];
    dx--;
    dy++;
  }

  return Math.abs(right - left);
}


console.log(diagonalDifference([3, [11,2,4], [4,5,6], [10,8,-12]]));