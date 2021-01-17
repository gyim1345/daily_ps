const solution = (count, moves) => {

  let ballons = new Array(count).fill(0).map((_,i)=> i+1)
  const array = [1];
  let currentIndex = getPosition(ballons.length, moves[0], 0);
  ballons.shift();
  moves.shift();
  while(ballons[0]) {
    array.push(ballons[currentIndex])
    let nextIndex = getPosition(ballons.length, moves[0], currentIndex)
    ballons = ballons.filter((v,i) => i !== currentIndex);
    currentIndex = nextIndex -1;
    moves.shift();
  }
  return array;
}


const getPosition = (ballonsLength, position, currentIndex) => {
  if((currentIndex + position) % ballonsLength-1 === -1) {
    return ballonsLength -1
  }
  if(position >0) {
    return (currentIndex + position-1) % ballonsLength
  }


  if(currentIndex > position) {
    return currentIndex - position;
  }

  return ballonsLength - (position - currentIndex);
}

//  2 3 4 5

test('solution', () => {
  expect(solution(5,[3,2,1,-3,-1])).toEqual([1,4,5,3,2]);
  // expect(getPosition(5, 3, 0)).toBe(4)

});

// https://www.acmicpc.net/problem/2346