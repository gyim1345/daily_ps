// const solution = (string) => {
//   const [n , k] = string.split(' ');

//   let circleString = '';
//   for(let i = 1; i <= Number(n); i ++) {
//     circleString += i;
//   }
//   let count = 0;
//   let answer = "<"
//   while(circleString[0]) {
//     count ++;
//     const first = circleString[0];
//     const other = circleString.substring(1);
//     if(count >=k) {
//       circleString = other;
//       count = 0;
//       answer += `${first}, `
//       continue;
//     }
//     circleString = other + first;
//   }
//   return answer.substring(0, answer.length - 2) + '>';
// }

const solution = (string) => {
  const [n , k] = string.split(' ');

  let circleString = '';
  for(let i = 1; i <= Number(n); i ++) {
    circleString += i;
  }
  let currentIndex = 0;
  let answer = [];

  while(circleString[0]) {
    currentIndex = (currentIndex + (k -1)) % circleString.length;
    const newString = circleString.substring(0, currentIndex) + circleString.substring(currentIndex + 1);
    const removedString = circleString[currentIndex]
    answer.push(removedString)
    circleString = newString;
  }

  const final = `<${answer.join(', ')}>`;
  return final;
}


test('solution', () => {
  expect(solution("7 3")).toBe("<3, 6, 2, 7, 5, 1, 4>");
});
