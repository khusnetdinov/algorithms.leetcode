/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let toRemoveIndexes = new Set()
    let stack = []

    for (let index = 0; index < s.length; index += 1) {
        if (s[index] === '(') {
            stack.push(index)
        }

        if (s[index] === ')') {
            if (stack.length === 0) {
                toRemoveIndexes.add(index)
            } else {
                stack.pop()
            }
        }
    }

    for (let index of stack) {
        toRemoveIndexes.add(index)
    }

    let result = []

    for (let index = 0; index < s.length; index += 1) {
        if (toRemoveIndexes.has(index)) {
            continue
        }

        result.push(s[index])
    }

    return result.join('')
};