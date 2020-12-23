function solution(A) {
  const max = Math.max(...A);
  if (max < 1) {
    return 1;
  }
  A.sort((a, b) => a - b);
  const seta = [...new Set(A)];
  for (let i = 1; i <= max; i += 1) {
    if (seta[i - 1] !== i) {
      return i;
    }
  }

  return max + 1;
}

test('solution', () => {
  expect(solution([1, 3, 6, 4, 1, 2])).toEqual(5);
  expect(solution([1, 2, 3])).toEqual(4);
  expect(solution([-1, -3])).toEqual(1);
});
