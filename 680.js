// https://leetcode.com/problems/valid-palindrome-ii/description/
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

function validPalindrome(string) {
    function isPalindrome(left, right) {
        while (left < right) {
            if (string[left] !== string[right]) {
                return false
            }

            left += 1
            right -=1
        }

        return true
    }

    let left = 0
    let right = string.length - 1

    while (left < right) {
        if (string[left] === string[right]) {
            left += 1
            right -= 1
        } else {
            return isPalindrome(left + 1, right) || isPalindrome(left, right - 1)
        }
    }

    return true
}

function solve() {
    const line = readLine();
    if (validPalindrome(line)) {
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