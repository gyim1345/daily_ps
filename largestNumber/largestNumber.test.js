const solution = (number) => {
  const newNumber = [...number];
  newNumber.sort((a, b) => {
    let bCurrentNumber = b.toString()[0];
    let aCurrentNumber = a.toString()[0];
    if (bCurrentNumber === aCurrentNumber) {
      let index = 0;
      while (bCurrentNumber === aCurrentNumber) {
        index += 1;
        bCurrentNumber = b.toString()[index];
        aCurrentNumber = a.toString()[index];

        if (bCurrentNumber === undefined) {
          const bPrevNumber = Number(b.toString()[index - 1]);
          const aNumber = Number(a.toString()[index]);
          if (bPrevNumber > aNumber) {
            return 1;
          }
          if (bPrevNumber < aNumber) {
            return -1;
          }
          return 0;
        }
        if (aCurrentNumber === undefined) {
          break;
        }
      }
    }
    return bCurrentNumber - aCurrentNumber;
  });
  return Number(newNumber.join(''));
};

test('solution', () => {
  expect(solution([6, 10, 2])).toBe(6210);
  expect(solution([3, 30, 34, 5, 9])).toBe(9534330);
});
