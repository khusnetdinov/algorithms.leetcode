// https://leetcode.com/problems/path-sum/
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

function hasPathSum(root, targetSum) {
    if (root === null) {
        return false
    }

    if (root.left === null && root.right === null) {
        return root.val === targetSum
    }

    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
};

function solve() {
    const numbers1 = readArray();
    const numbers2 = readInt();
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
