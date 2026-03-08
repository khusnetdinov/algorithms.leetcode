// https://leetcode.com/problems/binary-tree-paths/
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

let binaryTreePaths = function(root) {
    let results = [];

    if (root === null) return results;

    function paths(node, path) {
        if (node.left === null && node.right === null) {
            results.push(path);
            return;
        }

        if (node.left !== null) {
            paths(node.left, path + "->" + node.left.val);
        }

        if (node.right !== null) {
            paths(node.right, path + "->" + node.right.val);
        }
    }

    paths(root, root.val.toString());
    return results;
};
function solve() {
    const numbers1 = readArray();
    const numbers2 = readInt();
    process.stdout.write(`${binaryTreePaths(numbers1, numbers2)}`);
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
