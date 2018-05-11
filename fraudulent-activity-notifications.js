const constructSorted = (arr) => {
    return arr.sort();
}

const activityNotifications = (activity, d) => {
    let lastN = constructSorted(activity.slice(0, d));
    let n = activity.length;
    let center = d%2 == 1 ? [d/2-0.5] : [d/2 - 1, d/2];
    let counter = 0;
    for (let i=d; i < n; i++){
        let median = d%2 == 1 ? lastN[center[0]] : (lastN[center[0]] + lastN[center[1]])/ 2;
        
        if (activity[i] >= 2*median) {
            counter++;            
        }
        if (i !== n-1) {
            let next = activity[i];
            let toRemove = activity[i-d];
            let removeIndex = lastN.indexOf(toRemove);
            let addIndex = -1;
            lastN.splice(removeIndex,1);
            //TODO: binary search for index
            lastN.splice(addIndex, 0, next);
            console.log(addIndex)
            console.log(lastN)
        }
    }
    return counter;
}

exports.activityNotifications = activityNotifications;