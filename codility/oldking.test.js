const solution = (N, M, X, Y) => {
  if (X.length === 1 && Y.length === 1) {
    return 0;
  }
  if (X.length % 2 !== 0) {
    return 0;
  }
  const mineCountPerPerson = X.length / 2;

  X.sort((a, b) => a - b);
  Y.sort((a, b) => a - b);

  let xCount = X[mineCountPerPerson] - X[mineCountPerPerson - 1] || 0;
  let yCount = Y[mineCountPerPerson] - Y[mineCountPerPerson - 1] || 0;

  return xCount + yCount;
};

test('solution', () => {
  expect(solution(5, 5, [0, 4, 2, 0], [0, 0, 1, 4])).toBe(3);
  expect(solution(1, 1, [0], [0])).toBe(0);
  expect(solution(1, 3, [0, 0, 0], [2, 1, 0])).toBe(0);
  expect(solution(4, 1, [3, 1], [0, 0])).toBe(2);
});
