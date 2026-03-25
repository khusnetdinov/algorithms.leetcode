/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) {
        return null;
    }

    let val = preorder[0];
    let rootIndex = inorder.indexOf(val);

    let node = new TreeNode(val);

    let leftInorder = inorder.slice(0, rootIndex);
    let leftPreorder = preorder.slice(1, 1 + leftInorder.length);
    node.left = buildTree(leftPreorder, leftInorder);

    let rightInorder = inorder.slice(rootIndex + 1);
    let rightPreorder = preorder.slice(1 + leftInorder.length);
    node.right = buildTree(rightPreorder, rightInorder);

    return node;
};