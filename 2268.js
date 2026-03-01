// https://leetcode.com/problems/find-the-k-beauty-of-a-number/description/
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

function divisorSubstrings(number, windowSize) {
    let result = 0;
    let array = number.toString().split("").map(num => Number(num))

    const maxIndex = array.length - (windowSize - 1)
    for (let index = 0; index < maxIndex; index += 1) {
        let maxPartIndex = index + (windowSize);
        let part = array.slice(index, maxPartIndex);
        let devisor = parseInt(part.join(''), 10);

        if (devisor !== 0 && number % devisor === 0) {
            result += 1
        }
    }

    return result;
};

function solve() {
    const string = readString();
    const k = readInt();
    process.stdout.write(`${divisorSubstrings(string, k)}`);
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readString() {
    var arr = _inputLines[_curLine].trim(" ");
    _curLine++;
    return arr;
}
