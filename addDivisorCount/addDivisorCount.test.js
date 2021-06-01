const solution = (left, right) => {
    let answer = 0;
    for(let i = left; i <= right; i++) {
        answer +=  i * (Number.isInteger(Math.sqrt(i)) === false ? 1 : -1);
    }
    return answer;
};

// TIP: 제곱근이 정수면, 약수의 갯수가 홀수다.

// const solution = (left, right) => {
//     let answer = 0;
//     for(let i = left; i <= right; i++) {
//         answer +=  i * (divisorCountIsEven(i) === true ? 1 : -1);
//     }
//     return answer;
// };

// const divisorCountIsEven = (number) => {
//     let count = 0;
//     for (let i = 1; i <= number; i ++) {
//         if(number % i ===0) {
//             count ++;
//         }
//     }
//     return count % 2 === 0; 
// }

test('solution', () => {
  expect(solution(13, 17)).toBe(43);
  expect(solution(24, 27)).toBe(52);
});
