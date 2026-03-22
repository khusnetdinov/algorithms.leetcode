/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length === 1) {
        return [nums]
    }

    const result = []

    for (let index = 0; index < nums.length; index += 1) {
        const current = nums[index]
        const rest = [...nums.slice(0, index),...nums.slice(index + 1) ]

        const permsOfRemaining = permute(rest);
        for (const perm of permsOfRemaining) {
            result.push([current, ...perm]);
        }
    }

    return result;
};


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let results = []

    function backtractPermutation(nums, path, used) {
        if (nums.length == path.length) {
            results.push([...path])
        }

        for (let index = 0; index < nums.length; index += 1) {
            if (used[index] === true) {
                continue
            }

            let current = nums[index]
            path.push(current)
            used[index] = true

            backtractPermutation(nums, path, used)

            path.pop()
            used[index] = false
        }
    }

    backtractPermutation(nums, [], Array(nums.length).fill(false))

    return results
};
