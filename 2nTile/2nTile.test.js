// const solution = (n) => {
//   const results = [];
//   addResults(results,n); 
//   return results.length;
// }

// const addResults = (results, max, current = 0) => {
//   if(current >= max) {
//     if(current === max) {
//       results.push(current);
//     }
//     return;
//   }
//   addResults(results, max, current + 1);
//   addResults(results, max, current + 2);
// }

////
// const solution = (n) => {
//   return getResult(n);
// }


// const getResult = (number) => {
//   if(number === 2) {
//     return 2;
//   }

//   if(number === 1) {
//       return 1;
//   }

//   if(number === 0) {
//       return 0;
//   }

//   if(number> 2) {
//       return (getResult(number-1) + getResult(number-2))
//   }
// }
/////


const solution = (n) => {
  let results = [0,1,2];
  for(let i= 3; i <= n; i++) {
    results.push(results[i-1] + results[i-2]);
  }
  return results[n];
}




test('solution', () => {
  expect(solution(4)).toBe(5);
});