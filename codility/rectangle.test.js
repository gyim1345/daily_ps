const solution = (A, B) => {
  const counts = {};

  for (let i = 0; i < A.length; i += 1) {
    if (counts[A[i]]) {
      counts[A[i]] += 1;
    } else {
      counts[A[i]] = 1;
    }
    if (A[i] !== B[i]) {
      if (counts[B[i]]) {
        counts[B[i]] += 1;
      } else {
        counts[B[i]] = 1;
      }
    }
  }

  return Math.max(...Object.values(counts));
};

test('solution', () => {
  expect(solution([2, 3, 2, 3, 5], [3, 4, 2, 4, 2])).toBe(3);
  expect(solution([2, 3, 1, 3], [2, 3, 1, 3])).toBe(2);
  expect(solution([2, 10, 4, 1, 4], [4, 1, 2, 2, 5])).toBe(3);
});
