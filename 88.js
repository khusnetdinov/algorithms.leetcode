// https://leetcode.com/problems/merge-sorted-array/description/
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


function merge(array, arrayLength, mergee, mergeeLengt) {
    let arrayIndex = arrayLength - 1;
    let mergeeIndex = mergeeLengt - 1
    let index = array.length - 1

    while (index > -1) {
        if (arrayIndex >= 0 && mergeeIndex >=0) {
            if (array[arrayIndex] > mergee[mergeeIndex]) {
                array[index] = array[arrayIndex]
                arrayIndex -= 1
            } else {
                array[index] = mergee[mergeeIndex]
                mergeeIndex -= 1
            }
        } else if (mergeeIndex >= 0) {
            array[index] = mergee[mergeeIndex]
            mergeeIndex -= 1
        }

        index -= 1
    }

    return array;
}

function solve() {
    const line1 = readArray();
    const line2 = readInt();
    const line3 = readArray();
    const line4 = readInt()
    console.log(merge(line1, line2, line3, line4))
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

