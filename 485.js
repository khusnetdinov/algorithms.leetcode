// https://leetcode.com/problems/max-consecutive-ones/
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

function findMaxConsecutiveOnes(nums) {
    let longestCounter = 0
    let currentCounter = 0

    for (let rightIndex = 0; rightIndex < nums.length; rightIndex += 1) {
        let num = nums[rightIndex]

        if (num === 1) {
            currentCounter += 1
            longestCounter = Math.max(longestCounter, currentCounter)
        } else {
            currentCounter = 0
        }
    }

    longestCounter = Math.max(longestCounter, currentCounter)

    return longestCounter
}

function solve() {
    const nums = readArray();
    process.stdout.write(`${findMaxConsecutiveOnes(nums)}`);
}


function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split(" ").map(num => Number(num));
    _curLine++;
    return arr;
}
