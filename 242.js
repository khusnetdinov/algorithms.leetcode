// https://leetcode.com/problems/valid-anagram/
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

function isAnagram(string, target) {
    if (string.length !== target.length) return false;

    let charsCounter = new Map();

    for (const char of string) {
        charsCounter[char] = (charsCounter[char] || 0) + 1;
    }

    for (const char of target) {
        if (!charsCounter[char]) return false

        charsCounter[char] -= 1
    }

    return Object.values(charsCounter).every(count => count === 0);
};

function solve() {
    const string1 = readString();
    const string2 = readString();
    process.stdout.write(`${isAnagram(string1, string2)}`);
}

function readString() {
    var arr = _inputLines[_curLine].trim(" ");
    _curLine++;
    return arr;
}

