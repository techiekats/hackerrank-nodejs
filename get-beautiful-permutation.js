'use strict';

const f = require('./common-functions')
const permutation = (remaining, desiredCount, acc) => {
    if (remaining === 0) {
        return acc;
    }
    let nextPosition = acc.length + 1;
    let ele1 = nextPosition + desiredCount;
    let ele2 = nextPosition - desiredCount;
    var arrangement = [];
    if(ele1 > 0 && ele1 <= (remaining + acc.length) && !f.any(acc, a=> a==ele1)) {                
        arrangement = permutation(remaining-1, desiredCount, acc.concat(ele1) );
    }
    if (arrangement.length === 0) {
        if(ele2 > 0 && ele2 <= (remaining + acc.length) && !f.any(acc, a=> a==ele2)) {          
            arrangement = permutation(remaining-1, desiredCount, acc.concat(ele2) );
        }   
    }
    return arrangement;
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