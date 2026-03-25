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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    const sums = [];
    const counts = [];

    function traverse(node, level) {
        if (!node) return;

        if (sums[level] === undefined) {
            sums[level] = 0;
            counts[level] = 0;
        }

        sums[level] += node.val;
        counts[level]++;

        traverse(node.left, level + 1);
        traverse(node.right, level + 1);
    }

    traverse(root, 0);

    const result = [];
    for (let i = 0; i < sums.length; i++) {
        result.push(sums[i] / counts[i]);
    }

    return result;
};