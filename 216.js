/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let nums = [1, 2, 3, 4, 5, 6, 7, 8 ,9]
    let results = []

    function backtrack(size, currentSum, current) {
        if (currentSum > n || current.length > k) {
            return
        }

        if (currentSum === n && current.length == k) {
            results.push([...current])
        }

        for (let index = size; index < nums.length; index += 1) {
            currentSum += nums[index]
            current.push(nums[index])

            backtrack(index + 1, currentSum, current)

            currentSum -= nums[index]
            current.pop()
        }
    }

    backtrack(0, 0, [])

    return results
};