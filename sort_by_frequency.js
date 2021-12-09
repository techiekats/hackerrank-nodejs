function sort_by_frequency (str) {
    //dictionary containing the frequencies
    let frequencyMap = {};
    str.split('').forEach(x => {
        if (frequencyMap[x]) {
            frequencyMap[x] = frequencyMap[x] + 1;
        }
        else {
            frequencyMap[x] = 1;
        }
    });
    //construct max heap
    heap = [];
    Object.keys(frequencyMap).forEach(x=>{
        heap.push(x);        
        let current = heap.length - 1;
        //NOTE: if using heap.length, subtract by 2 instead of 1
        //Do not forget Math.floor
        let parent = Math.floor((current - 1)/2);
        while (frequencyMap[heap[parent]] < frequencyMap[heap[current]])
        {
            [heap[parent], heap[current]] = [heap[current], heap[parent]];
            current = parent;
            parent = Math.floor((current-1)/2);
        }
    });
    let result = [];
    //reconstruct the string using remove operation
    //NOTE: heap != [] would result in an infinite loop. check for length for empty array
    while (heap.length > 0) {
        let temp = heap[0];
        let frequency = frequencyMap[temp];
        let i=0;
        while (i < frequency) {
            i++;
            result+= temp;
        }
        //removal from heap
        [heap[0], heap[heap.length - 1]] = [heap[heap.length - 1], heap[0]];
        //NOTE: clear element right after
        heap.pop();
        let current = 0;
        //NOTE: while a left child exists
        while (!!heap[current*2+1]) {
            let leftIndex = 2 * current + 1;
            let rightIndex = 2 * current + 2;
            if (!heap[rightIndex]) {
                if (frequencyMap[heap[leftIndex]] > frequencyMap[heap[current]]) {
                    [heap[leftIndex], heap[current]] = [heap[current], heap[leftIndex]];
                }
                else 
                    break;
            }
            //NOTE: current element is less than left, and left is the greater child
            else if (frequencyMap[heap[current]] < frequencyMap[heap[leftIndex]] && frequencyMap[heap[leftIndex]] >= frequencyMap[heap[rightIndex]]) {
                [heap[current], heap[leftIndex]] = [heap[leftIndex], heap[current]];
                current = leftIndex;                
            }
            else if (frequencyMap[heap[current]] < frequencyMap[heap[rightIndex]] && frequencyMap[heap[leftIndex]] <= frequencyMap[heap[rightIndex]]) {
                [heap[current], heap[rightIndex]] = [heap[rightIndex], heap[current]];
                current = rightIndex;   
            }
            else {
                break;
            }
        }        
    }
    return result;
}
console.log(sort_by_frequency('Programming'));
console.log(sort_by_frequency('abcbab'));
console.assert(sort_by_frequency('Programming') == 'rrggmmPiano');
console.assert(sort_by_frequency('abcbab') == 'bbbaac');