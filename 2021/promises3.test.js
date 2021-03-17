const solution = (num1, num2, multiplier) => {
  return getData(num1, num2, multiplier).then((value) => {
    return getMax(value);
  });
}

const getMax = (value) => {
  return Math.max(value.first, value.second);
}

function getData(num1, num2, multiplier) {
  return Promise.resolve({
    first: num1 * multiplier,
    second: num2 * multiplier
  });
}


test('solution', () => {
  return expect(solution(12,45, 2)).resolves.toBe(90);
});
  