function find_complement_of_a_base_10 (num) {
    //find the msb
    let temp = num;
    let xor = 1;
    while (temp > 0) {
        temp = temp >> 1;
        xor = xor << 1;
    }
    //the number to be xor-ed against is the power number minus 1
    xor -=1;
    return num ^ xor;
}
console.assert (find_complement_of_a_base_10(8) == 7);
console.assert(find_complement_of_a_base_10(10) == 8);
