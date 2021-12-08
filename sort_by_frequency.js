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
        let parent = (heap.length - 1)/2;
        let current = heap.length - 1;
        while (frequencyMap[heap.parent] < frequencyMap[heap[current]])
        {
            [heap[parent], heap[current]] = [heap[current], heap[parent]];
            current = parent;
            parent = Math.floor((current-1)/2);
        }
    });
    let result = [];
    //reconstruct the string using remove operation
    while (heap != []) {
        let temp = result[0];
        let frequency = frequencyMap[temp];
        let i=0;
        while (i < frequency) {
            i++;
            result+= temp;
        }
        //removal from heap
    }
}

console.assert(sort_by_frequency('Programming'), 'rrggmmPiano');
console.assert(sort_by_frequency('abcbab'), 'bbbaac');