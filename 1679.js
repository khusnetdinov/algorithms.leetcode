/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums.sort((a, b) => a - b);

    let left = 0
    let right = nums.length - 1
    let operations = 0

    while (left < right) {
        if (nums[left] + nums[right] === k) {
            operations += 1
            left += 1
            right -= 1
        }

        if (nums[left] + nums[right] > k) {
            right -= 1
        }

        if (nums[left] + nums[right] < k) {
            left +=1
        }

    }

    return operations
};