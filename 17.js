/**
 * @param {string} digits
 * @return {string[]}
 */
const BUTTONS = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz"
}

var letterCombinations = function(digits) {
    let results = [];

    function combinate(current, keys) {
        if (keys.length === 0) {
            results.push(current)
        } else {
            const [key, ...rest] = keys;

            for (const char of BUTTONS[key].split('')) {
                combinate(current + char, rest)
            }
        }
    }

    combinate("", digits)

    return results;
};