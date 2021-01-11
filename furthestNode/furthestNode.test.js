const furthestNode = (n, edge) => {
    let hashTable = {};

    edge.forEach(connection => {
        let start = connection[0];
        let end = connection[1];
        if (!hashTable[start]) {
            hashTable[start] = [end];

        } else {
            hashTable[start] = [...hashTable[start], end]
        }
        if (!hashTable[end]) {
            hashTable[end] = [start];
        } else {
            hashTable[end] = [...hashTable[end], start]
        }
    })
    let hashTableLength = {};

    Object.values(hashTable).forEach(x => x.sort())
    let count = 0;
    let answer = [];
    for (let i = 2; i <= n; i++) {
        jagyuu(i);
        hashTableLength[i] = Math.min(...answer);
        answer = [];
    }

    function jagyuu(find, jagyuuTable = {}, table = hashTable, count = 0, location = 1, path = [1]) {
        jagyuuTable[location] = true;
        if (find === location) {
            answer.push(count)
            return count;
        }


        table[location].forEach(nextLocation => {
            if (jagyuuTable[nextLocation] !== true) {
                jagyuu(find, jagyuuTable, table, count + 1, nextLocation, path = [...path, nextLocation])
                jagyuuTable[nextLocation] = false;
                path.pop();
            }
        })
    }

    let max = Math.max(...Object.values(hashTableLength))
    return Object.values(hashTableLength).filter(x => x === max).length
}




test('furthestNode', () => {
    expect(furthestNode(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]])).toBe(3);
})