/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let result = [...prices]
    let stack = []

    for (let index = 0; index < prices.length; index += 1) {
        while (stack.length && prices[index] <= prices[stack[stack.length - 1]]) {
            result[stack.pop()] -= prices[index]
        }
        stack.push(index)
    }

    return result
};