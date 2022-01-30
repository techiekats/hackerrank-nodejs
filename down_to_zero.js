//https://www.hackerrank.com/challenges/down-to-zero-ii

function downToZero(n) {
    let queue = []; 
    queue.push(n);
    let nextQueue = [];
    let generation = 0;
    let queued = {};
    queued[n] = true;
    while (queue.length > 0) {
        let t = queue.shift();
        
        if (t == 0) {
            return generation-1;
        }
        let f = findMaxFactor (t);   
        if (queued[f]!= true && f!= 1 && f!= t) {            
            nextQueue.push(f);  
            queued[f] = true;          
        }
        if (queued[t-1] != true) {
            nextQueue.push(t-1);
            queued[t-1] = true;
        }
        if (queue.length == 0) {
            //console.log(nextQueue);
            queue = nextQueue;
            nextQueue = [];
            generation++;
        }
    }
}

function findMaxFactor (n) {
    if (n%2 == 0 && n>2) {
        return n/2;
    }
    let x = Math.floor(Math.sqrt(n));
    let max = Number.MIN_SAFE_INTEGER;
    for (let i=x; i >= 2; i--){
        if (n%i == 0) {
            max = Math.max(max, Math.max(i, n/i));
        }
    }
    return max == Number.MIN_SAFE_INTEGER ? n : max;
}
console.log(downToZero(8242));
//console.log(downToZero(5207));
// console.log(downToZero(1038));
// console.log(downToZero(8415));
// console.log(downToZero(3313));
// console.log(downToZero(6884));
console.assert(downToZero(4) == 3);
console.assert(downToZero(8242)==9,8242);
console.assert(downToZero(5207)==8,5207);
console.assert(downToZero(2652)==7,2652);
console.assert(downToZero(4457)==8,4457);
console.assert(downToZero(1036)==7,1036);
console.assert(downToZero(9283)==8,9283);
console.assert(downToZero(8533)==7,8533);
console.assert(downToZero(1038)==8,1038);
console.assert(downToZero(5244)==8,5244);
console.assert(downToZero(8415)==7,8415);
console.assert(downToZero(3313)==7,3313);
console.assert(downToZero(6884)==9,6884);
console.assert(downToZero(2002)==7,2002);
console.assert(downToZero(6240)==6,6240);
console.assert(downToZero(7276)==8,7276);
console.assert(downToZero(7104)==6,7104);
console.assert(downToZero(5789)==10,5789);
console.assert(downToZero(6119)==8,6119);
console.assert(downToZero(6838)==8,6838);
console.assert(downToZero(5221)==8,5221);
console.assert(downToZero(6177)==8,6177);
console.assert(downToZero(4549)==9,4549);
console.assert(downToZero(5129)==9,5129);
console.assert(downToZero(7125)==7,7125);
console.assert(downToZero(9958)==8,9958);
console.assert(downToZero(3096)==6,3096);
console.assert(downToZero(2436)==6,2436);
console.assert(downToZero(6683)==8,6683);
console.assert(downToZero(5828)==8,5828);
console.assert(downToZero(6844)==8,6844);
console.assert(downToZero(473)==8,473);
console.assert(downToZero(8335)==9,8335);
console.assert(downToZero(8663)==9,8663);
console.assert(downToZero(1120)==6,1120);
console.assert(downToZero(7170)==8,7170);
console.assert(downToZero(5811)==8,5811);
console.assert(downToZero(9774)==8,9774);
console.assert(downToZero(9091)==9,9091);
console.assert(downToZero(2084)==8,2084);
console.assert(downToZero(9880)==7,9880);
