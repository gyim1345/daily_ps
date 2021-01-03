const solution = (brown, yellow) => {
  const sum = brown + yellow;
  for (let height = 2; height < sum; height += 1) {
    let width = sum / height;
    if (width % 1) {
      continue;
    }
    if ((width - 2) * (height - 2) === yellow) {
      return [width, height];
    }
  }
};

test('solution', () => {
  expect(solution(10, 2)).toEqual([4, 3]);
  expect(solution(24, 24)).toEqual([8, 6]);
});
