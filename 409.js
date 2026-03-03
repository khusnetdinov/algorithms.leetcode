// https://leetcode.com/problems/longest-palindrome/description/
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


function longestPalindrome(s) {
    // Подсчитываем частоту каждого символа
    const charCount = {};

    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let length = 0;
    let oddExists = false;

    // Проходим по всем значениям
    for (const count of Object.values(charCount)) {
        length += Math.floor(count / 2) * 2;  // Берем только четную часть

        if (count % 2 === 1) {
            oddExists = true;  // Запоминаем, что есть нечетное
        }
    }

    // Если был хотя бы один символ с нечетным количеством,
    // добавляем 1 в центр
    return length + (oddExists ? 1 : 0);
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