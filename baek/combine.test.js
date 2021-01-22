function solution(orders, course) {
    
  orders = orders.map(order => order.split('').sort().join(''));
  const possibleCombination = [];
  const result =[];
  orders.forEach(order => {
     course.forEach(length => {
                possibleCombination.push(...combine(order,length))
     })
  })
  possibleCombination.forEach((combination,i) => {
      const a = possibleCombination.filter(x=> JSON.stringify(x)==JSON.stringify(combination))
      if(a.length >= 2) {
          result.push([a[0], a.length]);
      }
  })
  
  
  let answer = {};
  
  course.forEach(number => {
      answer[number] = [];
  })
  result.forEach(comb => {
      if(answer[comb[1]]){
          
      let obj = answer[comb[0].length]
      if(!obj[0]) {
          obj.push(comb);
          return;
      }
      if(obj[0][1] === comb[1]) {
          obj.push(comb);
          return;
      }
      if(obj[0][1] < comb[1]) {
          answer[comb[0].length] = [comb];
          return;
      }
            
      }     
  })
  const aaaa = Object.values(answer)
  const final = [];
  aaaa.forEach((aaa) => {
    console.log(aaa, "aaa")
    console.log(aaa[0], "bbvb")
      aaa.sort((a,b) => {
        if (a[0].join('')<b[0].join('') )return -1;
        if(a[0].join('') === b[0].join('')) return 0;
        return 1;
      })

      for(let i = 0; i < aaa.length; i += 1 ) {
          if(!aaa[i+1]) {
              final.push(aaa[i])
              continue;
          }
          if(JSON.stringify(aaa[i][0]) !==JSON.stringify(aaa[i+1][0])) {
              final.push(aaa[i])
          }
      }
  })
  return final.map( x=> x[0]).sort((a,b) => {
    if (a.join('')<b.join('') )return -1;
    if(a.join('') === b.join('')) return 0;
    return 1;
  }
  ).map(x=> x.join(''))
}

const combine = (items, combinationCount) => {
  let result = [];
  let indexes = new Array(combinationCount);
  for (let i = 0; i < combinationCount; i++) {
      indexes[i] = i;
  }
  while (indexes[0] < (items.length - combinationCount + 1)) {
      let temp = [];
      for (let i = 0; i < combinationCount; i += 1) {
          temp.push(items[indexes[i]]);
      }
      result.push(temp);
      indexes[combinationCount - 1] += 1;
      let countIndex = combinationCount - 1; 
      while ((indexes[combinationCount - 1] >= items.length) && (indexes[0] < items.length - combinationCount + 1)) {
          countIndex -= 1; 
          indexes[countIndex] += 1;
          for (let i = countIndex + 1; i < combinationCount; i += 1) {
              indexes[i] = indexes[countIndex] + (i - countIndex);
          }
      }
  }
  return result;
}




test('solution', () => {
  expect(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2,3,4])).toEqual(["AC", "ACDE", "BCFG", "CDE"]);
});