// Array Problems 
// Sum array. write an function that will take an aray of intgets and retuen a sum
var sumArray = function (arr) {
    var total = 0;
    for (var x = 0; x < arr.length; x++) {
        total += arr[x];
    }
    return total;
};
var sumArrayFucntional = function (arr) { return arr.reduce(function (acc, curr) { return acc + curr; }, 0); };
function test() {
    var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var sum = sumArray(number);
    var sumFn = sumArrayFucntional(number);
    console.log("the sum is ".concat(sum));
    console.log("the sumFn is ".concat(sumFn));
}
// sequtial search; write a meathd that till search an array for a given value;
var Seach = /** @class */ (function () {
    function Seach() {
    }
    Seach.sequtial = function (arr, itemToFind) {
        var foundItemIndex;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === itemToFind) {
                return i;
            }
        }
        foundItemIndex = -1;
        return foundItemIndex;
    };
    Seach.binarySearch = function (arr, itemToFind) {
        var start = 0;
        var middle;
        var high = arr.length - 1;
        if (arr[start] === itemToFind)
            return start;
        if (arr[high] === itemToFind)
            return high;
        while (start < high) {
            middle = Math.floor((start + high) / 2);
            if (arr[middle] === itemToFind)
                return middle;
            if (arr[middle] < itemToFind) {
                start = middle + 1;
            }
            if (arr[middle] > itemToFind) {
                high = middle - 1;
            }
        }
        return -1;
    };
    return Seach;
}());
console.log(Seach.binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));
console.log(Seach.binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));
