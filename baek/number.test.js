const solution = (number) => {

  let numbers = new Array(number).fill(0).map((_,i) => i+1);
  let count = numbers.reduce((acc,cur) => {
    const split = cur.toString().split('');
      if(split.length === 1 || split.length === 2) {
        return acc + 1;
      }
      let diff;
      let isSequence = false;
      split.forEach((number,i) => {
        if(i === 0) {
          diff = number - split[i+1];
          return;
        }
        if(number - split[i+1] === diff) {
          isSequence = true;
        }
      })
      if(isSequence) {
        return acc+1;
      }
      return acc;
    }, 0)
  
  return count;
}


test('solution', () => {
  expect(solution(110)).toBe(99);
  expect(solution(1)).toBe(1);
  expect(solution(219)).toBe(105);
  expect(solution(1000)).toBe(144);
});

// https://www.acmicpc.net/problem/1065