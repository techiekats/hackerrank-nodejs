function triplet_sum_to_zero (arr) {
    var sorted_array = arr.sort();
    var result = [];

    for (let i=0; i<sorted_array.length-2; i++) {
        let sum = 0 - sorted_array[i];
        let start = i+1; 
        let end = sorted_array.length - 1;        
        while (start < end) {
            if ((sorted_array[start] + sorted_array[end]) == sum) {
                result.push(sorted_array[i]);
                result.push(sorted_array[start]);
                result.push(sorted_array[end]);
                return result;
            }
            if ((sorted_array[start] + sorted_array[end]) > sum) {
                end--;
            }
            else {
                start++;
            }
        }
    }
    return result;
}

console.log(triplet_sum_to_zero([1,2,-3]));
console.log(triplet_sum_to_zero([-3,1,2]));
console.log(triplet_sum_to_zero([-7,-3,0,2,4,5]));
console.log(triplet_sum_to_zero([-7,-3,1,2,4,6]));
console.log(triplet_sum_to_zero([-5, 2, -1, -2, 3]));
console.log(triplet_sum_to_zero([-3, 0, 1, 2, -1, 1, -2]));