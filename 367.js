/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num === 1) return true

    let left = 1
    let right = Math.floor(num)

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        let square = mid * mid

        if (square === num) {
            return true
        }

        if (square > num) {
            right = mid - 1
        }

        if (square < num) {
            left = mid + 1
        }
    }

    return false
};