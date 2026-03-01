// https://leetcode.com/problems/find-all-anagrams-in-a-string/description/
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

function findAnagrams(string, target) {
    const result = [];

    if (string.length < target.length) return result;

    const stringCounts = new Array(26).fill(0);
    const targetCounts = new Array(26).fill(0);

    for (let index = 0; index < target.length; index += 1) {
        targetCounts[target.charCodeAt(index) - 'a'.charCodeAt(0)] += 1;
        stringCounts[string.charCodeAt(index) - 'a'.charCodeAt(0)] += 1;
    }

    if (arraysEqual(stringCounts, targetCounts)) {
        result.push(0);
    }

    for (let index = target.length; index < string.length; index += 1) {
        stringCounts[string.charCodeAt(index - target.length) - 'a'.charCodeAt(0)] -= 1;
        stringCounts[string.charCodeAt(index) - 'a'.charCodeAt(0)] += 1;

        if (arraysEqual(stringCounts, targetCounts)) {
            result.push(index - target.length + 1);
        }
    }

    return result;
}

function arraysEqual(arr1, arr2) {
    for (let index = 0; index < 26; index += 1) {
        if (arr1[index] !== arr2[index]) return false;
    }
    return true;
}

function solve() {
    const string = readString();
    const target = readString();
    process.stdout.write(`${findAnagrams(string, target)}`);
}

function readString() {
    var arr = _inputLines[_curLine].trim(" ");
    _curLine++;
    return arr;
}

