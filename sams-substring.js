'use strict';

const getSamsSubstring = (s) => {
    let n = s.length;
    let sum = 0;
    let modulo = Math.pow(10, 9) + 7;
    let multiplier = 1;
    let moduloDictionary = {};
    for (let i=0; i<=n; i++) {
        if (i <= 9) {
            moduloDictionary[i] = Math.pow(10, i);
        }
        else {
            //(a*b) mod c = ((a mod c) * (b mod c)) mod c
            moduloDictionary[i] = (moduloDictionary[i-1] * 10) % modulo;
        }
    }
    let aggregateDictionary = {}
    for (let i=0; i<=n; i++) {
        if (i==0) {
            aggregateDictionary[i] = moduloDictionary[i];
        }
        else {
            aggregateDictionary[i] = (aggregateDictionary[i-1] + moduloDictionary[i]) % modulo;
        }
    }
    for (let i=0; i<n; i++) {
        let integer = parseInt(s.charAt(i));
        sum = sum + sumToFallingPower (integer, n, multiplier, modulo, aggregateDictionary);
        multiplier++;
        if (sum >= modulo) {
            sum %= modulo;
        }
    }
    return sum;
}

const sumToFallingPower = (a, n, m, modulo, moduloDictionary) => {
    let power = n - m;
    let sum = 0;
    return (moduloDictionary[power] * a * m) % modulo;
}

console.log(getSamsSubstring('12'));
console.log(getSamsSubstring('123'));
console.log(getSamsSubstring('1234'));
console.log(getSamsSubstring('12345'));
console.log(getSamsSubstring('123456'));

const fs = require('fs')
var tc6 = fs.readFileSync('./testcases/sams-substring-tc6.txt', 'utf-8');
console.log(getSamsSubstring(tc6));
