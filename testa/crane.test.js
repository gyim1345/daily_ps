const crane = (board, moves) => {

    let array = [];
    moves = moves.map(x=> x= x-1)
    while(moves[0] !== undefined){
    let found = false;
    let y = 0;
    let x = moves.shift(); 
    while(!found) {
        if(board[y][x] !==0) {
            array.push(board[y][x]);
            board[y][x] = 0;
            found = true;
        }
        if(board[y+1] === undefined){
            found = true;
        }
        y += 1;
    }
    
    
}
let finished = false;
let count = 0;

while(!finished) {
    finished = true;
    for(let i =0; i<array.length; i++) {
        if(array[i]=== array[i+1]){
            console.log(array[i], array[i+1])
            count += 2;
            array.splice(i, 2);
            finished = false;
        } 
    }


}

    return count;
}


test('crane', () => {
    expect(crane([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],	[1,5,3,5,1,2,1,4])).toBe(4);
})