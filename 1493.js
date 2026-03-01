// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/description/
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

function longestSubarray(array) {
    let maxLength = 0;
    let leftIndex = 0;
    let zeroCount = 0

    for (let rightIndex = 0; rightIndex < array.length; rightIndex += 1) {
        let right = array[rightIndex];

        if (right === 0) {
            zeroCount += 1
        }

        while (zeroCount > 1) {
            let left = array[leftIndex]

            if (left === 0) {
                zeroCount -= 1
            }

            leftIndex += 1
        }

        maxLength = Math.max(maxLength, (rightIndex - leftIndex + 1));
    }

    return maxLength - 1
}

function solve() {
    const array = readArray();
    process.stdout.write(`${longestSubarray(array)}`);
}

function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split(" ").map(num => Number(num));
    _curLine++;
    return arr;
}
