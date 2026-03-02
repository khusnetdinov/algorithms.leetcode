// https://leetcode.com/problems/4sum/
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

function fourSum(numbers, target) {
    let result = [];

    // Сортируем массив (как в твоем решении)
    numbers.sort((a, b) => a - b);

    // Первый цикл - фиксируем ПЕРВОЕ число
    for (let firstIndex = 0; firstIndex < numbers.length - 3; firstIndex += 1) {
        // Пропускаем дубликаты для первого числа
        if (firstIndex > 0 && numbers[firstIndex] === numbers[firstIndex - 1]) continue;

        // Второй цикл - фиксируем ВТОРОЕ число
        for (let secondIndex = firstIndex + 1; secondIndex < numbers.length - 2; secondIndex += 1) {
            // Пропускаем дубликаты для второго числа
            if (secondIndex > firstIndex + 1 && numbers[secondIndex] === numbers[secondIndex - 1]) continue;

            // Два указателя для поиска оставшихся двух чисел
            let leftIndex = secondIndex + 1;
            let rightIndex = numbers.length - 1;

            while (leftIndex < rightIndex) {
                const sum = numbers[firstIndex] + numbers[secondIndex] + numbers[leftIndex] + numbers[rightIndex];

                if (sum === target) {
                    // Нашли четверку
                    result.push([
                        numbers[firstIndex],
                        numbers[secondIndex],
                        numbers[leftIndex],
                        numbers[rightIndex]
                    ]);

                    // Пропускаем дубликаты для левого указателя
                    while (leftIndex < rightIndex && numbers[leftIndex] === numbers[leftIndex + 1]) leftIndex += 1;
                    // Пропускаем дубликаты для правого указателя
                    while (leftIndex < rightIndex && numbers[rightIndex] === numbers[rightIndex - 1]) rightIndex -= 1;

                    // Двигаем оба указателя
                    leftIndex += 1;
                    rightIndex -= 1;
                } else if (sum < target) {
                    // Сумма слишком мала - двигаем левый указатель вправо
                    leftIndex += 1;
                } else {
                    // Сумма слишком велика - двигаем правый указатель влево
                    rightIndex -= 1;
                }
            }
        }
    }

    return result;
}

function solve() {
    const numbers = readArray();
    process.stdout.write(`${fourSum(numbers)}`);
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
