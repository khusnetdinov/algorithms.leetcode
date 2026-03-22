/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let results = []

    candidates.sort((a, b) => a - b);

    function backtrack(size, currentSum, current) {
        if (currentSum > target) {
            return
        }

        if (currentSum === target) {
            results.push([...current])
        }

        for (let index = size; index < candidates.length; index += 1) {

            if (index > size && candidates[index] === candidates[index - 1]) {
                continue;
            }

            currentSum += candidates[index]
            current.push(candidates[index])

            backtrack(index + 1, currentSum, current)

            currentSum -= candidates[index]
            current.pop()
        }
    }

    backtrack(0, 0, [])

    return results
};