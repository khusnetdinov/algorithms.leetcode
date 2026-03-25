/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {

    function findSeq(node) {
        if (node === null) return []
        if (node.left === null && node.right === null) return [node.val]

        return [...findSeq(node.left), ...findSeq(node.right)]
    }

    let seq1 = findSeq(root1)
    let seq2 = findSeq(root2)

    if (seq1.length !== seq2.length) return false;
    for (let i = 0; i < seq1.length; i++) {
        if (seq1[i] !== seq2[i]) return false;
    }
    return true;
};