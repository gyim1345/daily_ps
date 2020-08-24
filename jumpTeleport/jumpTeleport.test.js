const solution = (distance) => {

  let count = 1;
  while(distance > 1) {
    console.log(distance)
    count += distance % 2;
    distance = Math.floor(distance / 2);
  }
  return count;
  // const allPossibleCount = [];
  // dfs(distance, allPossibleCount)

  // const min = allPossibleCount.sort()[0]
  // return min
}



// const dfs = (distance, allPossibleCount, currentPosition = 1, currentCost = 1) => {

//   if (currentPosition === distance) {
//     allPossibleCount.push(currentCost);
//     return;
//   }
//   if (currentPosition > distance) {
//     return;
//   }

//   dfs(distance, allPossibleCount, currentPosition + 1, currentCost + 1)
//   dfs(distance, allPossibleCount, currentPosition * 2, currentCost)
// }


test('solution', () => {
  expect(solution(5)).toBe(2);
  expect(solution(6)).toBe(2);
  expect(solution(5000)).toBe(5);
});