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

function diameterOfBinaryTree(root) {
    let maxDiameter = 0;

    function maxDeep(node) {
        if (node === null) {
            return 0;
        }

        const leftDepth = maxDeep(node.left);
        const rightDepth = maxDeep(node.right);

        // Обновляем максимальный диаметр (путь через текущий узел)
        maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);

        // Возвращаем глубину текущего поддерева
        return Math.max(leftDepth, rightDepth) + 1;
    }

    maxDeep(root);
    return maxDiameter;
};

function solve() {
    const numbers = readArray();
    process.stdout.write(`${diameterOfBinaryTree(numbers)}`);
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
