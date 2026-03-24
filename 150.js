/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []

    for (let token of tokens) {
        if (isNaN(token)) {
            let result = 0
            let right = stack.pop()   // First pop is the right operand
            let left = stack.pop()    // Second pop is the left operand

            switch (token) {
                case '+':
                    result = left + right
                    break;
                case '-':
                    result = left - right  // Now correct: left - right
                    break;
                case '*':
                    result = left * right
                    break;
                case '/':
                    result = Math.trunc(left / right)  // Need integer division
                    break;
            }

            stack.push(result)
        } else {
            stack.push(parseInt(token, 10))
        }
    }

    return stack.pop()
};