// https://leetcode.com/problems/move-zeroes/description/
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

function moveZeroes(numbers) {
    let slowIndex = 0
    for (let fastIndex = 0; fastIndex < numbers.length; fastIndex += 1) {
        if (numbers[fastIndex] !== 0) {
            numbers[slowIndex] = numbers[fastIndex]
            slowIndex += 1
        }
    }

    while (slowIndex < numbers.length) {
        numbers[slowIndex] = 0

        slowIndex += 1
    }

    return numbers;
}

function solve() {
    const numbers = readArray();

    console.log(moveZeroes(numbers))
}


function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split(" ").map(num => Number(num));
    _curLine++;
    return arr;
}
