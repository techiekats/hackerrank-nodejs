/*
In this problem, you are given an integer N, and a permutation, P of the integers from 1 to N, denoted as (a_1, a_2, ..., a_N). You want to rearrange the elements of the permutation into increasing order, repeatedly making the following operation:
Select a sub-portion of the permutation, (a_i, ..., a_j), and reverse its order.
Your goal is to compute the minimum number of such operations required to return the permutation to increasing order.
Signature
int minOperations(int[] arr)
Input
Array arr is a permutation of all integers from 1 to N, N is between 1 and 8
Output
An integer denoting the minimum number of operations required to arrange the permutation in increasing order
Example
If N = 3, and P = (3, 1, 2), we can do the following operations:

    Select (1, 2) and reverse it: P = (3, 2, 1).
    Select (3, 2, 1) and reverse it: P = (1, 2, 3).

output = 2
*/

function minOperations(arr) {
    let queue = [[0, arr]];
    let visited = [];
    while (queue.length > 0) {
        let curr = queue.shift();
        visited.push(curr[1]);
        if (isAsc(curr[1])) {
            return curr[0];
        }
        for (let i=0; i<curr[1].length; i++) {
            for (let j=i+1; j<curr[1].length; j++) {                
                let temp = [...curr[1]];
                //NOTE: to reverse subsection of an array. for splice, second parameter is number of characters
                //NOTE: Do not forget the destructuring operation
                //NOTE: slice and splice syntax is so non obvious. most time consuming part of the code was here
                temp.splice(i,j-i+1, ...temp.slice(i, j+1).reverse());
                let isVisited = false;
                visited.forEach(element => {
                    if (areArraysEqual(element, temp)) {
                        isVisited = true;
                    }
                });
                if (!isVisited) {
                    queue.push([curr[0]+1, temp]);
                }
            }
        }
    }
}
function isAsc (arr) {
    for (let i=0; i<arr.length -1; i++) {
        if (arr[i] > arr[i+1]) {
            return false;
        }
    }
    return true;
}
function areArraysEqual (left, right) {
    if (left.length != right.length) {
        return false;
    }
    for (let i=0; i< left.length; i++) {
        if (left[i]!= right[i]) {
            return false;
        }
    }
    return true;
}
console.log(minOperations([3,1,2]));
//console.assert(minOperations([3,1,2]) === 2);