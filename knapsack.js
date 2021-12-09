var timeComplexity = 0;
//NOTE: assumption is that currentIndex will be called with 0 
//TOP DOWN APPROACH
function solveKnapsackBruteForce (profits, weights, capacity, currentIndex) {
    timeComplexity++;
    //base condition
    if (capacity <= 0 || currentIndex >= profits.length) {
        return 0;
    }    
    let profit1 = 0;
    if (weights[currentIndex] <= capacity)
    {
        profit1 = profits[currentIndex] + solveKnapsackBruteForce(profits, weights, capacity - weights[currentIndex], currentIndex+1);
    }
    const profit2 = solveKnapsackBruteForce(profits, weights, capacity, currentIndex+1);
    return Math.max(profit1, profit2);
}
//rows represent index in knapsack problem, columns represent capacities
let globalMemo = [];
//TOP DOWN APPROACH
function solveKnapsackMemoization (profits, weights, capacity, currentIndex) {
    timeComplexity++;
    //base condition
    if (capacity <= 0 || currentIndex >= profits.length) {
        return 0;
    }
    if (!!globalMemo[currentIndex])
    {
        if (!!globalMemo[currentIndex][capacity]) {
            timeComplexity--; //because retrieved from pre-computed result
            return globalMemo[currentIndex][capacity];
        }
    }
    else  {
        globalMemo.push(new Array(capacity+1));
    }
    let profit1 = 0;
    if (weights[currentIndex] <= capacity)
    {
        profit1 = profits[currentIndex] + solveKnapsackMemoization(profits, weights, capacity - weights[currentIndex], currentIndex+1);
    }
    const profit2 = solveKnapsackMemoization(profits, weights, capacity, currentIndex+1);
    const profitForCapacity = Math.max(profit1, profit2);
   
    globalMemo[currentIndex][capacity] = profitForCapacity;
    return profitForCapacity;
}
function solveKnapsackBottomUp (profits, weights, capacity) {

}

var profits = [1, 6, 10, 16];
var weights = [1, 2, 3, 5];

timeComplexity = 0;
console.log(`Total knapsack profit Memoization: ---> ${solveKnapsackMemoization(profits, weights, 7,0)}`);
console.log(`Time Complexity with Memoization:${timeComplexity}`);

timeComplexity = 0;
console.log(`Total knapsack profit Memoization: ---> ${solveKnapsackMemoization(profits, weights, 6,0)}`);
console.log(`Time Complexity with Memoization:${timeComplexity}`);

timeComplexity = 0;
console.log(`Total knapsack profit Brute Force: ---> ${solveKnapsackBruteForce(profits, weights, 7,0)}`);
console.log(`Time Complexity with Brute Force:${timeComplexity}`);

timeComplexity = 0;
console.log(`Total knapsack profit Brute Force: ---> ${solveKnapsackBruteForce(profits, weights, 6,0)}`);
console.log(`Time Complexity with Brute Force:${timeComplexity}`);