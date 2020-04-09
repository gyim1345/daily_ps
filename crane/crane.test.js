const crane = (board, moves) => {
    const array = [];
    let count = 0;
    let y =0;
    while(moves.length>0){
        console.log(board, moves)

        if(board[y][moves[0]-1] !== 0 ){
            array.push(board[y][moves[0]-1]);
            board[y][moves[0]-1] =0;
            moves.shift();
            y = 0;
        }
        else {
        y += 1;
        if(y === board.length){
            y = 0;
            moves.shift();
        }

        }
        count += 1;
    }

    
    let count1 =0;
    let pairCount =0;
    let Length = array.length
    while(count1 <Length) {
        if(array[count1] === array[count1+1]) {
            pairCount += 1;
            array.splice(count1,2);
            Length = array.length
            console.log(array)
            count1=0;
        }
        count1 += 1;
    }

    return pairCount*2;
}

test('crane', ()=> {
    expect(crane([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],[1,5,3,5,1,2,1,4])).toBe(4)
})