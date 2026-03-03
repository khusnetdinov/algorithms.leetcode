// https://leetcode.com/problems/palindrome-linked-list/
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

function isPalindrome(head) {
    let result = true;
    let stack = []

    if (!head || !head.next) return result;

    let current = head
    while (current) {
        stack.push(current.val)
        current = current.next
    }

    current = head
    while (current) {
        if(stack.pop() !== current.val) {
            result = false
            break
        }

        current = current.next
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