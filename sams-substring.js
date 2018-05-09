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
    for (let i=0; i<n; i++) {
        let integer = parseInt(s.charAt(i));
        sum = sum + sumToFallingPower (integer, n, multiplier, modulo, moduloDictionary);
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
    while (power>=0) {
        sum = sum + (moduloDictionary[power] * a);
        if (sum >= modulo) {
            sum %= modulo;
        }
        power--;
    }
    return (sum * m) % modulo;
}

exports.getSamsSubstring = getSamsSubstring;