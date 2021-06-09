const solution = (maps) => {

    let history = {'00': true};
    let queue = [[0,0,1]];
    let targetCoord = [maps.length - 1, maps[0].length - 1];
    let answer;
    while(queue[0] ) {
            const [x, y, count] = queue[0];
            if( x === targetCoord[0] && y=== targetCoord[1]) {
                return count;
            }
            if(maps[x+1] && maps[x+1][y] === 1 && !history[x + 1 + "" +y]) {
                history[x + 1 +  "" +y] = true;
                queue.push([x+1,y, count + 1]);
            }
            if(maps[x][y + 1] === 1 && !history[x + "" + (y + 1)]) {
                history[x + "" + (y + 1)] = true;
                queue.push([x,y + 1, count + 1]);
            }
            if(maps[x - 1] && maps[x - 1][y] === 1 && !history[x - 1 + "" + y]) {
                history[x - 1 + "" + y] = true;
                queue.push([x - 1, y, count + 1]);

            }
            if(maps[x][y - 1] === 1 && !history[x + "" + (y - 1)]) {
                history[x + "" + (y - 1)] = true;
                queue.push([x, y - 1, count + 1]);
            }
        queue.shift();
    }
    return answer ? answer : -1;
    // let distances = [];
    // pathdfs(maps, distances)
    // return distances[0] ? Math.min(...distances) : -1;
};


// const pathdfs = (maps, distances, x=0, y=0, history ={}, count = 1) => {
//
//     if(x=== maps.length -1 && y === maps[0].length - 1) {
//         distances.push(count);
//         return;
//     }
//
//     if(maps[x+1][y] && !history[x + 1 + "" +y]) {
//         history[x + 1 +  "" +y] = true;
//         pathdfs(maps, distances, x+1, y, history, count + 1);
//     }
//     if(maps[x][y + 1] && !history[x + "" + (y + 1)]) {
//         history[x + "" + (y + 1)] = true;
//         pathdfs(maps, distances, x, y+1, history, count + 1);
//     }
//     if(maps[x - 1] && !history[x - 1 + "" + y]) {
//         history[x - 1 + "" + y] = true;
//         pathdfs(maps, distances, x - 1, y, history, count + 1);
//     }
//     if(maps[x][y - 1] && !history[x + "" + (y - 1)]) {
//         history[x + "" + (y - 1)] = true;
//         pathdfs(maps, distances, x, y - 1, history, count + 1);
//     }
// }

test('solution', () => {
    expect(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]	)).toBe(11);
    // expect(solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 0], [0, 0, 0, 0, 1]]	)).toBe(-1);
});