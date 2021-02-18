const solution = (k,n,wires) => {
//   let max = 0;
//   for(let i = 1; i < Math.max(...wires); i ++) {
//     let sum = 0;
//     wires.forEach(wire => {
//       const div = Math.floor(wire/i)
//       if(div > 0) {
//         sum += div;
//       }
//     })
//     if(sum >= n) {
//       max = Math.max(max, i);
//     } else break;
//   }
//   return max;
// }
  let max = Math.pow(2,31) -1;
  let min = 0;
  while(min <= max) {
    let mid = Math.floor((max + min) /2 );

    if(isPossible(wires,n,mid)) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return max;
}

const isPossible = (arr, n, mid) => {
  const sum = arr.reduce((acc, cur) => acc+Math.floor(cur/mid),0);
  console.log(sum, mid, "sum , mid")
  return sum >= n;
}

test('solution', () => {
  expect(solution(4,11,[802,743,457,539])).toBe(200);
});

