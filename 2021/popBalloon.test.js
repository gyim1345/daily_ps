const solution = (a) => {
  const set = new Set();
  let min = a[0];

  for (let i = 1; i < a.length; i++) {
    set.add(min);
    min = Math.min(a[i], min);
  }

  min = a[a.length-1];
  for (let i = a.length-2; i >= 0; i--) {
    set.add(min);
    min = Math.min(a[i], min);
  }
  
  return set.size;
}


//   const results = new Set();

//   dfs(a, results, 1)
//   console.log(results)
//   return 1;
// }


// const dfs = (balloons, results, count, prevLength = balloons.length) => {
//   const currentLength = balloons.length
//   if(currentLength === 1) {
//     results.add(...balloons);
//     return;
//   }
  
//   if(count <= 0 && currentLength === prevLength) {
//     return;
//   }

//   const removed = [];
//   balloons.forEach((num,i) => {
//     const leftIndex = i-1 === -1 ? currentLength -1 : i-1;
//     // const rightIndex = i + 1 === currentLength ? 0 : i+ 1;

//     if(num > balloons[leftIndex] && !removed.includes(num)) {
//       removed.push(num);
//       // console.log(num, balloons[leftIndex] , "num < balloons")
//       dfs(balloons.filter(removedNumb => removedNumb !== num), results, count, currentLength);
//     } else if (num < balloons[leftIndex] && !removed.includes(balloons[leftIndex])) {
//       // console.log(num, balloons[leftIndex] , "num > balloons")

//       removed.push(balloons[leftIndex])
//       dfs(balloons.filter(removedNumb => removedNumb !== balloons[leftIndex]), results, count, currentLength);
      
//     }
    
//     if (count > 0 && num < balloons[leftIndex] && !removed.includes(num)) {
//       dfs(balloons.filter(removedNumb => removedNumb !== num), results, count - 1, currentLength);
//     }

//   })
//   return;
// }


test('solution', () => {
  // expect(solution([9,-1,-5])).toBe(3);
  expect(solution([-16,27,65,-2,58,-92,-71,-68,-61,-33])).toBe(6);
});