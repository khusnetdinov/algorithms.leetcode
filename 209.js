// https://leetcode.com/problems/minimum-size-subarray-sum/description/
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

function minSubArrayLen(target, nums) {
    let leftIndex = 0;
    let currentSum = 0;
    let result = Number.POSITIVE_INFINITY;

    for (let rightIndex = 0; rightIndex < nums.length; rightIndex += 1) {
        currentSum += nums[rightIndex];

        while (currentSum >= target) {
            result = Math.min(result, rightIndex - leftIndex + 1)

            currentSum -= nums[leftIndex]
            leftIndex += 1
        }
    }

    if (result === Number.POSITIVE_INFINITY) {
        return 0
    } else {
        return result
    }
};

function solve() {
    const array = readArray();
    const target = readInt();
    process.stdout.write(`${minSubArrayLen(target, array)}`);
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
