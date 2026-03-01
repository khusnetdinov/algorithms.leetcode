// https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/description/
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

function numOfSubarrays(array, windowSize, threshold) {
    let result = 0;
    let currentSum = 0;

    for (let index = 0; index < windowSize; index += 1) {
        currentSum += array[index]
    }

    if (currentSum / windowSize >= threshold) {
        result += 1
    }

    const maxIndex = array.length - windowSize
    for (let index = 1; index <= maxIndex; index += 1) {
        currentSum = currentSum - array[index - 1] + array[index + windowSize - 1]

        let average = currentSum / windowSize

        if (average >= threshold) {
            result += 1
        }
    }

    return result;
};

function solve() {
    const string = readArray();
    const k = readInt();
    const t = readInt();
    process.stdout.write(`${numOfSubarrays(string, k, t)}`);
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