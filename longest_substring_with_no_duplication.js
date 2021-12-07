function find_longest_string_with_no_duplication (str) {
    var result = 0;
    var length = str.length;
    var charIndexMap = {};
    var windowStart = 0;

    for (var windowEnd = 0; windowEnd < length; windowEnd++) {
        var rightChar = str[windowEnd];
        if (rightChar in charIndexMap) {
            windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
        }
        charIndexMap[rightChar] = windowEnd;
        result = Math.max(result, windowEnd - windowStart + 1);
    }
    return result;
}

console.assert(find_longest_string_with_no_duplication('') == 0, '');
console.assert(find_longest_string_with_no_duplication('aaa') == 1, 'aaa');
console.assert(find_longest_string_with_no_duplication('khyati') == 6,'khyati');
console.assert(find_longest_string_with_no_duplication('aabccd') == 3,'aabccd');
console.assert(find_longest_string_with_no_duplication('aabcafcd') == 4,'aabcafcd');