const solution = (A) => {
  const matchlength = A[0].length;

  const fullMatchCoord = {};

  A.forEach((hor) => {
    const joined = hor.join('');
    let flippedIndex = '';
    let flippedIndexOne = '';
    for (let i = 0; i < matchlength; i += 1) {
      if (joined[i] == 0) {
        flippedIndex += i;
      } else {
        flippedIndexOne += i;
      }
    }
    if (fullMatchCoord[flippedIndex]) {
      fullMatchCoord[flippedIndex] += 1;
    } else {
      fullMatchCoord[flippedIndex] = 1;
    }

    if (fullMatchCoord[flippedIndexOne]) {
      fullMatchCoord[flippedIndexOne] += 1;
    } else {
      fullMatchCoord[flippedIndexOne] = 1;
    }
  });
  return Math.max(...Object.values(fullMatchCoord));
};

test('solution', () => {
  expect(
    solution([
      [0, 0, 0, 0],
      [0, 1, 0, 0],
      [1, 0, 1, 1],
    ])
  ).toBe(2);
  expect(
    solution([
      [0, 1, 0, 1],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [1, 0, 1, 0],
    ])
  ).toBe(4);
});
