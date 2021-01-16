const solution = (a, b) => {
    return a.reduce((acc,cur,index) => {
        return acc + cur * b[index]
    }, 0);
}

test('solution',() => {
  expect(solution([1,2,3,4], [-3,-1,0,2])).toBe(3);
  expect(solution([-1,0,1], [1,0,-1])).toBe(-2);
  }
);
