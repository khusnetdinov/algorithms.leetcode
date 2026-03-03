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

var longestPalindrome = function(string) {
    if (!string || string.length < 1) return "";

    let longest = "";

    for (let index = 0; index < string.length; index++) {
        // ВСЕГДА проверяем нечетные палиндромы (центр в символе)
        const oddPalindrome = expandAndGetPalindrome(string, index, index);
        if (oddPalindrome.length > longest.length) {
            longest = oddPalindrome;
        }

        // ВСЕГДА проверяем четные палиндромы (центр между символами)
        const evenPalindrome = expandAndGetPalindrome(string, index, index + 1);
        if (evenPalindrome.length > longest.length) {
            longest = evenPalindrome;
        }
    }

    return longest;
}

var expandAndGetPalindrome = function(string, left, right) {
    while (left >= 0 && right < string.length && string[left] === string[right]) {
        left--;
        right++;
    }
    return string.substring(left + 1, right);
}

function solve() {
    const string = readLine();

    console.log(longestPalindrome(string))
}


function readLine() {
    const line = _inputLines[_curLine];
    _curLine++;
    return line;
}
