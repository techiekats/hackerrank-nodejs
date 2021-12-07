const search_ceiling_of_a_number = function(arr, key) {
    let n = arr.length;
    if (key > arr[n-1])
        return -1;
    let start = 0;
    let end = n - 1;

    //NOTE: <= and not <
    while (start <= end) {
        //NOTE: do not forget start+ for the second half of the array. For the first half, start will be 0  
        let center = Math.floor(start + (end-start) / 2);       
        if (key < arr[center]) {
            end = center - 1;
        }
        else if (key > arr[center]) {
            start = center + 1;
        }
        else {
            return center; 
        }
      }    
    return start; //by definition, this is the next biggest
  };
  
  
  console.log(search_ceiling_of_a_number([4, 6, 10], 6))
  console.log(search_ceiling_of_a_number([1, 3, 8, 10, 15], 12))
  console.log(search_ceiling_of_a_number([4, 6, 10], 17))
  console.log(search_ceiling_of_a_number([4, 6, 10], -1))
  