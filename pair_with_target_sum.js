function pair_with_targetsum (arr, sum) {
    var start = 0;
    var end = arr.length - 1;
    while (start < end) {
        var currentSum = arr[start] + arr[end];
        if (currentSum == sum) {
            return [arr[start], arr[end]];
        }
        if (currentSum < sum) {
            start++;
        }
        else {
            end--;
        }
    }
    return [];
}

console.log(pair_with_targetsum([1,2,3],3));
console.log(pair_with_targetsum([1,2,3,4,6], 6));
console.log(pair_with_targetsum([2,5,9,11], 11));