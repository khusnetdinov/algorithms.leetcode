/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let results = []

    function backtrack(size, current) {
        if (current.length > k) {
            return
        }

        if (current.length === k) {
            results.push([...current])
        }

        for (let index = size; index < n + 1; index += 1) {
            current.push(index)
            backtrack(index + 1, current)
            current.pop()
        }
    }

    backtrack(1, [])

    return results
};