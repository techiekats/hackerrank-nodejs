const constructDict = (useCaseBound) => {
    let dict = new Array(useCaseBound + 1); // e.g. 0 .. 200
    for (let i=0; i<=useCaseBound;i++) {
        dict[i] = 0;
    }
    return dict;
};
const findMedian = (frequency, center, e) => {
    let sum=0;
    for (let i=0; i<=e; i++) {
        sum+= frequency[i];
        if (sum>= center) {
            return i;
        }
        if (center-sum == 0.5) {
            return i+0.5;
        }
    }
}

const activityNotifications = (activity, d) => {
    let expenditureBound = 200;//as per use case
    let lastN = constructDict(expenditureBound); 
    for (let i=0; i<d; i++) {
        lastN[activity[i]] = lastN[activity[i]] + 1;
    }
    let n = activity.length;
    let center = d%2 == 0 ? (d+1) / 2 : (d/2 + 0.5);
    let counter = 0;
    for (let i=d; i < n; i++){
        let median = findMedian(lastN, center, expenditureBound);
        //console.log(median)
        if (activity[i] >= 2*median) {
            counter++;            
        }
        if (i !== n-1) {
            let next = activity[i];
            let toRemove = activity[i-d];
            lastN[toRemove] = lastN[toRemove] -1;
            lastN[next] = lastN[next] + 1;
        }
    }
    return counter;
}

exports.activityNotifications = activityNotifications;