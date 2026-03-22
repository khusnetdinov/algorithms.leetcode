/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let results = []

    function backtrack(size, currentSum, current) {
        if (currentSum > target) {
            return
        }

        if (currentSum === target) {
            results.push([...current])
        }

        for (let index = size; index < candidates.length; index += 1) {
            current.push(candidates[index])
            currentSum += candidates[index]

            backtrack(index, currentSum, current)

            current.pop()
            currentSum -= candidates[index]
        }
    }

    backtrack(0, 0, [])

    return results
};