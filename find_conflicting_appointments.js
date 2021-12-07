function find_conflicting_appointments (arr) {
    //in-place sorting
    arr.sort((a,b) => a[0] - b[0]);
    for (let i=0; i < arr.length - 2; i++) {
        if (arr[i+1][0] <= arr[i][1]) {
            return false;
        }
    }
    return true;
}

console.assert(find_conflicting_appointments([[1,4], [2,5], [7,9]]) == false)
console.assert(find_conflicting_appointments([[6,7], [2,4], [8,12]]) == true)
console.assert(find_conflicting_appointments([[4,5], [2,3], [3,6]]) == false)