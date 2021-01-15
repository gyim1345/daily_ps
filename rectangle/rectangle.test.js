function solution(w, h) {
  return w * h - (w  + h - gcd(w,h));
}

const gcd = (a, b) => {
if (b === 0) {
  return a;
}
return gcd(b, a % b);
}


test('solution', () => {
  expect(solution(8, 12)).toBe(80);
});