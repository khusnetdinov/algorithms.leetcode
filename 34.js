/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    function findLeft(nums, target) {
        let left = 0
        let right = nums.length -1
        let result = -1

        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            let current = nums[mid]

            if (current === target) {
                result = mid
                right = mid - 1
            }

            if (current < target) {
                left = mid + 1
            }

            if (current > target) {
                right = mid - 1
            }
        }

        return result
    }

    function findRight(nums, target) {
        let left = 0
        let right = nums.length - 1
        let result = -1

        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            let current = nums[mid]

            if (current === target) {
                result = mid
                left = mid + 1
            }

            if (current < target) {
                left = mid + 1
            }

            if (current > target) {
                right = mid - 1
            }
        }

        return result
    }


    return [findLeft(nums, target), findRight(nums, target)]
};