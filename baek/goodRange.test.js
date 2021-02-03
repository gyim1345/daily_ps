const solution = (stringNumbers, target) => {
  const numbers = stringNumbers.split(" ").map(el => Number(el)).sort((a,b) => a - b);
  const targetNumber = Number(target);

  // let range = [1];
  // for(let i = 0; i < numbers.length; i ++) {
  //   if(numbers[i] === targetNumber) {
  //     return 0;
  //   }

  //   if(numbers[i] < targetNumber) {
  //     range.push(numbers[i]);
  //     continue;
  //   }
  //   if(numbers[i] > targetNumber) {
  //     range.push(numbers[i]);
  //     break;
  //   }

  // }
  // const min = range[range.length - 2] + 1;
  // const max = range[range.length - 1] - 1;
  // let answer = 0;
  // for(let i  = 0;  i <= targetNumber - min; i ++) {
  //   const sum = max - targetNumber + 1;
  //   answer += sum;
  // }

  // return answer - 1;

  if(numbers.includes(targetNumber)) {
    return 0;
  }

  let left = 1;
  let right = 1
  for(let a of numbers) {
      if(targetNumber > a) {
          left = a + 1;
      } else {
          right = a - 1;
          break;
      }
  }

  return (targetNumber - left) * (right - targetNumber + 1) + (right - targetNumber)

}


test('solution', () => {
  expect(solution("1 7 14 10", "2")).toBe(4);
  expect(solution("4 8 13 24 30", "10")).toBe(5);
  expect(solution("10 20 30 40 50", "30")).toBe(0);
  expect(solution("3 7 12 18 25 100 33 1000", "59")).toBe(1065);
});