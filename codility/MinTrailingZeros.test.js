const solution = (A) => {
  const results = [];
  recursive(results, A);
  const zeros = removeNonZero(results);
  return getLeastTrailingZero(zeros);
};

function getLeastTrailingZero(results) {
  return results.sort((a, b) => a.length - b.length)[0].length;
}

function removeNonZero(results) {
  return results.map((number) => number.toString().replace(/[^0]/g, ''));
}
function recursive(results, A, product = 1, xCoord = 0, yCoord = 0) {
  if (xCoord === A.length - 1 && yCoord === A.length - 1) {
    results.push(product * A[yCoord][xCoord]);
  }
  if (A[yCoord][xCoord + 1] !== undefined) {
    recursive(results, A, product * A[yCoord][xCoord], xCoord + 1, yCoord);
  }
  if (A[yCoord + 1] !== undefined) {
    recursive(results, A, product * A[yCoord][xCoord], xCoord, yCoord + 1);
  }
}

test('solution', () => {
  expect(
    solution([
      [100, 0, 0, 0, 0, 0],
      [1, 100, 0, 0, 0, 0],
      [1, 0, 100, 0, 0, 0],
      [1, 0, 0, 100, 0, 0],
      [1, 0, 0, 0, 100, 0],
      [1, 1, 1, 1, 1, 100],
    ])
  ).toBe(1);
  expect(
    solution([
      [2, 10, 1, 3],
      [10, 5, 4, 5],
      [2, 10, 2, 1],
      [25, 2, 5, 1],
    ])
  ).toBe(1);
  expect(
    solution([
      [10, 1, 10, 1],
      [1, 1, 1, 10],
      [10, 1, 10, 1],
      [1, 10, 1, 1],
    ])
  ).toBe(2);
  expect(
    solution([
      [10, 10, 10],
      [10, 0, 10],
      [10, 10, 10],
    ])
  ).toBe(1);
});
