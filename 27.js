// https://leetcode.com/problems/remove-element/description/
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


function removeElement(numbers, target) {
    let slowIndex = 0
    for (let fastIndex = 0; fastIndex < numbers.length; fastIndex += 1) {
        if (numbers[fastIndex] !== target) {
            numbers[slowIndex] = numbers[fastIndex]
            slowIndex += 1
        }
    }

    return slowIndex;
}

function solve() {
    const numbers = readArray();
    const target = readInt();

    console.log(removeElement(numbers, target))
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
