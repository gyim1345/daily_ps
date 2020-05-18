// computers를 순환하면서 연결된 네트워크도 순환해서
//  hash로 거처가면 1로 하고 computers를 순환할때 마다 
//  count 를 하나 추가 해준다.\

const network = (computers) => {
    let compObj = {};
    let count = 0;

    function findNetwork(computerLinkedNetworks, currentComputerIndex) {
        //[[1, 1, 0]//// [1, 1, 0]//// [0, 0, 1]]
        if(!compObj[currentComputerIndex] ){
            compObj[currentComputerIndex] = 1;
        }

        computerLinkedNetworks.forEach((linked, index)=> {
            //  1 // 1 // 0
            if(linked === 1 && compObj[index] !== 1){
                findNetwork(computers[index], index)
            }
            else return;
        })
        


    }

    computers.forEach((computerLinkedNetworks,currentComputerIndex) => {
        //[[1, 1, 0]//// [1, 1, 0]//// [0, 0, 1]]
        if(!compObj[currentComputerIndex] ){
            compObj[currentComputerIndex] = 1;
            count += 1;
            findNetwork(computerLinkedNetworks, currentComputerIndex);
        }
    })

    return count

}




//     let compObj = {};
//     computers.forEach((_,i)=> {
//         compObj[i] = 1;
//     })
//     let count = 0;
//     console.log(compObj)


//     const findLinks = (computers, computer) => {
//         console.log(computer)
//         if(computer.every(x => x === 0)){
//             return;
//         }
//         computer.forEach((links,linkIndex) => {
//             if(links === 1){
//                 compObj[linkIndex] = 0;
//                 findLinks(computers, computers[linkIndex])
//             }
//         })
//         return;
//     }



//         computers.forEach((computerLinks,compIndex) => {
//             if(compObj[compIndex] !== 0){
//                 count += 1;
//                 compObj[compIndex] = 0;
//                 findLinks(computers,computerLinks)
//                 }


//             })



//     console.log(compObj)
//     console.log(count)
//     // console.log(findNetwork())
//     return 2;
// }




test('network', () => {
    expect(network([[1, 1, 0], [1, 1, 0], [0, 0, 1]])).toBe(2);
    expect(	network([[1, 1, 0], [1, 1, 1], [0, 1, 1]])).toBe(1);
})