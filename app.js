const f = require('./common-functions')
const p = require('./get-beautiful-permutation')
const pt = require('./pascal-triangle')
const ss = require('./sams-substring')
const fn = require('./fraudulent-activity-notifications')
const fs = require('fs')

console.log(fn.activityNotifications([1,2,4,3,40],4));//1
console.log(fn.activityNotifications([2,3,4,2,3,6,8,4,5], 5));//2
console.log(fn.activityNotifications([1,2,2,4,3], 4));//0
console.log(fn.activityNotifications([1,2,4,8,16],1));//4

/*console.log(ss.getSamsSubstring('12'));
console.log(ss.getSamsSubstring('123'));
console.log(ss.getSamsSubstring('1234'));
console.log(ss.getSamsSubstring('12345'));
console.log(ss.getSamsSubstring('123456'));
var tc6 = fs.readFileSync('/Users/HSHAH/Documents/Code/hackerrank-nodejs/testcases/sams-substring-tc6.txt', 'utf-8');
console.log(ss.getSamsSubstring(tc6));*/
/* PASCALS Triangles
var triangle = pt.pascalTriangle(0, 2, [[]]);
pt.printTriangle(triangle);*/
/*var test1 = p.permutation(2,1,[]);
console.log(test1);
var test2 = p.permutation(3,0);
console.log(test2);
var test3 = p.permutation(3,2);
console.log(test3);
var test4 = p.permutation(4, 2);
console.log(test4);
var test5 = p.permutation(6, 3);
console.log(test5);
var test6 = p.permutation(100,2);
console.log(test6);
var test7 = p.permutation(6,1);
console.log(test7);
var test8 = p.permutation(6,5);
console.log(test8);
var test9 = p.permutation(100000, 1, []);
console.log(test9.length);
var test10 = p.permutation(2516, 701);
console.log(test10);//expected []
var test11 = p.permutation(4988, 1789);
console.log(test11); //expected []
var test12= p.permutation(9278, 2381);
console.log(test12); //expected []
var test13 = p.permutation(3590, 1007);
console.log(test13); //expected []
var test14 = p.permutation(3220, 1430);
console.log(test14); //expected []
var test15 = p.permutation(4584, 1146);
f.writeToFile('result.csv', test15, (a)=>{});
var test16 = p.permutation(3822, 3355);
console.log(test16);*/
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
