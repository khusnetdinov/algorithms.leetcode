// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
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

function threeSumClosest(numbers, target) {
    numbers.sort((a, b) => a - b);

    let closestSum = numbers[0] + numbers[1] + numbers[2];

    for (let leftIndex = 0; leftIndex < numbers.length - 2; leftIndex += 1) {
        if (leftIndex > 0 && numbers[leftIndex] === numbers[leftIndex - 1]) continue;

        let midIndex = leftIndex + 1;
        let rightIndex = numbers.length - 1;

        while (midIndex < rightIndex) {
            const currentSum = numbers[leftIndex] + numbers[midIndex] + numbers[rightIndex];

            if (currentSum === target) {
                return target;
            }

            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }

            if (currentSum < target) {
                midIndex += 1;
                // Пропускаем дубликаты для среднего элемента
                while (midIndex < rightIndex && numbers[midIndex] === numbers[midIndex - 1]) midIndex += 1;
            } else {
                rightIndex -= 1;
                // Пропускаем дубликаты для правого элемента
                while (midIndex < rightIndex && numbers[rightIndex] === numbers[rightIndex + 1]) rightIndex -= 1;
            }
        }
    }

    return closestSum;
}

function solve() {
    const numbers = readArray();
    const target = readArray();
    process.stdout.write(`${threeSumClosest(numbers, target)}`);
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
