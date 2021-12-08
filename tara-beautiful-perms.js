const constructMap = (arr) => {
    let frequencies = {};
    let tempFrequency =  {};
    let n = arr.length;
    for (let i=0; i<n; i++) {
        let x = arr[i];
        //console.log(tempFrequency[x])
        if (!tempFrequency[x]) {
            tempFrequency[x] = 1;
        }
        else {
            tempFrequency[x] = 2; //max 2 as per problem stmt
            frequencies[x] = 2;
        }
    }
    //console.log(frequencies)
    return frequencies;
}
const factorialMod = (n, modulo) => {
    let factorial = 1;
    for (let x = n; x > 1; x--) {
        //(a * b) mod c = ( (a mod c) * (b mod c) ) mod c
        factorial = (factorial * (x >= modulo ? x % modulo : x)) % modulo;
    }
    return factorial;
}
const recPermutations = (arr, frequencies, modulo, previous) => {
    if (Object.keys(frequencies).length === 0) {
        return factorialMod(arr.length, modulo);
    }
    let result = 0;
    let n = arr.length;
    for (let i=0; i < n; i++) {
        let x = arr[i];
        if (x !== previous) {
            let tempArray = Array.from(arr);  
            let tempFrequency = {};
            Object.assign(tempFrequency, frequencies);
            if (tempFrequency[x] == 1) {
                delete tempFrequency[x];
            }
            else if (tempFrequency[x] == 2) {
                tempFrequency[x] = 1;
            }
            result += recPermutations(tempArray.splice(i, 1), tempFrequency, modulo, x);
            result %= modulo;
        }

    }
    return result;
}
const beautifulPermutations = (arr) =>
{
    let frequencies = constructMap(arr);
    let modulo = Math.pow(10, 9) + 7;    
    let result = recPermutations (arr, frequencies, modulo, null);
    return result;
}

console.log(beautifulPermutations([1,2,3,4]));