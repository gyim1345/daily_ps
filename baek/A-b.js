const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
    const [A, B] = input[0].split(' ');
    console.log(Number(A) - Number(B));
  process.exit();
});