/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    let visited = new Array(n).fill(false);
    let adjacenyList = Array.from({ length: n }, () => []);

    for (let [u, v] of edges) {
        adjacenyList[u].push(v);
        adjacenyList[v].push(u);
    }

    let stack = [source];
    while (stack.length > 0) {
        let vertex = stack.pop();
        visited[vertex] = true;

        if (vertex === destination) {
            return true;
        }

        for (let nextVertex of adjacenyList[vertex]) {
            if (!visited[nextVertex]) {

                stack.push(nextVertex);
            }
        }
    }

    return false;
};

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    let visited = new Array(n).fill(false);
    let adjacenyList = Array.from({ length: n }, () => []);

    for (let [u, v] of edges) {
        adjacenyList[u].push(v);
        adjacenyList[v].push(u);
    }

    let queue = [source];
    while (queue.length > 0) {
        let vertex = queue.shift();
        visited[vertex] = true;

        if (vertex === destination) {
            return true;
        }

        for (let nextVertex of adjacenyList[vertex]) {
            if (!visited[nextVertex]) {

                queue.push(nextVertex);
            }
        }
    }

    return false;
};