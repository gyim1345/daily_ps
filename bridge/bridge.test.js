// 가장 최소를 반환하는

// rocks를 오름차순으로 sort한다.

// start인 0을 앞에 넣어주고 distance 25를 rocks 끝에다 넣어준다.

// rocks 요소 간의 거리를 구해서 배열에 담는다.



// n번만큼 돌면서
// 제일 작은 거리를 인접한 거리중에 제일 작은거에 더해준다.

test('bridge', () =>{
    expect(bridge(25,[2, 14, 11, 21, 17], 2)).toBe(4);
    // expect(bridge(34,[5, 19, 28], 2)).toBe(15)
})

const bridge = (distance, rocks, n) => {
    let max = 0;
    rocks.sort((a,b) => a-b);
    
    let answer = 1;
    let start = 1;
    let end = distance;
    
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      console.log(start,end ,"end")
      let cnt = 0;
      let last = 0;
      for (let i = 0; i < rocks.length + 1; i++) {
        // let gap = i != rocks.length ? rocks[i] - last : distance - rocks[i-1];
        let gap = rocks[i] - last;
        console.log("gap", gap,"rocks",i,rocks[i], "last", last, "mid", mid)
        if (gap < mid) {
          cnt++;
          last = rocks[i];
        } else if(i != rocks.length) {
          last = rocks[i];
        }
      }
      console.log("aaaaaaaaa", cnt, n)
      if (cnt > n) {
        end = mid - 1;
      } else {
        start = mid + 1;
        answer = mid;
      }
    }
    
    return answer
}


  
  
  
  
  
  
//     rocks.sort((a,b)=> a-b);

//     rocks.unshift(0);
//     rocks.push(distance);

//     const distances = getDistances(rocks)
//     let count = 0;
//     while(count<n) {
//         const min = Math.min(...distances);
//         let temptation = [];
//         for(let i = 0; i< distances.length; i++) {
//             if( distances[i] === min) {
            
//                     // distances[i-1] + distances[i]
//                     temptation.push(
//                         {
//                             value : distances[i-1] + distances[i],
//                             index: i,
//                             isLeft: true
//                         }, 
//                         {
//                             value : distances[i] + distances[i+1],
//                             index: i,
//                             isLeft: false
//                         }
//                     )
//                 // }
//             }
//         }
//         console.log(distances, " 1")

//         temptation = temptation.filter( x=> x.value)
//         temptation.sort((a,b)=> {
//             return a.value - b.value
//         })
//         const minTemptation = temptation[0];
//         if (minTemptation.isLeft) {
//             distances[minTemptation.index] = minTemptation.value
//             distances.splice(minTemptation.index -1, 1);
            
//         } else {
//             distances[minTemptation.index] = minTemptation.value
//             distances.splice(minTemptation.index +1, 1);
            
//         }
//         console.log(temptation,min);
//         console.log(distances, "2");
        
//         count ++
//     }
//     // console.log(distances);
    

//     return Math.min(...distances);    
// }


const getDistances = (rocks) => {
    const array =[];
    rocks.reduce((a,c) => {
        array.push(c-a);
        return c;
    })
    return array;
}


test('getDistances', () => {
    expect(getDistances([0,2,11])).toEqual([2, 9]);
    expect(getDistances([1,11, 24])).toEqual([10, 13]);
});

// 0 5 19 28 34
//  5 14 9 6
