const f = require('./common-functions')

var permutation = (remaining, desiredCount, acc) => {
    if (remaining === 0) {
        return acc;
    }
    let nextPosition = acc.length;
    let ele1 = nextPosition + desiredCount;
    let ele2 = nextPosition - desiredCount;
    var arrangement = [];
    if(ele1 > 0 && ele1 < (remaining + acc.length) && !f.any(acc, a=> a==ele1)) {
        arrangement = permutation(remaining--, desiredCount, acc.concat(ele1) );
    }
    if (arrangement == []) {
        if(ele2 > 0 && ele2 < (remaining + acc.length) && !f.any(acc, a=> a==ele2)) {
            arrangement = permutation(remaining--, desiredCount, acc.concat(ele2) );
        }   
    }
    return arrangement;
}