const solution = (n) => {

  const fib = [];
  
  fib[1] =1;
  fib[2] =2;
  fib[3] =4;

  for(j = 4; j <= n; j++) {
      fib[j] = fib[j-1] + fib[j-2] + fib[j-3];
  }
  return fib[fib.length-1];
}


const stringPermutations = str => {
  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
  return str
    .split('')
    .reduce(
      (acc, letter, i) =>
        acc.concat(stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)),
      []
    );
};



test('solution', () => {
  expect(solution(4)).toBe(7);
  expect(solution(7)).toBe(44);
  expect(solution(10)).toBe(274);
});