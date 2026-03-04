// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
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


function removeDuplicates(numbers) {
    let slowIndex = 2
    for (let fastIndex = 2; fastIndex < numbers.length; fastIndex += 1) {
        if (numbers[slowIndex - 2] !== numbers[fastIndex]) {
            numbers[slowIndex] = numbers[fastIndex]
            slowIndex += 1
        }
    }

    return slowIndex;
}

function solve() {
    const line = readArray();
    console.log(removeDuplicates(line))
}

function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split(" ").map(num => Number(num));
    _curLine++;
    return arr;
}
