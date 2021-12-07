const find_letter_case_string_permutations = function(str) {
    let permutations = [str];
    //scan and create an array of indexes where case needs to change
    let indexes = [];
    for (let i=0; i<str.length;i++) {
        let char = str[i];
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            indexes.push(i);
        }
    }
    //iterate over the index and push to base array
    indexes.forEach(element => {
        let temp = [...permutations];
        //for each element of permutations, perform the flip
        temp.forEach(x => {            
            //NOTE: because to replace character in a string, need to convert it to an array first
            let charArray = x.split('');
            let char = charArray[element];
            if (char >= 'a' && char <= 'z')
            {
                charArray[element] = char.toUpperCase();
                permutations.push(charArray.join(''));
            }
            if (char >= 'A' && char <= 'Z')
            {
                charArray[element] = char.toLowerCase();
                permutations.push(charArray.join());
            }
        });
    });
    return permutations;
  };
  
  
  console.log(`String permutations are: ${find_letter_case_string_permutations("ad52")}`)
  console.log(`String permutations are: ${find_letter_case_string_permutations("ab7c")}`)
  