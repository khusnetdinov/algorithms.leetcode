// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
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

function maxDepth(root) {
    function maxDeep(node, deep) {
        if (node === null) {
            return deep
        }

        return Math.max(maxDeep(node.left, deep + 1), maxDeep(node.right, deep + 1))
    }

    return maxDeep(root, 0)
};

function solve() {
    const numbers = readArray();
    process.stdout.write(`${maxDepth(numbers)}`);
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
