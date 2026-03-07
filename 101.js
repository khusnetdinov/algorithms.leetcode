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

var isSymmetric = function(root) {
    if (root === null) {
        return true
    }

    function isMirror(node1, node2) {
        if (node1 === null && node2 === null) {
            return true
        }

        if (node1 === null || node2 === null) {
            return false
        }

        return node1.val === node2.val && isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left)
    }


    return isMirror(root.left, root.right)
};
function solve() {
    const numbers = readArray();
    process.stdout.write(`${isSimetric(numbers)}`);
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
