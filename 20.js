/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(string) {
    let stack = []
    const pairs = {
        "(": ")",
        "{": "}",
        "[": "]"
    }

    for (let bracket of string) {
        if (bracket in pairs) {
            stack.push(bracket)
        } else {
            let lastOpenBracket = stack.pop()

            if (pairs[lastOpenBracket] === bracket) {
                continue
            } else {
                return false
            }
        }
    }

    if (stack.length === 0) {
        return true
    } else {
        return false
    }
};