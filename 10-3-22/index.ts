// Rotating an arry K number of times;
// given an array you need to rotate its elements K number of times, ex -> [1,2,3,4,5] roate by 2 postions to [3,4,5,1,2];

const reverseAnarray =  <T>(arr: Array<T>, start: number, end: number): Array<T> =>  {

  for(let i = start, j = end; i < j; i++, j--) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr;
}


const rotate = (a: any[], n: number, k: number) => {
  reverseAnarray(a, 0, k - 1);

  reverseAnarray(a, k, n - 1);

  reverseAnarray(a, 0, n - 1);
  
}

const test = async () => {
  let numbers = [ 1,2,3,4,5];
  rotate(numbers, numbers.length, 2);
  console.log(numbers)
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
  let numbers = [10,20,30,40,50,60,70];
  rotateRight(numbers, 3);
}

testRight();
