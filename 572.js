// https://leetcode.com/problems/subtree-of-another-tree/description/
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

function isSubtree(root, subRoot) {
    function isEqual(node1, node2) {
        if (node1 === null && node2 === null) {
            return true
        }
        if (node1 === null || node2 === null) {
            return false
        }
        return node1.val === node2.val
            && isEqual(node1.left, node2.left)
            && isEqual(node1.right, node2.right)
    }

    if (root === null) {
        return subRoot === null
    }

    if (isEqual(root, subRoot)) {
        return true
    }

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};

function solve() {
    const numbers1 = readArray();
    const numbers2 = readArray();
    process.stdout.write(`${isSubtree(numbers1, numbers2)}`);
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
