const f = require('./common-functions')

console.log (f.head([12,3,45,5]));
console.log(f.tail([2,3,4]));
console.log(f.def(f));
console.log(f.map([3,4,5], (a)=>a*2));
console.log(f.reverse([5,4,35]));
console.log(f.first([4,6,4,2,4], 4));
console.log(f.last([5,4,3, 7, 67],2));