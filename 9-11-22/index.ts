// write a mether thsat will return sum of all arrays
const sumArrry = (arr: Array<number>): number => {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result;
}


type Reducer = (acc: number, curr: number, idx?: number, arr?: number[]) => number;
const testArrays = {one: [1, 2, 3]};
const reducer: Reducer = ((acc: number, curr: number, idx?: number, arr?: number[]): number => acc + curr);
const _sumArr = (arr: number[], reducer: Reducer): number => arr.reduce(reducer, 0);
const result = _sumArr(testArrays.one, reducer);