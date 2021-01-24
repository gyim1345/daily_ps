const solution = (A,K) => {
  const consecutiveNumberRecords = {};

  for(let i = 0; i < A.length; i++ ) {
    let currentNumber = A[i];
    let count = 1;
    let changeCount = K;
    for(let j = i+1; j < A.length; j++) {
      const comparedNumber = A[j];
      if(currentNumber === comparedNumber) {
        count += 1;
        continue;
      }

      if(changeCount<=0) {
        break;
      }

      changeCount -= 1;
      count += 1;
      if(j === A.length -1 && changeCount !== 0) {
        count += changeCount;
      }
    }

    if(consecutiveNumberRecords[currentNumber] > count) {
      continue;
    }

    consecutiveNumberRecords[currentNumber] = count;

  }
  return Math.max(...Object.values(consecutiveNumberRecords));
}


test('solution', () => {
  expect(solution([1, 1, 3, 4, 3, 3, 4], 2)).toBe(5);
  expect(solution([4, 5, 5, 4, 2, 2, 4], 0)).toBe(2);
  expect(solution([1, 3, 3, 2], 2)).toBe(4);
});

//46%
//https://app.codility.com/programmers/task/replacing_books/