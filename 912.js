/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    function merge_sort(collection, left, right) {
        if (right - left <= 1) {
            return;
        }

        const mid = Math.floor((left + right) / 2);

        merge_sort(collection, left, mid);
        merge_sort(collection, mid, right);
        let sorted = merge(collection, left, mid, right)

        sorted.forEach((num, index) => {
            collection[left + index] = num;
        })
    }

    function merge(collection, left, mid, right) {
        const leftCollection = collection.slice(left, mid);
        const rightCollection = collection.slice(mid, right);
        const result = [];

        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < leftCollection.length && rightIndex < rightCollection.length) {
            if (leftCollection[leftIndex] < rightCollection[rightIndex]) {
                result.push(leftCollection[leftIndex]);
                leftIndex += 1
            } else {
                result.push(rightCollection[rightIndex]);
                rightIndex += 1
            }
        }

        while (leftIndex < leftCollection.length) {
            result.push(leftCollection[leftIndex]);
            leftIndex += 1;
        }

        while (rightIndex < rightCollection.length) {
            result.push(rightCollection[rightIndex]);
            rightIndex += 1;
        }

        return result;
    }

    merge_sort(nums, 0, nums.length)

    return nums
};

