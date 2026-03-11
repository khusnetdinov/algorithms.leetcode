// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
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

function lowestCommonAncestor(root, p, q) {
    if (root === null) {
        return null
    }

    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q)
    }

    if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q)
    }

    return root
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
