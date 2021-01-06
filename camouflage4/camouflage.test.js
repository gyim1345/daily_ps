const solution = (clothes) => {
  const type = clothes.map((cloth) => cloth[1]);
  const count = {};
  type.forEach((clothtype) => {
    if (!count[clothtype]) {
      count[clothtype] = 1;
      return;
    }
    count[clothtype] += 1;
  });

  return Object.values(count).reduce((acc, cur) => acc * (cur + 1), 1) - 1;
};

test('solution', () => {
  expect(
    solution([
      ['yellow_hat', 'headgear'],
      ['blue_sunglasses', 'eyewear'],
      ['green_turban', 'headgear'],
    ])
  ).toBe(5);
  expect(
    solution([
      ['crow_mask', 'face'],
      ['blue_sunglasses', 'face'],
      ['smoky_makeup', 'face'],
    ])
  ).toBe(3);
});
