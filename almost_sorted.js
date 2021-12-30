//https://www.hackerrank.com/challenges/almost-sorted/problem

function almost_sort (arr) {
    let n = arr.length;
    let left = 0;
    let right = n-1;
    for (; left < n-1; left++) {
        if (arr[left] > arr[left+1]) {
            break;
        }
    }
    if (left == n-1) {
        console.log('yes');
        return;
    }
    while (right > left) {
        if (arr[right] < arr[right-1]) {
            break;
        }
        right--;
    }
    //check if swap or reverse
    let opsCount = 0;
    //because not 0 based
    let result = [left+1, right+1];
    while (left < right) {
        if (arr[left] > arr[right]) {
            opsCount++;
            [arr[left], arr[right]] = [arr[right], arr[left]];
        }
        else {
            break;
        }
        left++;
        right--;
    }
    //check if sorted
    for (let i=0; i<n-1; i++) {
        if (arr[i] > arr[i+1]) {
            console.log('no');
            return;
        }
    }
    console.log('yes');    
    console.log(`${opsCount == 1? 'swap': 'reverse'} ${result[0]} ${result[1]}`);
}

almost_sort([1,2,3]); // yes

almost_sort([2,3,5,4]); // yes swap 3 4

almost_sort([4,6,2,3,8,1,0]); // no

almost_sort([3,1,2]); // no

almost_sort([4,2]); // yes swap 1 2

almost_sort([1,2,6,5,4,3]); // yes reverse 3 6

almost_sort([1,2,10,9,7,8,6,5,4,3]); // no