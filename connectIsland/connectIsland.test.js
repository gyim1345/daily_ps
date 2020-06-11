const connectIsland = (n, costs) => {    
    let hashTable = {}
    for (let i = 0; i < n; i++) {
        hashTable[i] = false;
    }
    costs.sort((a, b) => a[2] - b[2]);
    let totalCost = costs[0][2];

    hashTable[costs[0][0]] = true;
    hashTable[costs[0][1]] = true;
    let count = 2;
    while (count < n) {
        for (let q = 1; q < costs.length; q++) {
            let left = costs[q][0];
            let right = costs[q][1];
            let cost = costs[q][2];
            if ((hashTable[right] ^ hashTable[left])) {
                hashTable[right] = true;
                hashTable[left] = true;
                totalCost += cost;
                count += 1;
                break;
            }
        }
    }
    return totalCost
}

test('connectIsland', () => {
    expect(connectIsland(4, [[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]])).toBe(4);
    expect(connectIsland(4, [[0,1,6],[0,2,2],[1,2,5],[1,3,1],[2,3,8]])).toBe(8);
})    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//     let hashTable = {}
//     for(let i =0; i<n; i++ ){
//         hashTable[i] = false;
//     }
//     costs.sort((a,b)=> a[2]-b[2]);
//     let totalCost = 0;

//     hashTable[costs[0][0]] = true;
//     hashTable[costs[0][1]] = true;
//     totalCost = Number(costs[0][2]);
//     costs.shift();
//     console.log(costs, totalCost)
//     let array =[];
    

//     // console.log(!Object.values(hashTable).includes(false))
//     console.log(hashTable)
//     let index = 0;
//     // Object.values(hashTable).includes(false) &&
//     while( index <costs.length-2){
   

//         // if(hashTable[right] === 1 || hashTable[left] === 1) {
//         //     console.log(left,right, "leftright")
//         //     hashTable[right] = true;
//         //     hashTable[left] = true;
//         //     totalCost += costs[index][2];
//         //     let compare = array.filter(x=> x[0] === left || x[0]  === right || x[1] === left || x[1] === right)
//         //     if(compare){
//         //         totalCost += compare.reduce((a,b) => {
//         //             return a + b[2]
//         //         },0)
//         //     }
//         //     compare.forEach(x=> {
//         //         hashTable[x[0]] = true;
//         //         hashTable[x[1]] = true;
//         //     })
//         //     array = array.filter(x=>!compare.includes(x));
//         // }

//         // if(hashTable[right] === false && hashTable[left] === false) {
//         //     hashTable[right] = 1;
//         //     hashTable[left] = 1;
//         //     array.push([right,left, costs[index][2]]);
//         //     console.log("falseeeeeeeeee")
//         // }
//         for(let q = 0; q<costs.length; q++ ) {
//             let left = costs[q][0];
//             let right = costs[q][1];
//             if((hashTable[right] === false && hashTable[left] === true) ||(hashTable[right] === true && hashTable[left] === false)) {
//                 hashTable[right] = true;
//                 hashTable[left] = true;
//                 totalCost += costs[index][2];
//                 // console.log(hashTable)
//                 break;
//             }
//             console.log(hashTable, totalCost, costs[index])
//         }
        
//         index += 1;
//     }
//     console.log(totalCost)
//     return totalCost
// }











//     let hashTable = {}
//     for(let i =0; i<n; i++ ){
//         hashTable[i] = false;
//     }
//     costs.sort((a,b)=> a[2]-b[2]);
//     let totalCost = 0;
//     hashTable[costs[0][0]] = true;
//     hashTable[costs[0][1]] = true;
//     totalCost = Number(costs[0][2]);
//     costs.shift();
    
//     console.log(costs)
    
//     costs.forEach((cost,index)=> {
//         if((hashTable[cost[1]] === false || hashTable[cost[1]] === 1) && hashTable[cost[0]] === true){
//             totalCost += Number(cost[2]);
//             hashTable[cost[1]] = true;
            
//         }

//         if(hashTable[cost[1]] === false && hashTable[cost[0]] === false){
//             totalCost += Number(cost[2]);
//             hashTable[cost[1]] = 1;
//             hashTable[cost[0]] = 1;
            
//         }

//         if(hashTable[cost[1]] === 1 || hashTable[cost[0]] === 1){
//             totalCost += Number(cost[2]);
//             hashTable[cost[1]] = true;
//             hashTable[cost[0]] = true;
//         }
//     })

//     console.log(hashTable)

//     return totalCost;
// }




    //     let hashTable = {}
//     for(let i =0; i<n; i++ ){
//         hashTable[i] = false;
//     }
//     costs.sort((a,b)=> a[2]-b[2]);
//     console.log(costs);
//     let totalCost = 0;
//     costs.forEach((x,i) => {
//         if(!hashTable[x[0]] && !hashTable[x[1]] || hashTable[x[0]] ^ hashTable[x[1]]){
//             console.log(x)
//         hashTable[x[0]] = true;
//         hashTable[x[1]] = true;
//         totalCost += x[2];
//     }
//     })

//     console.log(totalCost)
//     return totalCost;
// }

// 13 1
// 12 5
// 02 2


// 13 1
// 02 2
// 12 5