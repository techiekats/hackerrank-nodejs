function triplets_with_small_sum (arr, sum) { //[-1, 4, 2, 1, 3],5)
    let result = 0; //
    let sorted_array = arr.sort(); //-1,1,2,3,4
    for (let i=0; i < sorted_array.length - 2; i++) { //0...3, i = 1
        let start = i + 1; //2
        let end = sorted_array.length - 1; //4
        let required = sum - sorted_array[i]; //4
        while (start < end) { //true
            let currentSum = sorted_array[start] + sorted_array[end]; //3
            if (currentSum >= required) {
                end--;                
            }
            else {
                //brilliant insight. if a+b < c. a + x < c if a < b. Because array is sorted, we can use this
                result += (end - start);
                start ++;
            }                                   
        }
    }
    return result;
}

console.assert(triplets_with_small_sum([1,2,3,4],7) == 1)
console.assert(triplets_with_small_sum([1,6,4,7,3],5) == 0)
console.assert(triplets_with_small_sum([1,6,4,7,3,2,0],5) == 2)
console.assert(triplets_with_small_sum([-1, 0, 2, 3],3) == 2)
console.assert(triplets_with_small_sum([-1, 4, 2, 1, 3],5) == 4)