/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    const stack = [0]; // текущий накопитель

    for (let char of s) {
        if (char === '(') {
            stack.push(0); // начинаем новый уровень
        } else { // char === ')'
            const top = stack.pop(); // забираем значение внутреннего выражения

            // Если top === 0, это "()" → значение 1
            // Иначе это "(A)" → значение 2 * A
            const value = top === 0 ? 1 : 2 * top;

            // Добавляем к родительскому уровню
            stack[stack.length - 1] += value;
        }
    }

    return stack[0];
};