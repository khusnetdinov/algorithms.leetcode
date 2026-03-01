// https://leetcode.com/problems/permutation-in-string/
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

function checkInclusion(target, string) {
    const windowSize = target.length

    if (string.length < target.length) return false;

    const stringCounts = new Array(26).fill(0);
    const targetCounts = new Array(26).fill(0);

    for (let index = 0; index < windowSize; index += 1) {
        targetCounts[target.charCodeAt(index) - 'a'.charCodeAt(0)] += 1;
        stringCounts[string.charCodeAt(index) - 'a'.charCodeAt(0)] += 1;
    }

    if (arraysEqual(stringCounts, targetCounts)) {
        return true
    }

    for (let index = windowSize; index < string.length; index += 1) {
        // Удаляем самый левый символ предыдущего окна
        stringCounts[string.charCodeAt(index - windowSize) - 'a'.charCodeAt(0)] -= 1;
        // Добавляем новый символ
        stringCounts[string.charCodeAt(index) - 'a'.charCodeAt(0)] += 1;

        if (arraysEqual(stringCounts, targetCounts)) {
            return true
        }
    }

    return false;
}

function arraysEqual(arr1, arr2) {
    for (let index = 0; index < 26; index += 1) {
        if (arr1[index] !== arr2[index]) return false;
    }
    return true;
}

function solve() {
    const target = readString();
    const string = readString();
    process.stdout.write(`${checkInclusion(target, string)}`);
}

function readString() {
    var arr = _inputLines[_curLine].trim(" ");
    _curLine++;
    return arr;
}

