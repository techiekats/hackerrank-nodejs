const constructSorted = (arr) => {
    return arr.sort();
}

const getFraudulentNotificationCount = (activity, d) => {
    let lastN = constructSorted(activity.slice(0, d));
    let n = activity.length;
    let center = d%2 == 1 ? [d/2-0.5] : [d/2 - 1, d/2];
    let counter = 0;
    for (let i=d; i < n; i++){
        let median = d%2 == 1 ? lastN[center[0]] : (lastN[center[0]] + lastN[center[1]])/ 2;
        //console.log(center)
        //console.log(median);
        //console.log(center);
        //console.log(lastN)
        if (activity[i] >= 2*median) {
            counter++;            
        }
        if (i !== n-1) {
            let next = activity[i];
            let toRemove = activity[i-d];
            let removeIndex = lastN.indexOf(toRemove);
            let addIndex = -1;
            lastN.splice(removeIndex,1);
            if (lastN[0] >= next) {
                addIndex = 0;
            }
            else if (lastN[d-2] >= next) {
                addIndex = d;
            }
            else    {                
                //find first x greater than or equal to next
                let a = 0;
                let b = d-2;
                while (b>=a) {
                    if (b==a) {
                        addIndex = a;
                        break; 
                    }
                    let c = Math.floor((b-a)/2);
                    if (lastN[c] === next) {
                        addIndex = c;
                        break;
                    }
                    else if (lastN[c] < next) {
                        b = c;
                    }
                    else if (lastN[c] > next) {
                        a = c;
                    }
                }
            }
            lastN.splice(addIndex, 0, next);
            lastN.sort();
            //console.log(lastN);
        }
    }
    return counter;
}

exports.getFraudulentNotificationCount = getFraudulentNotificationCount;