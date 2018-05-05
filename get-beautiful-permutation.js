'use strict';

const generate = (n,i=0, acc = []) => {
    if (i==n) {
        return acc;
    }
    return generate (n, i+1, acc.concat(i+1));
};
const generateWithSeed = (n,seed) => {
    let seedArray = [];
    for (let i=0; i<n; i++) {
        seedArray = seedArray.concat(seed);
    }
    return seedArray;
}
const permutation = (n, d) => {
    if (d==0){
        return generate(n)
    }
    if (n%2 == 1) {
        return [];
    }
    var result = generateWithSeed(n, -1);
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

exports.permutation = permutation;
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