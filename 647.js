https://leetcode.com/problems/palindromic-substrings/description/
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


function countSubstrings(string) {
    const length = string.length;
    let count = 0;

    // Для каждого возможного центра
    for (let center = 0; center < 2 * length - 1; center += 1) {
        // Преобразуем центр в левую и правую границы
        // Для четных центров: left = center/2, right = center/2 + 1
        // Для нечетных центров: left = center/2, right = center/2
        let left = Math.floor(center / 2);
        let right = left + (center % 2);

        while (left >= 0 && right < length && string[left] === string[right]) {
            count += 1;
            left += 1;
            right += 1;
        }
    }

    return count;
}

function solve() {
    const string = readLine();
    if (countSubstrings(string)) {
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