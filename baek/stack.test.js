const solution = (n,array) => {
  let stack = [];
  let result = [];
  let index = 0;
  for(let i = 1; i <= 8; i++) {
    stack.push(i);
    result.push('+');

    while(array[index] && stack[stack.length-1] === array[index]) {
      stack.pop();
      result.push('-');
      index++;
    }
  }
  
  if(stack[0]) {
    return 'NO';
  }
  return result
}

  //   let stack = [];
//   let result = [];
//   let count = 1;
//   let index = 0;
//   while(index <= n) {
//     while(stack[stack.length - 1] === array[0] && array[0]) {
//       stack.pop();
//       array.shift();
//       result.push('-');
//     }
    
//     if(!array[0]) {
//       break;
//     }

//     stack.push(count);
//     result.push('+')
//     count ++;
//     index++;
//   }
  
//   let answer;
//   stack[0] ? answer= 'NO' : answer = result;
//   return answer;
// }


test('solution', () => {
  expect(solution(8, [4,3,6,8,7,5,2,1])).toEqual(['+','+','+','+','-','-','+','+','-','+','+','-','-','-','-','-',
  ]);
  expect(solution(5, [1,2,5,3,4])).toBe('NO')

});
