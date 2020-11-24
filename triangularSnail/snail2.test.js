const solution = (n) => {
  const array = new Array(n).fill(0).map((e,i) => new Array(i+1).fill(0));

  let x = 0;
  let y = 0;
  let count = 1;
  let moveType = 0;

  while(array[y] !== undefined && array[y][x] === 0) {
    array[y][x] = count;
    
    count += 1;
    const nextXDiff = move[moveType].x
    const nextYDiff = move[moveType].y
    
    if(array[y+nextYDiff] && array[y+nextYDiff][x+nextXDiff] === 0) {
      x += nextXDiff;
      y += nextYDiff;
      continue;
    }
    
    let times = 0;
    while(!array[y + move[moveType].y] && times < 3) {
      moveType = (moveType + 1) % 3;
      times += 1;
    }
    while(array[y + move[moveType].y] && array[y + move[moveType].y][x + move[moveType].x] !== 0 && times < 3) {
      moveType = (moveType + 1) % 3;
      times += 1;
    }
    
    x += move[moveType].x;
    y += move[moveType].y;
  }
  
  return parse(array);
}

const parse = (array) => {
  let newArray = [];
  array.forEach(x=> { newArray = [...newArray, ...x] });
  return newArray;
}

const move = [
  { y: 1, x:0 },
  { y: 0, x: 1 },
  { y: -1, x: -1}
]


test('solution', () => {
  // expect(solution(4)).toEqual([1,2,9,3,10,8,4,5,6,7]);
  // expect(solution(5)).toEqual(  [1,2,12,3,13,11,4,14,15,10,5,6,7,8,9]);
  // expect(solution(6)).toEqual([1,2,15,3,16,14,4,17,21,13,5,18,19,20,12,6,7,8,9,10,11]);
  expect(solution(1)).toEqual([1]);
  // expect(solution(2)).toEqual([1,2,3]);
  // expect(solution(3)).toEqual([1,2,3]);
  // expect(solution(6)).toEqual([1,2,15,3,16,14,4,17,21,13,5,18,19,20,12,6,7,8,9,10,11]);
});