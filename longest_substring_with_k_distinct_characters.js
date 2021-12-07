function find_longest_string_with_k_distinct_characters (str,k) {
    var length = str.length;    
    var max_distinct_length = 0;
    var s = '';
    for (var i=0; i <= length - 2; i++) {
        var dict = {};
        var current_max_length = 0;
        for (var j = i; j <= length - 1; j++) {
            if (!!dict[str[j]]) {
                current_max_length+=1;
            }
            else {
                if (Object.keys(dict).length < k) {
                    dict[str[j]] =true;
                    current_max_length +=1;
                }
                else {
                    break;
                }
            }
        }
        if (current_max_length > max_distinct_length) {
            s = str.substring(i, i+current_max_length);
            max_distinct_length = current_max_length;
        }
    }
    console.log(s);
    return max_distinct_length;
};
//TODO: currently O(N^2). Convert to O(N). The number of iterations in the inner for loop can be reduced
console.assert(find_longest_string_with_k_distinct_characters('aabc',3) == 4);
console.assert(find_longest_string_with_k_distinct_characters('aaardgwajjkji',4) == 6);
console.assert(find_longest_string_with_k_distinct_characters('araaci',2) == 4);
console.assert(find_longest_string_with_k_distinct_characters('araaci',1) == 2);
console.assert(find_longest_string_with_k_distinct_characters('cbbebi',3) == 5);
console.assert(find_longest_string_with_k_distinct_characters('cbbebi',10) == 6);
console.assert(find_longest_string_with_k_distinct_characters('abcbbc',2) == 5);
console.assert(find_longest_string_with_k_distinct_characters('abcac',2) == 3);