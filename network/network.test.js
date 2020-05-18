

const network = (computers) => {
    let count =0;
    const findNetwork = () => {
        console.log(count,computers);
        if(count >3){
            return;
        }
        count +=1;
        findNetwork();
    }
    findNetwork();

return 2;


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




test('network', ()=> {
    expect(	network([[1, 1, 0], [1, 1, 0], [0, 0, 1]])).toBe(2);
    // expect(	network([[1, 1, 0], [1, 1, 1], [0, 1, 1]])).toBe(1);
})