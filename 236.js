// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
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

var lowestCommonAncestor = function(root, p, q) {
    if (root === null || root === p || root === q) {
        return root;
    }

    let left = lowestCommonAncestor(root.left, p, q)
    let right = lowestCommonAncestor(root.right, p, q)

    if (left !== null && right !== null) {
        return root
    }

    return left !== null ? left : right;
};
function solve() {
    const root = readArray();
    const p = readArray();
    const q = readArray();
    process.stdout.write(`${lowestCommonAncestor(root, p, q)}`);
}

function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split(" ").map(num => Number(num));
    _curLine++;
    return arr;
}
