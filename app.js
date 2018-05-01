const f = require('./common-functions')
const p = require('./get-beautiful-permutation')
const pt = require('./pascal-triangle')

var triangle = pt.pascalTriangle(0, 3, [[]]);
pt.printTriangle(triangle);
/*var test1 = p.permutation(2,1,[]);
console.log(test1);
var test2 = p.permutation(3,0,[]);
console.log(test2);
var test3 = p.permutation(3,2,[]);
console.log(test3);
var test4 = p.permutation(4, 2, []);
console.log(test4);
var test5 = p.permutation(6, 3, []);
console.log(test5);
var test6 = p.permutation(100,2, []);
console.log(test6);*/
//var test7 = p.permutation(Number.MAX_SAFE_INTEGER, 1, []);
//console.log(test7);
/*console.log (f.head([12,3,45,5]));
console.log(f.tail([2,3,4]));
console.log(f.def(f));
console.log(f.map([3,4,5], (a)=>a*2));
console.log(f.reverse([5,4,35]));
console.log(f.first([4,6,4,2,4], 4));
console.log(f.last([5,4,3, 7, 67],2));
console.log(f.length([1,4,3,6]));
console.log(f.filter([2,3, 67, 4], (a)=> a<= 10));
console.log(f.reject([2,3, 67, 4], (a)=> a<= 10));
console.log(f.reduce([1,4,5,7], (a,b) => a+b, 0));
console.log(f.partial((a,b)=>(b+a)*3, 5)(2));
console.log(f.pluck('firstname', {lastname:'shah', firstname:'K'}))*/
