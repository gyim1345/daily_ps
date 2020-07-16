const solution = (board) => {
    let answer = 0;
    let arrayNumbers = [];
    
    // board.forEach(numbers => numbers.forEach(number => arrayNumbers.push(number)));
    // answer = Math.max(...arrayNumbers);
    board.forEach(numbers => arrayNumbers.push(Math.max(...numbers)) );
    answer = Math.max(...arrayNumbers);
    console.log(arrayNumbers)

    for (let y = 1; y < board.length; y += 1) {
        for (let x = 1; x < board[0].length; x += 1) {
            if (isSquare(x, y, board)) {
                board[y][x] = Math.min(board[y-1][x-1], board[y - 1][x], board[y][x - 1]) + 1;
            } 
            if(board[y][x] > answer) {
                answer = board[y][x]
            }
        }
    }
    
    return Math.pow(answer, 2) ;
}

const isSquare = (x, y, board) => {
    return board[y][x] !== 0 && board[y - 1][x]  !== 0 && board[y][x - 1]  !== 0 && board[y - 1][x - 1] !== 0
}

//     for(let y = 0; y< board.length; y+= 1) {

//         for(let x = 0; x < board[0].length;  x+= 1){

//             if(board[y][x] >= 1) {
//                 let ylength = board.length;
//                 let xlength = 0;
//                 let maxLength = board[0].length;
//                 for(let y1 = y; y< board.length ; y1 += 1) {

//                     for(let x1 = x; x<board[0].length; x1 += 1) {
//                         console.log(board[y1][x1], board, y1,x1)
//                         if(board[y1][x1] === 1 || board[y1][x1] === 2) {
//                             board[y1][x1] = 2;
//                             xlength += 1;
//                         } else break;
//                     }
//                     maxLength > x + xlength ? maxLength = x + xlength : maxLength;
//                     ylength > y + xlength ? ylength = y + xlength : ylength
//                     xlength = 0;
//                 }
//             }
//         }
//     }

//     return 1;
// }


test('solution', () => {
    // expect(solution([[0, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [0, 0, 1, 0]])).toBe(9);
    // expect(solution([[0, 0], [0, 1]])).toBe(1);
    // expect(solution([[0,0,1,1],[1,1,1,1]])).toBe(4);
    // expect(solution([
    // [1, 1, 1, 1, 1],
    // [1, 1, 1, 1, 1],
    // [1, 1, 1, 1, 1],
    // [0, 0, 1, 1, 1]])).toBe(9);
    // expect(solution([[1, 1, 1, 1], [0, 1, 1, 1], [0, 1, 1, 1]])).toBe(9);
    expect(solution([
        [1, 1, 1, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 1, 1, 1, 1],
    ])).toBe(16)
    // expect(solution([
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0],
    // ])).toBe(0)

    // expect(solution([[0], [1]])).toBe(1)

    // expect(solution([
    //     [1,0],[0,0]
    // ])).toBe(1)

});