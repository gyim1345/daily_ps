const solution = (bomb, box, k) => {

  const max = Math.max(...bomb.flat());
  const array = new Array(max + 1).fill(0).map(_=> new Array(max + 1).fill(0));
  bomb.forEach(coord=> {
    const [y, x] = coord;
    array[y][x] = "bomb";
  })
  box.forEach(coord=> {
    const [y, x] = coord;
    array[y][x] = "box";
  })

  let count =0;
  for(let y = 0; y < array.length; y ++) {
    for(let x = 0; x < array[0].length; x++) {
      if(array[y][x] === 'bomb') {
        deleteBomb(array, k, [y,x], max);
        count ++;
      }
    }
  }
  return count;
}

const deleteBomb = (array, k, currentPosition, max) => {

  const queue = [currentPosition];
  const [y,x] = currentPosition;
  array[y][x] = 0;
  while(queue[0]) {
    const [yCurrent, xCurrent] = queue.shift();
  // x + 3
    for(let x = xCurrent + 1; x <= xCurrent + k && x <= max; x++) {
      if(array[yCurrent][x] === 'box') {
        break;
      }
      if(array[yCurrent][x] === 'bomb') {
        queue.push([yCurrent, x]);
        array[yCurrent][x] = 0;
      }
    }

  // x - 3
    for(let x = xCurrent - 1; x >= xCurrent - k && x >=0; x--) {
      if(array[yCurrent][x] === 'box') {
        break;
      }
      if(array[yCurrent][x] === 'bomb') {
        queue.push([yCurrent, x]);
        array[yCurrent][x] = 0;
      }
    }


  //y + 3
    for(let y = yCurrent + 1; y <= yCurrent + k && y <= max; y++) {
      if(array[y][xCurrent] === 'box') {
        break;
      }
      if(array[y][xCurrent] === 'bomb') {
        queue.push([y, xCurrent]);
        array[y][xCurrent] = 0;
      }
    }

  // y - 3
    for(let y = yCurrent - 1; y >= yCurrent - k && y >=0; y--) {
      if(array[y][xCurrent] === 'box') {
        break;
      }
      if(array[y][xCurrent] === 'bomb') {
        queue.push([y, xCurrent]);
        array[y][xCurrent] = 0;
      }
    }
  }
}


test('solution', () => {
  expect(solution([[3,1],[0,1],[5,1],[0,4],[4,4],[5,3]], [[1,1],[2,2]], 3)).toBe(3);
  expect(solution([[3,1],[0,1],[5,1],[0,4],[4,4],[5,3]], [[1,1],[2,2]], 1)).toBe(6);
});