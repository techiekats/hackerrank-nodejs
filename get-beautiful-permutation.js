'use strict';

const permutation = (n, d) => {
    if (d==0){
        return Array.from(new Array(n), (val, index)=> index+1);
    }
    if (n%2 == 1) {
        return [];
    }
    var result = new Array(n);
    result.fill(-1);
    for (let i=1; i <= n; i++) {
        let index = i-1;
        if (result[index] === -1) {
            let p = (i + d) % (n+1);
            if (p==0){
                return [];
            }
            result[index] = p;
            if(result[p-1] !== -1) {
                return [];
            }
            result[p-1] = i;
        }
    }
    return result;
}

var test1 = permutation(2,1,[]);
console.log(test1);
var test2 = permutation(3,0);
console.log(test2);
var test3 = permutation(3,2);
console.log(test3);
var test4 = permutation(4, 2);
console.log(test4);
var test5 = permutation(6, 3);
console.log(test5);
var test6 = permutation(100,2);
console.log(test6);
var test7 = permutation(6,1);
console.log(test7);
var test8 = permutation(6,5);
console.log(test8);
var test9 = permutation(100000, 1, []);
console.log(test9.length);
var test10 = permutation(2516, 701);
console.log(test10);//expected []
var test11 = permutation(4988, 1789);
console.log(test11); //expected []
var test12= permutation(9278, 2381);
console.log(test12); //expected []
var test13 = permutation(3590, 1007);
console.log(test13); //expected []
var test14 = permutation(3220, 1430);
console.log(test14); //expected []
//var test15 = permutation(4584, 1146);
//const f = require('./common-functions')
//f.writeToFile('result.csv', test15, (a)=>{});
var test16 = permutation(3822, 3355);
console.log(test16);
/*
INPUT: 
3
2 1
3 0
3 2

OUTPUT:
2 1
1 2 3
-1
*/