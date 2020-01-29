// const solution = (numbers) =>{
//  console.log(numbers.sort(compare))
//  return numbers.sort(compare)[0] === 0 ? '0' : numbers.join('');
// }
const compare = (a, b) => {
  console.log(a, b, a+''+b, b+''+a, +(a + '' + b) > +(b + '' + a) ? -1 : 1)
  return +(a + '' + b) > +(b + '' + a) ? -1 : 1
}

const solution = (numbers) =>{
  let numbs = [1,6,3,4,5,2,7]
    console.log(numbs.sort(compare1))
  return numbers.sort(compare1)
 }

const compare1 = (a, b) => {
console.log(a,b, a-b>0 ? 1 : -1)
  return a-b>0 ? 1 : -1
}



//   expect(solution([89, 989, 9,123])).toBe('998989123');
// 95> 59 맞다면 -1 틀리면 1
// 90999 > 99909 맞다면 -1 틀리면  1

test('solution', () => {
  // expect(solution([989, 9, 99, 90, 91, 999])).toBe('9999999899190');
  // expect(solution([9, 989, 89])).toBe('998989');
  expect(solution([89, 989, 987,123])).toBe('998989123');
  // expect(solution([6, 10, 2])).toBe('6210');
//   expect(solution([3, 30, 34, 5, 9])).toBe('9534330');
//   expect(solution([0, 0, 0, 0, 0])).toBe('0');
});

// test('compare', () => {
//   expect(compare(909, 99)).toBe(1);
//   expect(compare(95, 96)).toBe(1);
//   expect(compare(3, 30)).toBe(-1);
//   expect(compare(30, 3)).toBe(1);
//   expect(compare(5, 5)).toBe(1);
// });