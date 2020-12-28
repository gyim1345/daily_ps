const solution = (P) => {
  const count = getTreeTrueCount(P);

  return count > 1000000000 ? 1000000000 : count;
};

function getTreeTrueCount(P) {
  let status = true;
  let falseCount = 0;
  let continuousFalseCount = 0;
  for (let i = 0; i < P.length; i += 1) {
    if (status === false && P[i] === false) {
      continuousFalseCount += 1;
      continue;
    }
    if (P[i] === false) {
      status = false;
      continuousFalseCount = 1;
      continue;
    }
    falseCount += getSum(continuousFalseCount);
    status = true;
    continuousFalseCount = 0;
  }

  return getSum(P.length) - Number(falseCount) - getSum(continuousFalseCount);
}

function getSum(n) {
  return Number((n * (n + 1)) / 2);
}

// function getTreeTrueCount(P) {
//   let count = 0;
//   let prevArray = P;
//   while (prevArray.length > 0) {
//     const array = [];
//     for (let i = 0; i < prevArray.length - 1; i += 1) {
//       array.push(prevArray[i] || prevArray[i + 1]);
//     }
//     count += prevArray.filter((x) => x === true).length;
//     prevArray = array;
//   }
//   return count;
// }

test('solution', () => {
  expect(solution([true, false, false, true, false])).toBe(11);
  expect(solution([true, false, false, true])).toBe(7);
  expect(solution([true, true, true, true])).toBe(10);
  expect(solution([true, false, true, false, true, false, true, false])).toBe(
    32
  );
});
