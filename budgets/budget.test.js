const solution = (budgets, M) => {
  let max = Math.max(...budgets);
  let min = Math.min(...budgets);
  let answer;

  while (min <= max) {
    const mid = Math.floor((max - min) / 2) + min;

    let limit = budgets.reduce((acc, cur, i) => {
      if (mid > cur) {
        return acc + cur;
      }
      return acc + mid;
    }, 0);

    if (limit <= M) {
      min = mid + 1;
      answer = min - 1;
    }

    if (limit > M) {
      max = mid - 1;
      answer = max;
    }
  }

  return answer;
};

test('solution', () => {
  expect(solution([120, 110, 140, 150], 485)).toBe(127);
  expect(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 56)).toBe(10);
  expect(solution([3, 4, 5, 6, 7, 8, 9, 10], 53)).toBe(10);
  expect(solution([3, 4, 5, 6, 222, 333, 444], 555)).toBe(179);
  expect(solution([3, 4, 5, 6, 7, 8, 9, 10], 48)).toBe(7);
});
