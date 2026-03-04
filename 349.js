// https://leetcode.com/problems/intersection-of-two-arrays/description/
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


function intersection(nums1, nums2) {
    let array;
    let subArray;

    if (nums1.length > nums2.length) {
        array = nums1
        subArray = nums2
    } else {
        array = nums2
        subArray = nums1
    }

    let result = new Set();
    let numbers = new Set(array)

    for (let number of subArray) {
        if (numbers.has(number)) {
            result.add(number)
        }
    }

    return Array.from(result)
}

function solve() {
    const line1 = readArray();
    const line3 = readArray();
    console.log(intersection(line1, line3))
}

function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split(" ").map(num => Number(num));
    _curLine++;
    return arr;
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

