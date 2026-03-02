// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
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

function twoSum(numbers, target) {
    let result = [-1, 0]
    let leftIndex = 0
    let rightIndex = numbers.length - 1

    while (leftIndex !== rightIndex) {
        let left = numbers[leftIndex]
        let right = numbers[rightIndex]

        if (left + right === target) {
            result = [leftIndex + 1, rightIndex + 1]

            break
        } else if (left + right > target) {
            rightIndex -= 1
        } else {
            leftIndex += 1
        }
    }

    return result
};

function solve() {
    const numbers = readArray();
    const target = readInt();
    process.stdout.write(`${twoSum(numbers, target)}`);
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
