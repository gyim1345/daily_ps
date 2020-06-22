const solution = (land) => {

    // const landRowLength = land[0].length;
    // let sortedLand = land.slice();
    // sortedLand.forEach(landNumbers=> {
    //     landNumbers.sort((a,b) => a-b);
    // })
    // console.log(sortedLand);
    // const firstMax = Math.max(land[0]);
    // const firstIndex = land[0].indexOf(firstMax);
    //     let sum = 0;
    //     let currentIndex = -1;
    //     land.forEach(lands=> {
    //         console.log(lands)

    //         if(currentIndex != -1){
    //             lands.splice(currentIndex,1);
    //         }
    //         console.log(lands)
    //         const maxNumber = Math.max(...lands);
    //         let indexOfMax = lands.indexOf(maxNumber);
    //         sum += maxNumber;
    //         currentIndex = indexOfMax;
    //     })

    //     return sum;
    // }
    // let newA = new Array(land[0].length).fill(0);
    // newA = newA.map((x,i)=> x+=land[0][i]);
    // console.log(newA);
    // land.shift();
    // console.log(land);
    // newA = newA.map((newArr,index)=> {
    //    const templand = land[0].slice();
    //     templand.splice(index,1);
    //    return newArr += Math.max(...templand)
    // })

    // console.log(newA)




    // }

    for (let i = 1; i < land.length; i++) {
        land[i][0] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]);
        land[i][1] += Math.max(land[i - 1][2], land[i - 1][3], land[i - 1][0]);
        land[i][2] += Math.max(land[i - 1][1], land[i - 1][3], land[i - 1][0]);
        land[i][3] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][0]);
    }
    return Math.max(...land[land.length-1]);
}






test('solution', () => {
    expect(solution([[1, 2, 3, 5], [5, 6, 7, 8], [4, 3, 2, 1]])).toBe(16);
    // expect(solution([[99,98,97,96],[11,16,27,38],[44,53,32,21],[55,53,52,51]])).toBe(245);
});