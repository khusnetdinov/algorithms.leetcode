/**
 * @param {number} n
 * @return {string[]}
 */

const OPEN = '('
const CLOSE = ')'

var generateParenthesis = function(n) {
    let results = []

    function backtrack(current, openCount, closeCount) {
        if (current.length === 2 * n) {
            results.push(current)
            return
        }

        if (openCount < n) {
            backtrack(current + OPEN, openCount + 1, closeCount)
        }

        if (closeCount < openCount) {
            backtrack(current + CLOSE, openCount, closeCount + 1)
        }
    }

    backtrack('', 0, 0)

    return results
};