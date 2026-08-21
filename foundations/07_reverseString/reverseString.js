const reverseString = function(str) {
    str = str.split("");
    let medianIndex = Math.floor(str.length / 2);
    for(i = 0; i < medianIndex; i++) {
        let temp = str[str.length-(i+1)]; //last elem is length-1.
        str[str.length-(i+1)] = str[i];
        str[i] = temp;
    }
    return str.join("");
};

// Do not edit below this line
module.exports = reverseString;
