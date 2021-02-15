// const solution = (num) => {
//   let a = [];
//   calculate(num, a);
//   console.log(a)
//   return Math.min(...a)
// }

// const calculate = (num, a, count = 0) => {
//   if(num === 1) {
//     a.push(count);
//     return;
//   }
//   if(num % 3 === 0) {
//     calculate(num/3 ,a, count + 1);
//   }
//   if(num % 2 === 0) {
//     calculate(num/2,a, count + 1);
//   }
//   calculate(num - 1,a, count + 1);
// }



const solution = (input) => {
  const number = Number(input);

  const history = new Array(number + 1).fill(0);

  for(let i = 2; i < history.length; i ++) {
    history[i] = history[i-1] + 1;
    if(i % 2 === 0 && i % 3 === 0) {
      history[i] = Math.min(history[i], history[i/2] + 1, history[i/3] + 1);
      continue;
    }
    if(i % 2 === 0) {
      history[i] = Math.min(history[i], history[i/2] + 1);
      continue;
    }
    if(i % 3 === 0) {
      history[i] = Math.min(history[i], history[i/3] + 1);
    }
  }

  return history[number]
}


test('solution', () => {
  expect(solution(2)).toBe(1);
  expect(solution(10)).toBe(3);
});

