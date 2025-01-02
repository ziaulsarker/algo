// fn called same that accepts two arays and the returns true if evey value has its corresponding value suared in the sceond array

interface IMap {
  [key: string]: number
}


function same (arr1: number[], arr2: number[]): boolean {
  const counter: IMap = {};

  if(arr1.length != arr2.length) return false;
 
  for (let i = 0; i < arr1.length; i++) {
    if(counter[arr1[i] as unknown as string]) {
      counter[arr1[i]]++
    } else {
       counter[arr1[i]] =  1
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if(counter[Math.sqrt(arr2[i])]) {
      counter[Math.sqrt(arr2[i])]--
    } else {
      return false
    }
  }

  return true
}


console.log(same([1,2,3],[4,1,9]))
console.log(same([1,2,3],[1,9]))
console.log(same([1,2,1],[4,4,1]))