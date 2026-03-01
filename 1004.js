// https://leetcode.com/problems/max-consecutive-ones-iii/description/
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

function longestOnes(array, k) {
    let leftIndex = 0;
    let zeroCount = 0;
    let maxLength = 0;

    for (let rightIndex = 0; rightIndex < array.length; rightIndex += 1) {
        let right = array[rightIndex]

        if (right === 0) {
            zeroCount += 1
        }

        while (zeroCount > k) {
            let left = array[leftIndex]

            if (left === 0) {
                zeroCount -= 1
            }

            leftIndex += 1;
        }

        maxLength = Math.max(maxLength, rightIndex - leftIndex + 1);
    }

    return maxLength;
}

function solve() {
    const array = readArray();
    const k = readInt();
    process.stdout.write(`${longestOnes(array, k)}`);
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
