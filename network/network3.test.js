// computers를 순환하면서 연결된 네트워크도 순환해서
//  hash로 거처가면 1로 하고 computers를 순환할때 마다 
//  count 를 하나 추가 해준다.\

const network = (n, computers) => {
    let answer = 0;
    const queue = [];
    const visited = {};
    let current;
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            queue.push(i);
            visited[i] = true;
            answer++;
        }
        while (queue.length) {
            current = queue.shift();
            computers[current].forEach((value, idx) => {
                if (!visited[idx] && value === 1) {
                    visited[idx] = true;
                    queue.push(idx);
                }
            });
        }
    }
    return answer;
}




test('network', () => {
    expect(network(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]])).toBe(2);
    expect(network(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]])).toBe(1);
})