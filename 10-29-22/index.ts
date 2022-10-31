// write a function that accepts two arrays, the function should return true if the corresponding value is squared in the second array



const same = (arrOne, arrTwo) => {

  if(arrOne.length !== arrTwo.length) return false;

  const freqOne = new Map();
  const freqTwo = new Map();


  for(let i = 0; i < arrOne.length; i++) {
    if(freqOne.has(arrOne[i])) {
      freqOne.set(arrOne[i], freqOne.get(arrOne[i] ) + 1);
    } else {
      freqOne.set(arrOne[i], 1);
    }
  }

  for(let i = 0; i < arrTwo.length; i++) {
    if(freqTwo.has(arrTwo[i])) {
      freqTwo.set(arrTwo[i], freqTwo.get(arrTwo[i]) + 1);
    } else {
      freqTwo.set(arrTwo[i], 1);
    }
  }



  for(let i = 0; i < arrOne.length; i++) {
    const s = arrOne[i] ** 2;

    if(!freqTwo.has(s)){
      return false;
    } 

    if( freqTwo.get(s) !== freqOne.get(arrOne[i])){
      return false;
    }

  }
  return true;
}
console.log(same([1,2,3], [4,1,9]));
console.log(same([1,2,3], [1,9]));
console.log(same([1,2,1], [4,4,1]));




