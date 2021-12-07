function find_longest_string_with_distinct_characters (s) {
    //aaardgwajjkji //expected 6
    var length = s.length;
    var max_distinct_length = 0;
    for (var i=0; i <= length - 2; i++) { //aabc 0 to 2
        var dict = {}; //{}
        var current_max_length = 0; //0
        for (var j = i; j <= length - 1; j++) { //1 to 3
            if (!dict[s[j]]) {
                dict[s[j]] = true; //{a:true}
                current_max_length += 1; //1
            }
            else {                
                break;
            }
        }
        if (current_max_length > max_distinct_length) {
            max_distinct_length = current_max_length;
        }
    }
    return max_distinct_length;
};

//TODO: currently O(N^2). Convert to O(N). The number of iterations in the inner for loop can be reduced
console.assert(find_longest_string_with_distinct_characters('aabc') == 3);
console.assert(find_longest_string_with_distinct_characters('aaardgwajjkji') == 6);