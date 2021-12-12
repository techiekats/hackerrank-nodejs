//NOTE: example of cyclic sort
function find_missing_number (arr) {
    let n = arr.length;    //3
    for (let i=0; i<n; i++) { // i = 0 ..2
        let expected_position = arr[i] %n; //0
        if (arr[i] != expected_position) { //true
            let temp = arr[i]; 
            arr[i] = arr[expected_position]; 
            arr[expected_position] = temp; //[3,1,2]
        }
    }    
    //now validate
    for (let i=0; i<n; i++) {
        if (arr[i] != i) {
            return i;
        }
    }
    return n+1;
}

console.assert(find_missing_number([1,2,3]) == 0)
console.assert(find_missing_number([2,3,0]) == 1)