function squaring_sorted_array (arr) {
    var result = Array(arr.length).fill(0);
    var start = 0;
    var end = arr.length - 1;
    for (var i=0; i < arr.length; i++) {
        if (Math.abs(arr[start]) > Math.abs(arr[end])) {
            result[arr.length - i - 1] = arr[start] * arr[start];
            start ++;            
        }
        else {
            result[arr.length - i - 1] = arr[end] * arr[end];
            end --;
        }
    }
    return result;
}

console.log(squaring_sorted_array([-3,-2,1,2,4,5]));
console.log(squaring_sorted_array([-3]));
console.log(squaring_sorted_array([1,2,3]));