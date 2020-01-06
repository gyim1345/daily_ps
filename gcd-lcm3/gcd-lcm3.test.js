function solution(n, m) {
    return [gcd(n,m), n*m/gcd(n,m)]   
 }

const gcd = (n,m) => {
    const temp = [];
    commonDivisor(m).forEach(e1=>commonDivisor(n).forEach(e2 => {if(e1 === e2) temp.push(e1)}))
    return Math.max(...temp);
}

const commonDivisor = (n) => {
   return Array(n).fill().map((_,i) => i+1).filter(x => n % x === 0)

}

// test('gcd', () => {
//     expect(gcd(72, 192)).toBe(24);
// });


// test('commonDivisor', () =>{
//     expect(commonDivisor(72)).toEqual([1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72])
// })

test('solution', () => {
    expect(solution(3,12)).toEqual([3,12])
    expect(solution(72,192)).toEqual([24,576])
})