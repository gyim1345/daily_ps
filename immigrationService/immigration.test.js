const solution = (n, times) => {
  let min = 0;
  let max = times[times.length - 1] * n;
  while (min <= max) {
    const mid = Math.floor((max - min) / 2) + min;
    let immigrationCount = times.reduce((acc, cur) => {
      return acc + Math.floor(mid / cur);
    }, 0);

    if (immigrationCount >= n) {
      max = mid - 1;
    }
    if (immigrationCount < n) {
      min = mid + 1;
    }
  }
  return min;
};

test('solution', () => {
  expect(solution(6, [7, 10])).toBe(28);
});
