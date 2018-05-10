const constructSorted = (arr) => {
    return arr.sort();
}

const getFraudulentNotificationCount = (activity, d) => {
    let lastN = constructSorted(activity.slice(0, d));
    let n = activity.length;
    let center = d%2 == 1 ? [lastN[d/2]] : [lastN[d/2 - 1], lastN[d/2]];
    console.log(center);
    let counter = 0;
    for (let i=d; i < n; i++){
        let median = d%2 == 1 ? lastN[center[0]] : (lastN[center[0]] + lastN[center[1]])/ 2;
        if (activity[i] >= 2*median) {
            counter++;            
        }
        if (i !== n-1) {
            let next = lastN[i+1];
            let toRemove = lastN[i-d];
            let removeIndex = -1;
            let addIndex = -1;
            while(lastN[++removeIndex] !== toRemove) {}
            
        }
    }
    return counter;
}

exports.getFraudulentNotificationCount = getFraudulentNotificationCount;