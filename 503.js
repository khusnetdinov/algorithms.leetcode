/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let stack = []
    let result = new Array(nums.length).fill(-1);

    for (let index = 0; index < 2 * nums.length - 1; index += 1) {
        let currentIndex = index % nums.length
        let currentValue = nums[currentIndex]

        while (stack.length && currentValue > nums[stack[stack.length - 1]]) {
            let previousIndex = stack.pop()
            result[previousIndex] = currentValue
        }

        if (index < nums.length) {
            stack.push(currentIndex)
        }
    }

    return result
};