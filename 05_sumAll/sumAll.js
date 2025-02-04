const sumAll = function(firstNum,lastNum) {
    let finalSum = 0;
    let iteration = lastNum - firstNum;
    if (firstNum > 0 && lastNum > 0 && firstNum - Math.trunc(firstNum) === 0 && lastNum - Math.trunc(lastNum) === 0 && typeof firstNum === 'number' && typeof lastNum === 'number') {
        for (let i = firstNum; i <= lastNum; i++) { 
            finalSum += i;
        }
        return finalSum 
} else {
    return "ERROR"
}
};

// Do not edit below this line
module.exports = sumAll;
