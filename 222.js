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
var countNodes = function(root) {
    function counter(node, count) {
        if (!node) return 0

        return counter(node.left, count + 1) + counter(node.right, count + 1) + 1
    }

    return counter(root, 0)
};