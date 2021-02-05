const solution = (string) => {
  const numbers = string.split(" ").map(x=> Number(x));

  for(let i = 1; ; i++) {
    let count = 0;
    for(let j = 0; j < 5; j ++) {
      if(i % numbers[j] === 0) {
        count += 1;
      }
      if(count >= 3) {
        return i;
      }
    }
  }
}
//   const multiples = new Set();
//   for(let i = 0; i < numbers.length; i ++) {
//     for(let j = 0; j < numbers.length; j ++) {
//       multiples.add(numbers[i] * numbers[j]/gcd(numbers[i], numbers[j]));
//     }
//   }
//   const arrMultiples = [...multiples];
//   arrMultiples.sort((a,b) => a-b);
//   for(let i = 0; i < arrMultiples.length; i ++) {
//     let count = 0;
//     for(let j = 0; j < arrMultiples.length; j ++) {
//       if(arrMultiples[i] % numbers[j] === 0) {
//         count += 1;
//       }
//     }
//     if(count >= 3) {
//       return arrMultiples[i]; 
//     }
//   }
//   return 0;
// }

// const gcd = (n,m) => {
//   const temp = [];
//   commonDivisor(m).forEach(e1=>commonDivisor(n).forEach(e2 => {if(e1 === e2) temp.push(e1)}))
//   return Math.max(...temp);
// }

// const commonDivisor = (n) => {
//  return Array(n).fill().map((_,i) => i+1).filter(x => n % x === 0)
// }


test('solution', () => {
  expect(solution("30 42 70 35 90")).toBe(210);
});
