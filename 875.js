/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1
    let right = Math.max(...piles)

    while (left < right) {
        let mid = Math.floor((left + right) / 2)

        const totalHours = piles.reduce((sum, pile) =>
            sum + Math.ceil(pile / mid), 0
        );

        if (totalHours <= h) {
            right = mid
        } else {
            left = mid + 1
        }
    }

    return left
};