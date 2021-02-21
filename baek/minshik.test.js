const solution = (arr) => {
  let array = [];
  arr.forEach(time => {
   const [a,b] = time.split(' ');
    array.push(a-b);
  })
  array.sort((a,b) => a-b);
  const length = arr.length
  return Math.abs(array[length / 2] - array[length / 2 - 1]);
}


test('solution', () => {
  expect(solution(["10 9", "2 5"])).toBe(4);
});
