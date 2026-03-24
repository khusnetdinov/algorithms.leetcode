/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let stack = []
    let optionalStack = []

    for (let index = 0; index < s.length; index +=1) {
        if (s[index] === '*') {
            optionalStack.push(index)
        } else if (s[index] === '(') {
            stack.push(index)
        } else {
            if (stack.length > 0) {
                stack.pop()
            } else if (optionalStack.length > 0) {
                optionalStack.pop()
            } else {
                return false
            }
        }
    }

    while (stack.length > 0 && optionalStack.length > 0) {
        if (stack[stack.length - 1] < optionalStack[optionalStack.length - 1]) {
            stack.pop()
            optionalStack.pop()
        } else {
            return false
        }
    }

    return stack.length === 0
};