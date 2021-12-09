//NOTE: key intuition- if the two subsets have equal sum, the sum of each subset is total/2
//If all numbers are positive, this can be reduced to knapsack wherein we have to fill elements with capacity = sum of subset

function find_equal_sum_subset (arr) {
    let sum = 0;
    arr.forEach(x=> sum+=x);
    if (sum%2 == 1) {
        return false;
    }
    const result = solveKnapSack(arr, arr, sum/2, 0);
    return result > 0;
}
function solveKnapSack(profits, weights, capacity, currentIndex) {
    if (currentIndex >= profits.length || capacity <=0) {
        return 0;
    }
    let profits1 = 0;
    if (weights[currentIndex] <= capacity) {
        profits1 = profits[currentIndex] + solveKnapSack(profits, weights, capacity - weights[currentIndex], currentIndex+1);
    }
    let profits2 = solveKnapSack(profits, weights, capacity, currentIndex+1);
    return Math.max(profits1, profits2);
}

console.assert(find_equal_sum_subset([1,2,3,4]) == true);
console.assert(find_equal_sum_subset([1,1,3,4,7]) == true);
console.assert(find_equal_sum_subset([2,3,4,6]) == false);