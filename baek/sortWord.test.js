const solution = (strings) => {
  const words = new Set(strings);
  const arrWords = [...words].sort((a,b) => {
    if(a.length === b.length) {
      return a.localeCompare(b);
    }
    return a.length - b.length
  }).filter( x=> {
    return isNaN(x);
  })

  return arrWords;
}
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

test('solution', () => {
  expect(solution([
    "13",
    "but",
    "i",
    "wont",
    "hesitate",
    "no",
    "more",
    "no",
    "more",
    "it",
    "cannot",
    "wait",
    "im",
    "yours"])).toEqual([
      "i",
      "im",
      "it",
      "no",
      "but",
      "more",
      "wait",
      "wont",
      "yours",
      "cannot",
      "hesitate",]);
});