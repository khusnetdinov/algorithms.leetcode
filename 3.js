// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
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

function lengthOfLongestSubstring(string) {
    let chars = new Set();
    let result = 0;
    let leftIndex = 0;

    for (let rightIndex = 0; rightIndex < string.length; rightIndex += 1) {
        const currentChar = string[rightIndex];

        while (chars.has(currentChar)) {
            chars.delete(string[leftIndex])
            leftIndex += 1
        }

        chars.add(currentChar)

        result = Math.max(result, rightIndex - leftIndex + 1)
    }

    return result;
};

function solve() {
    const string = readString();
    process.stdout.write(`${lengthOfLongestSubstring(string)}`);
}

function readString() {
    var arr = _inputLines[_curLine].trim(" ");
    _curLine++;
    return arr;
}
