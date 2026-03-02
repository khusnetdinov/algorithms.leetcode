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

function threeSum(numbers) {
    let result = []

    numbers.sort((a, b) =>  a - b)

    for (let leftIndex = 0; leftIndex < numbers.length - 2; leftIndex += 1) {
        if (leftIndex > 0 && numbers[leftIndex] === numbers[leftIndex - 1]) continue;

        let midIndex = leftIndex + 1;
        let rightIndex = numbers.length - 1;

        while (midIndex < rightIndex) {
            const sum = numbers[leftIndex] + numbers[midIndex] + numbers[rightIndex];

            if (sum === 0) {
                result.push([numbers[leftIndex], numbers[midIndex], numbers[rightIndex]])

                while (midIndex < rightIndex && numbers[midIndex] === numbers[midIndex + 1]) midIndex += 1;
                while (midIndex < rightIndex && numbers[rightIndex] === numbers[rightIndex - 1]) rightIndex -= 1;

                midIndex += 1;
                rightIndex -= 1;
            } else if (sum < 0) {
                midIndex += 1
            } else {
                rightIndex -= 1
            }
        }
    }

    return result
};

function solve() {
    const numbers = readArray();
    process.stdout.write(`${threeSum(numbers)}`);
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
