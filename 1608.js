/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;

    for (let i = 0; i <= n; i++) {
        let index = 0;
        while (index < n && nums[index] < i) {
            index++;
        }

        if (n - index === i) {
            return i;
        }
    }
    return -1;
};