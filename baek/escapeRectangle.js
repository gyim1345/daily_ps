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
    const startX = 0;
    const startY = 0;
    const [currentX, currentY, width, height] = input[0].split(' ');
    const diff = [];
    diff.push(Number(currentX)- Number(startX));
    diff.push(Number(width)- Number(currentX));
    diff.push(Number(currentY)- Number(startY));
    diff.push(Number(height)- Number(currentY));
    console.log(Math.min(...diff));
  process.exit();
});
