const crane = (board, moves) => {
    const array = [];
    let count = 0;
    let y = 0;
    while (moves.length > 0) {
        if (board[y][moves[0] - 1] !== 0) {
            array.push(board[y][moves[0] - 1]);
            board[y][moves[0] - 1] = 0;
            moves.shift();
            y = 0;
        }
        else {
            y += 1;
            if (y === board.length) {
                y = 0;
                moves.shift();
            }
        }
        count += 1;
    }

    return countPair(array) * 2;
}

const countPair = (array) => {
    let pairCount = 0;
    let modified = true;
    while (modified) {
        modified = false;
        for (let i = 0; i < array.length; i += 1) {
            if (array[i] === array[i + 1]) {
                pairCount += 1;
                array.splice(i, 2);
                modified = true;
            }
        }
    }
    return pairCount
}

test('countPair', () => {
    expect(countPair([4, 3, 2, 1, 1, 2, 3, 4])).toBe(4)
    expect(countPair([1, 1, 2, 2])).toBe(2)
    expect(countPair([1,4,6,8,8,6,3,2,6,6,8,8,6])).toBe(4)
})

test('crane', () => {
    // expect(crane([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],[1,5,3,5,1,2,1,4])).toBe(4)
    // expect(crane([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],[])).toBe(0)
    expect(crane([[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]], [1])).toBe(0)


})