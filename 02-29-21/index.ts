//  given two strings write a func to determin if the second string is an anagram of the first

export function validAnagrams(input1: string, input2: string): boolean  {

  if(input1.length !== input2.length) {
   return false;
  }

  const frekOne = new Map();
  const freakTwo = new Map();
  
  for(let i = 0; i < input1.length; i++) {
   const iVal = frekOne.has(input1[i]) ? frekOne.get(input1[i]) + 1 : 1;
   frekOne.set(input1[i], iVal)
  }

  for(let i = 0; i < input2.length; i++) {
   const iVal = freakTwo.has(input2[i]) ? freakTwo.get(input2[i]) + 1 : 1;
   freakTwo.set(input2[i], iVal)
  }

  for(const [key, val] of frekOne) {
   if( freakTwo.get(key) !== val ) {
    return false
   }
  }

  return true;
  
}

console.log(validAnagrams("", ""));
console.log(validAnagrams("aaz", "zza"));
console.log(validAnagrams("anagram", "nagaram"));
console.log(validAnagrams("rat", "car"));
console.log(validAnagrams("awesome", "awesom"));
console.log(validAnagrams("qwerty", "qeywrt"));
console.log(validAnagrams("texttwisttime", "timetwisttext"));