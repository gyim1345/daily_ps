const solution = (n) => {
  const array = new Array(n).fill(0).map((e,i) => new Array(i+1).fill(0));

  array[0][0] =1;

  fill(array);
  let newArray = [];
  array.forEach(x=> { newArray = [...newArray, ...x] });

  return newArray;
}

const fill = (array, x= 0, y=0, moveIndex = 0, number = 2, breakCount = 0) => {
  if(breakCount > 2) {
    return;
  }

  const xDifference = move[moveIndex].x;
  const yDifference = move[moveIndex].y;
  const newXIndex = x + xDifference;
  const newYIndex = y + yDifference;
  if(array[newYIndex]) {
    const nextNumber = array[newYIndex][newXIndex];
    if(nextNumber === 0) {
      array[newYIndex][newXIndex] = number;
      fill(array,x + xDifference, y+ yDifference, moveIndex, number +1, 0);
      return;
    }  
  }

  fill(array,x, y, (moveIndex +1) % 3, number, breakCount + 1);

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
  expect(solution(89)).toEqual([1]);
  // expect(solution(6)).toEqual([1,2,15,3,16,14,4,17,21,13,5,18,19,20,12,6,7,8,9,10,11]);
});