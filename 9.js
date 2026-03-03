// https://leetcode.com/problems/palindrome-number/
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

function isNumOrString(char) {
    return /^[a-zA-Z0-9]+$/.test(char)
}

function isPalindrome(number) {
    let result = true;
    let string = number.toString();
    let leftIndex = 0
    let rightIndex = string.length - 1;


    while (leftIndex < rightIndex) {
        let left = string[leftIndex]
        let right = string[rightIndex]

        console.log(left, right)

        if (left !== right) {
            result = false

            break
        }

        leftIndex += 1
        rightIndex -= 1
    }

    return result;
}

function solve() {
    const line = readLine();
    if (isPalindrome(line)) {
        console.log("True")
    } else {
        console.log("False")
    }
}


function readLine() {
    const line = _inputLines[_curLine];
    _curLine++;
    return line;
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