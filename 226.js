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

function invertTree(root) {
    function inverted(node) {
        if (node === null) {
            return node
        }

        let left = node.left
        let right = node.right

        node.right = inverted(left)
        node.left = inverted(right)

        return node
    }

    return inverted(root)
};

function solve() {
    const numbers = readArray();
    process.stdout.write(`${invertTree(numbers)}`);
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
