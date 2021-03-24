const solution = (N, trees) => {
  let min = N;
  for(let i =0; i < trees.length; i ++) {
    if(min > trees[i][0]) {
      min = trees[i][0];
    }
  }


    trees.sort((a,b)=> {
    const[ax,ay] = a;
    const[bx,by] = b;
    return ax-bx;
  })
  let count = 0;
  let prevValue;
  for(let i = 0; i < trees.length; i ++) {
    if(trees[i][0] === min) {
      prevValue = trees[i];
      count ++;
      continue;
    }
    if(prevValue === undefined) {
      continue;
    }
    if(prevValue[1] < trees[i][1]) {
      continue;
    }

    prevValue = trees[i];
    count ++;
  }
  return count
}

//   trees.sort((a,b)=> {
//     const[ax,ay] = a;
//     const[bx,by] = b;
//     if(ax === bx) {
//       return by-ay;
//     }
//     return ax-bx;
//   })

//   let prevValue = trees[0][1];
//   let count = 1;
//   console.log(trees)
//   for(let i = 1; i < trees.length; i++) {
//     console.log(prevValue, trees[i][1])
//     if(prevValue < trees[i][1]) {
//       break;
//     }
//     prevValue = trees[i][1];
//     count ++;
//   }
//   return count;
// }


test('solution', () => {
  expect(solution(5, [[4, 3], [3, 1], [2, 2], [1, 4]])).toBe(3);
  expect(solution(5, [[3, 3], [2, 2], [1, 1]])).toBe(1);
  expect(solution(5, [[4, 4], [1, 3], [2, 2]])).toBe(2);  
  expect(solution(5, [[0,3], [1, 4]])).toBe(1);
  expect(solution(5, [[4,4], [3,1], [2,2]])).toBe(2);
  expect(solution(5, [[4,4], [3,0], [2,2], [1,1]])).toBe(2);
});