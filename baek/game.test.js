const solution = (X,Y) => {
  const Z = Math.floor((100 * Y / X));
  let result = 0;
  let left = 0;
  let right = 100000000001;

  while(left <= right) {
    const mid = Math.floor((left + right) / 2); 
    if(left >= right) {
      result = mid;
      break;
    }
    let temp = Math.floor(((Y + mid) / (X + mid))* 100);
    result = mid;

    if(temp > Z) {
      right = mid;
    } else {
      left = mid +1;
    }
  }

  if(result == 100000000001) {
    result = -1;
  }
  return result;

}


test('solution', () => {
  expect(solution(10,8)).toBe(1);
  expect(solution(100,80)).toBe(6);
});


// https://www.acmicpc.net/problem/1072