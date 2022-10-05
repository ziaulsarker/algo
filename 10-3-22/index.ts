// Rotating an arry K number of times;
// given an array you need to rotate its elements K number of times, ex -> [1,2,3,4,5] roate by 2 postions to [3,4,5,1,2];

const reverseAnarray =  <T>(arr: Array<T>, start: number, end: number) =>  {

  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }

}


const rotate = (a: any[], k: number): any => {
  k = k % a.length;
  reverseAnarray(a, 0, k-1);
  reverseAnarray(a, k, a.length - 1);
  reverseAnarray(a, 0, a.length - 1);
}

const test = async () => {
  let numbers = [1,2,3,4,5,6,7,8,9,10];
  rotate(numbers, 4)
  console.log({numbers})
}

test();





//  leet code problem 189 rotate arr to right by K steps

const rotateRight = <T>(a: Array<T>, k: number): Array<T> => {
  let temp: any = [];
  if (k <= 0) return a;
  let lastVal = a.pop();
  temp = a;
  temp.unshift(lastVal);
  return rotateRight(temp, k - 1);
}

const testRight = async () => {
  let numbers = [1,2,3,4,5,6];
  rotateRight(numbers, 2);
  console.log(numbers);
}

 //testRight();
