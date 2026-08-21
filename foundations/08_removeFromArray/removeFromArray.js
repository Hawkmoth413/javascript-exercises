const removeFromArray = function(arr) {
    let args = [];
    for(i = 0; i < arguments.length; i++) {
        args[i] = arguments[i];
    }
    args.shift(); //as first argument is arr, we remove it

    for(i = 0; i < args.length; i++) {
        arr = arr.filter(item => item != args[i]);
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
