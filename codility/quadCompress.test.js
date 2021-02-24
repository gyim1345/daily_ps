const solution = (arr) => {
  let count = [0,0]
  if(isCompressable(arr)) {
    if(arr[0][0] === 1) {
      return [0,1]
    }
    return [1,0]
  }
  splitByFour(arr, count);
  return count;
}


const splitByFour = (arr, count) => {
  const quadLength = arr.length/2;
  const topLeft = new Array(quadLength).fill().map(_=> new Array(quadLength));
  const topRight = new Array(quadLength).fill().map(_=> new Array(quadLength));
  const bottomLeft = new Array(quadLength).fill().map(_=> new Array(quadLength));
  const bottomRight = new Array(quadLength).fill().map(_=> new Array(quadLength));

  for(let y = 0; y < arr.length; y ++) {
    for(let x = 0; x < arr.length; x ++) {
      if(y < quadLength && x < quadLength) {
        topLeft[y][x] = arr[y][x];
      }
      if(y < quadLength && x >= quadLength) {
        topRight[y][x-quadLength] = arr[y][x];
      }
      if(y >= quadLength && x < quadLength) {
        bottomLeft[y-quadLength][x] = arr[y][x];
      }
      if(y >= quadLength && x >= quadLength) {
        bottomRight[y-quadLength][x-quadLength] = arr[y][x];
      } 
    }
  }

  [topLeft, topRight, bottomLeft, bottomRight].forEach(part =>{
    if(isCompressable(part)) {
      if(part[0][0] === 1) {
        count[1] += 1;
        return;
      }
      count[0] += 1;
      return;
    }

    if(part.length === 2) {
      part.forEach(innerArr => {
        innerArr.forEach(number => {
          if(number === 1) {
            count[1] += 1;
            return;
          }
          count[0] += 1;
        })
      })
      return;
    }
    splitByFour(part, count);
  })
}

const isCompressable = (array) => {
  const number = array[0][0];
  return array.every(innerArr=> innerArr.every(num => num === number));
}


test('solution', () => {
  // expect(solution([[1,1,0,0],[1,0,0,0],[1,0,0,1],[1,1,1,1]])).toEqual([4,9]);
  // expect(solution([[1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1],[0,0,0,0,1,1,1,1],[0,1,0,0,1,1,1,1],[0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,1],[0,0,0,0,1,0,0,1],[0,0,0,0,1,1,1,1]])).toEqual([10,15]);
  expect(solution([[0,0],[0,0]])).toEqual([1,0])
});