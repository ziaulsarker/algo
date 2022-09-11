//  given two strings write a func to determin if the second string is an anagram of the first
function validAnagrams(input1, input2) {
    if (input1.length !== input2.length) {
        return false;
    }
    var frekOne = new Map();
    var freakTwo = new Map();
    for (var i = 0; i < input1.length; i++) {
        var iVal = frekOne.has(input1[i]) ? frekOne.get(input1[i]) + 1 : 1;
        frekOne.set(input1[i], iVal);
    }
    for (var i = 0; i < input2.length; i++) {
        var iVal = freakTwo.has(input2[i]) ? freakTwo.get(input2[i]) + 1 : 1;
        freakTwo.set(input2[i], iVal);
    }
    for (var _i = 0, frekOne_1 = frekOne; _i < frekOne_1.length; _i++) {
        var _a = frekOne_1[_i], key = _a[0], val = _a[1];
        if (freakTwo.get(key) !== val) {
            return false;
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
