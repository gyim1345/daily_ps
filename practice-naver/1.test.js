const solution = (n,p,c) => {
  let stock = 0;
  let currentContinuousFailureCount = 0;
  let soldCount = 0;
  let totalProfit = 0;
  for (let i =0; i <n; i += 1) {
    console.log(i)
    let price = 100;
    if(currentContinuousFailureCount > 0) {
      price = 50;
    }
    if(currentContinuousFailureCount > 1) {
      price = 25;
    }
    if(currentContinuousFailureCount > 2) {
      break;
    }
    console.log("day", i,"price", price)
    if(p[i] + stock < c[i]) {
      stock = p[i] + stock;
      currentContinuousFailureCount += 1;
      soldCount += 1;
      continue;
    }

    if(p[i] + stock >= c[i] ) {
      currentContinuousFailureCount =0;
      soldCount += 1;
      stock = p[i] + stock - c[i];
      totalProfit += price * c[i];
      console.log(totalProfit)
      continue;
    }

  }
  return Number.parseFloat(totalProfit/soldCount).toFixed(2);
}


test('solution', () => {
  expect(solution(6,[5,4,7,2,0,6],[4,6,4,9,2,3])).toEqual("275.00");
});