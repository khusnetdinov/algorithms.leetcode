/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    if (!root) return 0;

    return countPathsFromNode(root, targetSum) +
        pathSum(root.left, targetSum) +
        pathSum(root.right, targetSum);
};

/**
 * @param {TreeNode} node
 * @param {number} targetSum
 * @return {number}
 */
var countPathsFromNode = function(node, targetSum) {
    if (!node) return 0;

    let count = 0;

    if (node.val === targetSum) {
        count++;
    }

    count += countPathsFromNode(node.left, targetSum - node.val);
    count += countPathsFromNode(node.right, targetSum - node.val);

    return count;
};