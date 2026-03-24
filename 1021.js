/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let result = []
    let openBrackets = []

    for (let bracket of s) {
        if (bracket === '(') {
            if (openBrackets.length > 0) {
                result.push(bracket)
            }
            openBrackets.push(bracket)
        } else {
            openBrackets.pop()

            if (openBrackets.length > 0) {
                result.push(bracket)
            }
        }
    }

    return result.join('')
};