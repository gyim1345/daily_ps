// function solution(n) {
  // let answer = "1";

//   for(let i = 1; i < n; i ++) {
//       let temp = '';
//       for(let j = 0; j < answer.length; j++) {
//         if(answer[j] + answer[j+1] === '11') {
//           temp += conversion['11'];
//           j++;
//            continue;
//          }
//         if(answer[j] == '2') {
//           temp += conversion['2'];
//           continue;
//         }
//         if(answer[j] == '1') {
//           temp += conversion['1'];
//         }
//       }
      
//       answer = temp;        
//   }
//   return Number(answer);
// }

const solution = (n) => {
  let answer = '1';
  for(let i = 1; i < n; i ++) {
    let currentLetter = answer[0];
    let temp = '';
    let count = 1;
    for(let j = 1; j < answer.length; j++ ) {
      if(currentLetter === answer[j]) {
        count ++;
        continue;
      } else {
        temp = temp + currentLetter + count;
        count = 1;
        currentLetter = answer[j];
      }
    }
    answer = temp + currentLetter + count;
  }

  return answer;
}

test('solution', () => {
  expect(solution(1)).toBe('1');
  expect(solution(2)).toBe('11');
  expect(solution(3)).toBe('12');
  expect(solution(4)).toBe('1121');
  expect(solution(5)).toBe("122111");
  expect(solution(6)).toBe("112213");
  
});