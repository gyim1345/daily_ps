const solution = (input) => {
  // const numbers = input.split(" ");
  // numbers.sort((a,b) => a-b);
  // const answer = numbers.reduce((acc, cur) => {
  //   const currentNumber = Number(cur);
  //   if(acc === 1) {
  //     return acc * currentNumber;
  //   }
  //   if(acc % currentNumber === 0) {
  //     return acc;
  //   }
  //   return acc * currentNumber
  // },1)

  const numbers = input.split(" ").map(str => Number(str));
  
  const Max = Math.max(...numbers);
  const Min = Math.min(...numbers);
  return Max * Min
}


test('solution', () => {
  expect(solution("4 2")).toBe(8);
});
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
})
  .on('close', function () {
  //solution
  process.exit();
});