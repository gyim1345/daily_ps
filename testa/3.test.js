const solution = (total_sp, skills) => {
  let head = 0;
  let child = []; 
  let parent = [];
  let lowestChild = [];
  let hashTable= {};

  skills.forEach(skill => {
    child.push(skill[1]);
    parent.push(skill[0]);
    hashTable[skill[0]]=0;
    hashTable[skill[1]]=0;
  })
  
  skills.forEach(skill => {
    if(child.every( x=> x!== skill[0])){
      head = skill[0];
    }
  })
  skills.forEach(skill => {
    if(!parent.includes(skill[1])){
      lowestChild.push(skill[1]);
    }
  })

  lowestChild.forEach(child => {
    hashTable[child] = 1;
  })

  let queue = lowestChild.slice();

  while(queue[0]){
    let currentHead = queue.shift();
    let parent = skills.find(x=> x[1]===currentHead)[0];
    hashTable[parent] += hashTable[currentHead]; 
    if(parent !== head && !queue.includes(parent)){
    queue.push(parent);
    }
  }
let sum = Object.values(hashTable).reduce((a,c) => a+c);
let mult = total_sp/sum;
return Object.values(hashTable).map(x=> x*mult)

}

  //   let head = 0;
//   let child = []; 
//   skills.forEach(skill => {
//       child.push(skill[1]);
//   })

//   skills.forEach(skill => {
//     if(child.every( x=> x!== skill[0])){
//       head = skill[0];
//     }
//   })
//   let childCount = [];
//   function dfs(count = 0, dfsSkills = skills.slice(), currentHead = head) {
//     let queue = [];
    
//     dfsSkills.forEach(el => {
//       if(el[0] === currentHead){
//         queue.push(el);
//       }
//     })
//       if(!queue[0]){
//         return count + 1;
//       }
//     childCount.push(queue.length)
//      console.log(queue,currentHead,childCount,11111)
//      while(queue[0]){
//        let newHead = queue.shift()
//         dfs(count, dfsSkills, newHead[1])
//      }

//       console.log(count)
//   }
//     dfs();
// console.log(childCount,2222222)
//   return [44, 11, 33, 11, 11, 11]
// }
test('solution', () => {
    expect(solution(121, [[1, 2], [1, 3], [3, 6], [3, 4], [3, 5]])).toEqual([44, 11, 33, 11, 11, 11]);
})