// https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/description/
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

function countPairs(numbers, target) {
    let result = 0

    const maxLeftIndex = numbers.length - 1
    for (let leftIndex = 0; leftIndex < maxLeftIndex; leftIndex += 1) {
        let left = numbers[leftIndex]

        for (let rightIndex = leftIndex + 1; rightIndex < numbers.length; rightIndex += 1) {
            let right = numbers[rightIndex]

            if (left + right < target) {
                result += 1
            }
        }
    }

    return result
};

function solve() {
    const numbers = readArray();
    const target = readInt();
    process.stdout.write(`${countPairs(numbers, target)}`);
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
