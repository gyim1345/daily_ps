const solution = (juice, capacity) => {
  const vacantSpaceAmount = juice.map((j, i) => {
    return capacity[i] - j;
  });

  const mixedCounts = vacantSpaceAmount.map((space, i) => {
    if (space === 0) {
      return 1;
    }
    const sortedJuice = juice
      .filter((_, index) => index !== i)
      .sort((a, b) => a - b);

    let mixedCount = 1;
    let currentEmptySpace = space;
    for (let i = 0; i < sortedJuice.length; i += 1) {
      currentEmptySpace -= sortedJuice[i];
      if (currentEmptySpace < 0) {
        break;
      }
      mixedCount += 1;
    }
    return mixedCount;
  });
  return Math.max(...mixedCounts);
};

test('solution', () => {
  expect(solution([10, 2, 1, 1], [10, 3, 2, 2])).toEqual(2);
  expect(solution([1, 2, 3, 4], [3, 6, 4, 4])).toEqual(3);
  expect(solution([2, 3], [3, 4])).toEqual(1);
  expect(solution([1, 1, 5], [6, 5, 8])).toEqual(3);
});
