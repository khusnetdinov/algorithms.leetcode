/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let nextMap = {};
    let stack = []

    for (let current of nums2) {
        while (stack.length && stack[stack.length - 1] < current) {
            nextMap[stack.pop()] = current
        }

        stack.push(current)
    }

    for (let last of stack) {
        nextMap[last] = -1
    }

    return nums1.map(num => nextMap[num]);
};