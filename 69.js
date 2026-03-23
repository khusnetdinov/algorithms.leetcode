/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(num) {
    if (num < 2) return num

    let left = 0
    let right = Math.floor(num)

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let square = mid * mid

        if (square === num) {
            return mid
        }

        if (square > num) {
            right = mid - 1
        }

        if (square < num) {
            left = mid + 1
        }
    }

    return right
};