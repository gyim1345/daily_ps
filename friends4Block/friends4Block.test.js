function solution(m, n, board) {
    while (true) {
        let needToModifyArr = [];
        for (let y = 0; y < m - 1; y += 1) {
            for (let x = 0; x < n - 1; x += 1) {
                if (board[y][x] && board[y][x] !== " ") {
                    if (isSquare(y, x, board)) {
                        needToModifyArr.push(...storeLetters(y, x));
                    }
                }
            }
        }
        if (!needToModifyArr[0]) {
            break;
        }
        modifyBoard(needToModifyArr, board);
        modifyBoard2(board, m, n);
    }

    let count = 0;
    board.map(x => x.replace(/ /g, "")).forEach(x => count += x.length)

    return m * n - count;
}

const isSquare = (y, x, board) => {
    const currentLetter = board[y][x]
    if (board[y + 1][x] == currentLetter && board[y + 1][x + 1] == currentLetter && board[y][x + 1] == currentLetter) {
        return true;
    }
    return false;
}

const storeLetters = (y, x) => {
    return [[y, x], [y, x + 1], [y + 1, x], [y + 1, x + 1]];
}

const modifyBoard = (needToModifyArr, board) => {
    needToModifyArr.forEach(coord => {
        const y = coord[0];
        const x = coord[1];

        let temp = board[y].split("")
        temp[x] = " ";
        board[y] = temp.join("");
    })
}

const modifyBoard2 = (board, m, n) => {
    for (let x = n - 1; x >= 0; x -= 1) {
        for (let y = m - 1; y >= 0; y -= 1) {
            if (board[y][x] === " ") {
                for (let y1 = y - 1; y1 >= 0; y1 -= 1) {
                    if (board[y1][x] !== " ") {
                        board[y] = setCharAt(board[y], x, board[y1][x]);
                        board[y1] = setCharAt(board[y1], x, " ");
                        break;
                    }
                }
            }
        }
    }
}

const setCharAt = (str, index, chr) => {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
}
test('char', () => {
    expect(setCharAt("asdfgh",2,"33")).toBe("as33fgh");
})
test('solution', () => {
    expect(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"])).toBe(14);
});