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
    const finalLength = Number(input);
    const lengths = [64,32,16,8,4,2,1];
    let count = 0;
    let total = 0;

    lengths.forEach(numb => {
      if(total + Number(numb) <= finalLength) {
        count += 1;
        total += Number(numb);
    }
})
    console.log(count)
  process.exit();
});