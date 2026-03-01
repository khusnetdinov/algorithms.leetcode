// https://leetcode.com/problems/longest-repeating-character-replacement/description/
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

function characterReplacement(string, k) {
    let charsCounters = new Array(26).fill(0);
    let leftIndex = 0;
    let maxLength = 0;
    let maxCounter = 0;

    for (let rightIndex = 0; rightIndex < string.length; rightIndex += 1) {
        let rightCharIndex = string.charCodeAt(rightIndex) - 65;
        charsCounters[rightCharIndex]++;

        maxCounter = Math.max(maxCounter, charsCounters[rightCharIndex]);

        while ((rightIndex - leftIndex + 1) - maxCounter > k) {
            let leftCharIndex = string.charCodeAt(leftIndex) - 65;
            charsCounters[leftCharIndex] -= 1;
            leftIndex += 1;
        }

        maxLength = Math.max(maxLength, rightIndex - leftIndex + 1);
    }

    return maxLength;
}

function solve() {
    const string = readString();
    const k = readInt();
    process.stdout.write(`${characterReplacement(string, k)}`);
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
