/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (inorder.length === 0 || postorder.length === 0) {
        return null;
    }

    let val = postorder[postorder.length - 1];
    let rootIndex = inorder.indexOf(val);

    let node = new TreeNode(val);

    let leftInorder = inorder.slice(0, rootIndex);
    let leftPostorder = postorder.slice(0, leftInorder.length);
    node.left = buildTree(leftInorder, leftPostorder);

    // Правое поддерево: элементы после rootIndex в inorder
    // и соответствующие элементы в postorder (исключая последний элемент - корень)
    let rightInorder = inorder.slice(rootIndex + 1);
    let rightPostorder = postorder.slice(leftInorder.length, postorder.length - 1);
    node.right = buildTree(rightInorder, rightPostorder);

    return node;
};