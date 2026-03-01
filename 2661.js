// https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/
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

const MAX_SCORE = 10

function isWinner(player1, player2) {
    let scores1 = player1[0]
    let scores2 = player2[0]

    if (player1.length > 1) {
        scores1 += (player1[0] === MAX_SCORE ? 2 * player1[1] : player1[1]);
        scores2 += (player2[0] === MAX_SCORE ? 2 * player2[1] : player2[1]);

        scores1 = scoresSum(scores1, player1)
        scores2 = scoresSum(scores2, player2)
    }

    if (scores1 > scores2) {
        return 1;
    } else if (scores1 < scores2) {
        return 2;
    } else {
        return 0;
    }
};

function scoresSum(scores, player) {
    let result = scores;
    let maxIndex = player.length - 1;
    for (let index = 2; index <= maxIndex; index += 1) {
        const strikeBefore1 = player[index - 1] === MAX_SCORE;
        const strikeBefore2 = player[index - 2] === MAX_SCORE;

        result += ((strikeBefore1 || strikeBefore2) ? 2 * player[index] : player[index])
    }

    return result;
}

function solve() {
    const player1 = readArray();
    const player2 = readArray();
    process.stdout.write(`${isWinner(player1, player2)}`);
}

function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split(" ").map(num => Number(num));
    _curLine++;
    return arr;
}

