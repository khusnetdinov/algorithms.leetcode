// https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/description/
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

function minimumDifference(array, windowSize) {
    let sortedArray = array.sort((a, b) => a - b);
    let result = Number.POSITIVE_INFINITY

    for (let index = 0; index < array.length - (windowSize - 1); index += 1) {
        let difference = Math.abs(sortedArray[index]- sortedArray[index + windowSize - 1])

        if (difference < result) {
            result = difference
        }
    }

    return result
}

function solve() {
    const array = readArray();
    const windowSize = readInt();
    process.stdout.write(`${minimumDifference(array, windowSize)}`);
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
