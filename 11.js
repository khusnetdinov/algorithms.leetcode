// https://leetcode.com/problems/container-with-most-water/description/
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

function maxArea(heights) {
    let result = 0

    for (let leftIndex = 0, rightIndex = heights.length - 1; leftIndex < rightIndex;) {
        let leftHeight = heights[leftIndex]
        let rightHeight = heights[rightIndex]

        let area = Math.min(leftHeight, rightHeight) * (rightIndex - leftIndex);

        result = Math.max(result, area)

        if (leftHeight < rightHeight) {
            leftIndex += 1;
        } else {
            rightIndex -= 1;
        }
    }

    return result
};

function solve() {
    const heights = readArray();
    process.stdout.write(`${maxArea(heights)}`);
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
