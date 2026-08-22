const sumAll = function(num1, num2) {
    if(typeof(num1) != "number" || typeof(num2) != "number") {
        return `ERROR`;
    } 
    else if(num1 <= 0 || num2 <= 0) {
        return `ERROR`;
    }
    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2);

    let res = 0;
    for(i = start; i <= end; i++) {
        res += i;
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
