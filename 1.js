// https://leetcode.com/problems/two-sum/description/
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
    let result = []
    let wantedNumbers = new Map();

    for (let index = 0; index < numbers.length; index += 1) {
        let currentNumber = numbers[index]
        let wantedNumber = target - currentNumber

        if (wantedNumbers.has(wantedNumber)) {
            result = [wantedNumbers.get(wantedNumber), index]
        }

        wantedNumbers.set(currentNumber, index)
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
