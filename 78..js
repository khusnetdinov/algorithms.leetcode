/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let results = []

    function backtrack(size, current) {
        results.push([...current])

        for (let index = size; index < nums.length; index += 1) {
            current.push(nums[index])
            backtrack(index + 1, current)
            current.pop()
        }
    }

    backtrack(0, [])

    return results
};