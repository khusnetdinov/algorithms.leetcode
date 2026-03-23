/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let left = 0
    let right = letters.length

    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        let current = letters[mid]

        if (current <= target) {
            left = mid + 1
        } else {
            right = mid
        }
    }

    return left === letters.length ? letters[0] : letters[left];
};