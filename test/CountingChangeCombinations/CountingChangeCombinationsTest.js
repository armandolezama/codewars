const assert = require('chai').assert;

const { 
    countDivisibleNumbers,
    navigateThroughArray,
    multiplyArrys,
} = require('../../src/CountingChangeCombinations/CountingChangeCombinations.js')

suite('Counting Check Combination', () => {
    const testDetail = {
        amount: 10,
        count: 5,
        coins: [5, 3, 2],
    }
    
    test('Multiply array until bigger than amount', () => {
        
        const expectedMultipliedArrays = [
            [5, 3, 2],
            [10, 6, 4],
            [15, 9, 6],
            [20, 12, 8],
            [25, 15, 10],
        ]

        const currentArray = multiplyArrys(testDetail.coins, testDetail.amount);
        console.log(expectedMultipliedArrays);
        console.log(currentArray);
        assert.deepEqual(currentArray, expectedMultipliedArrays);
    });

    test('Navigate through array with custome function', () => {

        const divisibleNumbers = [];

        const substractedNumbers = [];

        const mockHandler = divisibleNumbers =>  (coin, settedCoins, iteration) => {
            divisibleNumbers[iteration] = divisibleNumbers[iteration] ? [...divisibleNumbers[iteration], coin] : [coin]
            substractedNumbers[iteration] = [...settedCoins]
        };

        const orderedArrayCombinations = 

        [
            [ 0, 1, 2, 3, 4],
            [ 1, 2, 3, 4],
            [ 2, 3, 4],
            [ 3, 4],
        ]

        const substractedOrderedNumbers = [
            [],
            [0],
            [0, 1],
            [0, 1, 2],
        ]

        const customeCoins = [0,1,2,3,4]

        navigateThroughArray(customeCoins, mockHandler(divisibleNumbers))

        assert.deepEqual(divisibleNumbers, orderedArrayCombinations);
        assert.deepEqual(substractedNumbers, substractedOrderedNumbers);
    })
    test('Count divisible numbers', () => {
        assert.strictEqual(countDivisibleNumbers(testDetail.coins, testDetail.amount), 2)
    })
})

