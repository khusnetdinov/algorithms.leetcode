// https://leetcode.com/problems/maximum-average-subarray-i/description/
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

function findMaxAverage(array, windowSize) {
    let currentWindowSum = 0;
    for (let index = 0; index < windowSize; index += 1) {
        currentWindowSum += array[index];
    }

    let maxAverage = currentWindowSum / windowSize;
    let maxIndex = array.length - windowSize;
    for (let index = 0; index < maxIndex; index += 1) {
        currentWindowSum -= array[index];
        currentWindowSum += array[index + windowSize];

        let currentAverage = currentWindowSum / windowSize;

        if (currentAverage > maxAverage) {
            maxAverage = currentAverage
        }
    }

    return maxAverage;
};

function solve() {
    const array = readArray();
    const n = readInt();
    process.stdout.write(`${findMaxAverage(array, n)}`);
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
