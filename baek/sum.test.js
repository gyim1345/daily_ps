const solution = (a1,a2) => {

  return a1.filter((v,i) => {
    if( i >= a2[0]-1 && i <= a2[1]-1) {
      return v;
    }
  }).reduce((acc,cur) => {
    return acc +cur;
  })
}


test('solution', () => {
  expect(solution([10,20,30,40,50], [1,3])).toBe(60);
});

// https://www.acmicpc.net/problem/11441