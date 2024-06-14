const sumAll = function (start, end) {
    return (start >= 0 && end >= 0 && typeof start === 'number' && typeof end === 'number') ?
        ((start + end - 1) / 2 * (start + end)) :
        'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
