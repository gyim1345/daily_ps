const solution = (n, m, prices) => {
  prices.sort((a,b) => b-a);
  const answer = prices.reduce((acc, cur, index) => {
    if(index <= n && index <= m) {
      const curCustomerPriceLimit = Number(cur);
      if(acc[0] * acc[1] < curCustomerPriceLimit * (index +1)) {
        return [curCustomerPriceLimit, index];
      }
    }
    return acc;
  }, [0,0])
  return `${answer[0]} ${answer[0] *(answer[1] + 1)}`;
}

// const solution = (n, m, prices) => {

//   let num = 0;
//   let sum = 0;
//   let result;
//   prices.sort((a,b) => a-b);
// 	for(let i = 0; i < Math.min(n,m); i++) {
//     if(m - i < n)
//       result = prices[i] * (m - i);
//     else
//       result = prices[i] * n;
      
//     if(sum < result) {
//       num = prices[i];
//       sum = result;
//     }
//   }

//   return `${num} ${sum}`;
// }


test('solution', () => {
  expect(solution(5,4, ["2", "8", "10", "7"])).toBe("7 21");
});

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//   input.push(line);
// })
//   .on('close', function () {
//   //solution
//   process.exit();
// });