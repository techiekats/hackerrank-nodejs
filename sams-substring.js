'use strict';

const getSamsSubstring = (s) => {
    let n = s.length;
    let sum = 0;
    let modulo = Math.pow(10, 9) + 7;
    let multiplier = 1;
    for (let i=0; i<n; i++) {
        let integer = parseInt(s.charAt(i));
        sum = sum + sumToFallingPower (integer, n, multiplier, modulo);
        multiplier++;
        if (sum >= modulo) {
            sum %= modulo;
        }
    }
    return sum;
}

const sumToFallingPower = (a, n, m, modulo) => {
    //TODO: Use modulo
    let power = n - m;
    let sum = 0;
    while (power>=0) {
        sum = sum + (Math.pow(10, power) * a);
        power--;
    }
    return sum * m;
}

exports.getSamsSubstring = getSamsSubstring;