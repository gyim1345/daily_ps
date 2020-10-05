function solution(numbers) {
  let a= new Set();
  numbers.forEach((number,i) => {
      numbers.forEach((numberA, iA) => {
          if(i === iA) {
              return;
          }
          a.add(number+numberA);
      })
  })
  return [...a].sort();
}


test('solution', () => {
  expect(solution([2,1,3,4,1])).toEqual([2,3,4,5,6,7]);
});