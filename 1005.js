/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length && k > 0; i++) {
        if (nums[i] < 0) {
            nums[i] = -nums[i];
            k--;
        }
    }

    if (k % 2 === 1) {
        let minVal = Math.min(...nums);
        let minIndex = nums.indexOf(minVal);
        nums[minIndex] = -nums[minIndex];
    }

    return nums.reduce((sum, num) => sum + num, 0);
};