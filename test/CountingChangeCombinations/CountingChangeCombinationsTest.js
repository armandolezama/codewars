const assert = require('chai').assert;

const { 
    countDivisibleNumbers,
    navigateThroughArray,
} = require('../../src/CountingChangeCombinations/CountingChangeCombinations.js')

suite('Counting Check Combination', () => {
    const testDetail = {
        amount: 10,
        count: 5,
        coins: [5, 3, 2],
    }
    
    test('Multiply array until bigger than amount', () => {
        const multiplyArrya = (coins, amount) => {};
        assert.strictEqual(multiplyArrya(testDetail.coins, amount))
    });

    test('Navigate through array with custome function', () => {

        const mockedArray = [];

        const mockHandler = mockedArray =>  (coin, settedCoins, iteration) => {
            mockedArray[iteration] = mockedArray[iteration] ? [...mockedArray[iteration], coin] : [coin]
        };

        const orderedArrayCombinations = 

        [
            [ 0, 1, 2, 3, 4],
            [ 1, 2, 3, 4],
            [ 2, 3, 4],
            [ 3, 4],
        ]

        const customeCoins = [0,1,2,3,4]

        navigateThroughArray(customeCoins, mockHandler(mockedArray))

        assert.deepEqual(mockedArray, orderedArrayCombinations)
    })
    test('Count divisible numbers', () => {
        assert.strictEqual(countDivisibleNumbers(testDetail.coins, testDetail.amount), 2)
    })
})

