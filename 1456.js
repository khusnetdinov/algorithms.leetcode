// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/description/
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

function maxVowels(string, windowSize) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let result = 0;

    let currentCount = 0;
    for (let index = 0; index < windowSize; index += 1) {
        let char = string[index]

        if (vowels.has(char))
        currentCount += 1
    }

    if (currentCount > result) {
        result = currentCount
    }

    const maxIndex = string.length - (windowSize - 1);
    for (let index = 1; index < maxIndex; index += 1) {
        let prevChar = string[index - 1]
        let nextChar = string[index + (windowSize - 1)]

        if (vowels.has(prevChar)) {
            currentCount -= 1
        }

        if (vowels.has(nextChar)) {
            currentCount += 1
        }

        if (currentCount > result) {
            result = currentCount
        }
    }

    return result;
};

function solve() {
    const string = readString();
    const k = readInt();
    process.stdout.write(`${maxVowels(string, k)}`);
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
