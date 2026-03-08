// https://leetcode.com/problems/binary-tree-inorder-traversal/description/
const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

_reader.on('line', line => {
    _inputLines.push(line);
});

process.stdin.on('end', solve);

function inorderTraversal(root) {
    let result = []

    function traverse(node) {
        if (node === null) {
            return
        }

        traverse(node.left)
        result.push(node.val)
        traverse(node.right)
    }

    traverse(root)

    return result
}

function solve() {
    const numbers1 = readArray();
    process.stdout.write(`${inorderTraversal(numbers1)}`);
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split(" ").map(num => Number(num));
    _curLine++;
    return arr;
}
