/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
    const sums = [];

    function traverse(node, level) {
        if (!node) return;

        if (sums[level] === undefined) {
            sums[level] = 0;
        }

        sums[level] += node.val;

        traverse(node.left, level + 1);
        traverse(node.right, level + 1);
    }

    traverse(root, 0);

    let maxSum = -Infinity;
    let maxLevel = 0;

    for (let i = 0; i < sums.length; i++) {
        if (sums[i] > maxSum) {
            maxSum = sums[i];
            maxLevel = i;
        }
    }

    return maxLevel + 1;
};