/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [];

    for (let asteroid of asteroids) {
        while (stack.length > 0 && asteroid < 0 && stack[stack.length - 1] > 0) {
            let previous = stack[stack.length - 1];
            let collision = Math.abs(previous) - Math.abs(asteroid);

            if (collision > 0) {
                asteroid = null;
                break;
            } else if (collision === 0) {
                stack.pop();
                asteroid = null;
                break;
            } else {
                stack.pop();
            }
        }

        if (asteroid !== null) {
            stack.push(asteroid);
        }
    }

    return stack;
};