function solution(n, money) {
  let dp = new Array(n + 1).fill(0);
  dp[0] = 1;

  for(let i = 0; i <= money.length; i ++) {
    const currentCoin = money[i];
    for(let j = currentCoin; j <= n; j++) {
      dp[j] += dp[j - currentCoin];
    }
  }
  return dp[n]
}


test('solution', () => {
  expect(solution(10, [1,2,5])).toBe(10);
});


// 1: 1
// 2: [1,1], [2]
// 3: [1,1,1], [1,2] = 2
// 4: [1,1,1,1], [1,1,2], [2,2] = 3
// 5: [1,1,1,1,1], [1,1,1,2], [1,2,2], [5] = 4
// 6: [1,1,1,1,1,1], [1,1,1,1,2], [1,1,2,2], [2,2,2], [5,1] = 5
// 7: [1,1,1,1,1,1,1], [1,1,1,1,1,2], [1,1,1,2,2], [1,2,2,2], [5,1,1], [5,2] = 6
// 8: [1,1,1,1,1,1,1,1], [1,1,1,1,1,1,2], [1,1,1,1,2,2], [1,1,2,2,2], [2,2,2,2], [5,1,1,1], [5,2,1] = 7
// 9: [1,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,1,2], [1,1,1,1,1,2,2], [1,1,1,2,2,2], [1,2,2,2,2], [5,1,1,1,1], [5,1,1,2], [5,2,2] = 8
// 10: [1...], [1..2], [1,..2,2],[1,..2,2,2],[1,1,2,2,2,2], [2...,2], [5,...1], [5,2,1,1,1],[5,2,2,1],[5,5] = 10

// 0 1 2 3 4 5 6 7 8 9 10 // 금액
// 1 1 1 1 1 1 1 1 1 1 1 // 1원
// 1 1 2 2 3 3 4 4 5 5 6 // 1,2원
// 1 1 2 2 3 4 5 6 7 8 10 // 1,2,5원