class Heap {
    constructor (compareFn) {
        this.heap = [];
        this.compareFn = compareFn;
    }
    peek () {
        return this.heap[0];
    }
    insert (num) {
        this.heap.push(num);
        let current = this.heap.length - 1;
        let parent = Math.floor((current-1)/2);
        //for insert, compare current with parent. For remove, do reverse
        while (this.compareFn(this.heap[parent], this.heap[current]) < 0) {
            [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]];
            current = parent;
            parent = Math.floor((current-1)/2);
        }
    }
    remove () {                
        let n = this.heap.length;
        [this.heap[0], this.heap[n-1]] = [this.heap[n-1], this.heap[0]];        
        let max = this.heap.pop();
        let current = 0;
        while (!!this.heap[current*2+1]) {
          //NOTE: left child will ALWAYS exist. Each level of the heap is filled from left to right
          //NOTE: do not worry about the out of bounds exception the way you would in C#
          let left = this.heap[current * 2 + 1];
          let right = this.heap[current * 2 + 2];
          if (!right) {
            if (this.compareFn(this.heap[current], left) < 0) {
              [this.heap[current], this.heap[current * 2 + 1]] = [this.heap[current * 2 + 1], this.heap[current]];
              current = current * 2 + 1;
            }
            else {
              break;
            }
          }
          //NOTE: do not forget the case when left & right child are equal but greater than current
          else if (this.compareFn(left, right) >= 0 && this.compareFn(this.heap[current], left) < 0) {            
            [this.heap[current], this.heap[current * 2 + 1]] = [this.heap[current * 2 + 1], this.heap[current]];
            current = current * 2 + 1;
          }
          else if (this.compareFn(right, left) >= 0 &&  this.compareFn(this.heap[current], right) < 0){
            [this.heap[current], this.heap[current * 2 + 2]] = [this.heap[current * 2 + 2], this.heap[current]];
            current = current * 2 + 2;
          }
          else break;
        }
        return max;
    }
    length () {
      return this.heap.length;
    }
}

// var h = new Heap((a,b)=> a-b);
// [4,1,2,2].forEach(x=> h.insert(x));
// for (let i=0; i<4; i++) {
//   console.log(h.remove());
// }
// [25,57,48,37,12,92,86,33].forEach(x=> h.insert(x));
// for (let i=0; i<8; i++) {
//   console.log(h.remove());
// }

// [4,5,3].forEach(x=>h.insert(x));
// for (let i=0; i<3; i++) {
//   console.log(h.remove());
//}
function find_median_number_of_stream (arr) {
  let minHeap = new Heap((a,b) => b-a);
  let maxHeap = new Heap((a,b) => a-b);
  arr.forEach(element => {
    if (element <= maxHeap.peek() || !maxHeap.peek()) {
      maxHeap.insert(element);
      if (maxHeap.length() - minHeap.length() > 1) {
        let temp = maxHeap.remove();
        minHeap.insert(temp);
      }    
    }
    else {
      minHeap.insert(element);
      if (minHeap.length() - maxHeap.length() > 1) {
        let temp = minHeap.remove();
        maxHeap.insert(temp);
      }
    }
  });
  //if both are equal in length
  if (minHeap.length() == maxHeap.length()) {
    return (minHeap.peek() + maxHeap.peek()) / 2;
  }
  if (minHeap.length() > maxHeap.length()){
    return minHeap.peek();
  }  
  return maxHeap.peek();
}

console.log(find_median_number_of_stream([25,57,48,37,12,92,86,33]))
console.log(find_median_number_of_stream([3,1]))
console.log(find_median_number_of_stream([3,1,5]))
console.log(find_median_number_of_stream([3,1,5,4]))