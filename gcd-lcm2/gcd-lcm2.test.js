const solution = (n, m) => {
   return  [gcd(n, m), (n * m) / gcd(n, m)];
}

const gcd = (n,m) =>{
   return Math.max(...commonDivisor(n).filter(x => commonDivisor(m).includes(x)));
}
const commonDivisor = (n) => {
  return Array(n).fill().map((_, i) => i + 1).filter(x => n % x === 0);
}
  test('gcd', () => {
    expect(gcd(72, 192)).toBe(24);
});
test('commonDivisor' , () =>{ 
    expect(commonDivisor(72)).toEqual([1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72]);
    expect(commonDivisor(192)).toEqual([1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 192]);
})

test('solution' , () =>
    expect(solution(72,192)).toEqual([24,576])
)