const fibonacci = function (n) {
    let currentValue = 0;
    let nextValue = 1;

    if (n < 0) return `OOPS`;
    else if (n == 0) return 0;
    else if (n == 1) return 1;
    else if (n == 2) return 1;
    else {
        while (n > 1) {
            let sum = currentValue + nextValue;
            currentValue = nextValue;
            nextValue = sum;
            n--;
        }
    }
    return nextValue;
};

// Do not edit below this line
module.exports = fibonacci;
