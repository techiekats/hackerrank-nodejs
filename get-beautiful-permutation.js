'use strict';

const f = require('./common-functions')
const permutation = (remaining, desiredCount, acc) => {
    if (remaining === 0) {
        return acc;
    }
    let nextPosition = acc.length + 1;
    let n = remaining + acc.length;
    let ele1 = (nextPosition + desiredCount) % (n+1);
    let ele2 = (nextPosition - desiredCount) % (n+1);    
    let nextEle = -1;
    if (ele2 < ele1){
        let temp = ele1;
        ele1 = ele2;
        ele2 = temp;
    }
    if (ele1 > 0 && !f.any(acc, a=> a===ele1)) {
        nextEle = ele1;
    }
    else if (ele2 > 0 && !f.any(acc, a=> a === ele2)) {
        nextEle = ele2;
    }
    if(nextEle > 0) {                
        return permutation(remaining-1, desiredCount, acc.concat(nextEle) );
    }
    return [];
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