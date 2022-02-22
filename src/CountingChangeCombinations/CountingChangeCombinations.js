const cases = new Map();

const countingChangeCombination = (amount, coins) => {
    let cases = [];

    coins.reduce((acc, curr, index, reducedCoins) => {
        let counter  = acc;
        checkIndividualCoin(amount ,curr, counter, cases)
    }, 0)
};

const multiplyArrys = (arrayToMultiply, amount) => {
    let counter = 0;
    const multipliedArrays = [];
    let lastArray = [];
    do {
        multipliedArrays[counter] = lastArray = arrayToMultiply.map(item => item * (counter + 1));
        counter = counter + 1;
    } while (lastArray.filter(item => item < amount).length);

    return multipliedArrays;
};


const countDivisibleNumbers = (numbers, amount) => {
    let counter = 0;

    for (const number of numbers) {
        const module = amount % number;
        counter = module === 0 ? counter + 1 : counter;
    };

    return counter;
}

const navigateThroughArray = (arrayToNavigate, valueHandler) => {
    let settedValues = [];
    let iteration = 0;

    do {

        settedValues = arrayToNavigate.slice(0, iteration);
        arrayToIterate = arrayToNavigate.slice(iteration)
        
        for (const element of arrayToIterate) {
            valueHandler(element, settedValues, iteration)
        }

        iteration = iteration + 1;
    } while (iteration < arrayToNavigate.length - 1)
}

module.exports = {
    countDivisibleNumbers,
    navigateThroughArray,
    multiplyArrys,
}