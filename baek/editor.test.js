const solution = (string, commands) => {

  let newString = string;
  let index = newString.length;
  commands.forEach(command => {
    if(index < 0) {
      index = 0;
    }
    if(command.length === 1) {
      if(command === 'L' && newString.length > 0) {
        index --;
      }
      if(command === 'D' && index < newString.length) {
        index ++;
      }
      if(command === 'B' && newString.length > 0) {
        newString = newString.substring(0, index - 1) + newString.substring(index );
        index --;
      }
      return;
    }

    const insertVariable = command[command.length - 1]; 
    newString = newString.substring(0, index) + insertVariable + newString.substring(index);
    index ++;
  })

  return newString;
}


test('solution', () => {
  expect(solution("abcd", ["P x", "L", "P y"])).toBe("abcdyx");

  expect(solution("abc", ["L", "L","L","L", "P x", "L", "B","P y"])).toBe("yxabc");

  expect(solution("dmih", ["B", "B", "P x", "L", "B", "B", "B", "P y", "D", "D", "P z"])).toBe("yxz");

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
  solution()
  process.exit();
});

