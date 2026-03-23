/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let left = Math.max(...weights);
    let right = weights.reduce((a, b) => a + b, 0);

    function check(mid) {
        let ws = 0;
        let count = 1;

        for (const w of weights) {
            ws += w;
            if (ws > mid) {
                ws = w;
                count += 1;
            }
        }

        return count <= days;
    }

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (check(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};