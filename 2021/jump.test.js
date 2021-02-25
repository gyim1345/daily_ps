const solution = (arr) => {
  const results = [];
  jump(arr,results)
  return Math.max(...results);
}

const jump = (arr, results, index = 0, continuousCount = 0, sum = 0) => {
  if(index > arr.length -1) {
    results.push(sum);
    return
  }

  if(continuousCount < 2) {
    jump(arr,results, index + 1, continuousCount + 1, sum + arr[index]);
  }
  jump(arr,results, index + 2, 1, sum + arr[index]);

}

test('solution', () => {
  expect(solution([
    10,
    20,
    15,
    25,
    10,
    20,])).toBe(75);
});