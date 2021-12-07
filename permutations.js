const find_permutations = function(nums) {
    result = [];
    result.push([]);
    nums.forEach (x=> {
        let current = [];
        result.forEach(arr => {
            //NOTE: starting from zero going all the way upto end of the array
            for (let i=0; i<=arr.length; i++) {
                //splice updates the array, hence create a clone first
                let temp = [...arr];
                //splice (index, number of entries (will be zero in our case), the item to be inserted)
                //Do not confuse with slice
                temp.splice(i, 0, x);
                current.push(temp);
            }
        });
        //NOTE: push adds elements to the end of the array
        //concat merges two arrays, and returns a "new" array
        result = result.concat(current);
    });
    return result;
  };
  
  console.log(`Here are all the permutations: ${find_permutations([1, 3, 5])}`)
  result.forEach((permutation) => {
    console.log(permutation);
  });
  