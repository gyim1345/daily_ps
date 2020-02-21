// array[0] = array[0] + a[0] * b[1]  
// array[1] = array[1] + a[1] * b[2]  
// array[2] = array[2] + a[2] * b[0]  

// array[0] = array[0] + a[1] * b[2]
// array[1] = array[1] + a[2] * b[0]
// array[2] = array[2] + a[0] * b[1]

// array[0] = array[0] + a[2] * b[0]
// array[1] = array[1] + a[0] * b[1]
// array[2] = array[2] + a[1] * b[2]

const solution = (name) => {
    let count = 0;
    const nameArr = name.split('').map(i => i.charCodeAt());
    const originalName = nameArr.slice(0,nameArr.length)
    const reverseOriginalName = originalName.slice(0,originalName.length).reverse()

    // if(originalName[0]!== 65)
    // if (originalName.findIndex(el=> el==65) === originalName.reverse().findIndex(el=> el==65) && originalName.findIndex(el=> el==65) <= originalName.findIndex(el=> el==65)*2 )
    //     {
    //         console.log(originalName.findIndex(el=> el==65))
    //         for(let i = 0; i<originalName.findIndex(el=> el==65); i++)
    //         {
    //             count += Math.min(originalName[i] - 65, 91 - originalName[i])+1;
    //         }
    //         count --;
    //         originalName.reverse();
    //         for(let i = 0; i<originalName.findIndex(el=> el==65); i++)
    //         {
    //             count += Math.min(originalName[i] - 65, 91 - originalName[i])+1;
    //         }
    //         count --;
    //         return count+originalName.findIndex(el=> el==65)
    //     }

    const indexOfA = originalName.reduce(function(a, e, i) {
        if (e !== 65)
            a.push(i);
        return a;
    }, []);
    const indexOfB = reverseOriginalName.reduce(function(a, e, i) {
        if (e !== 65)
            a.push(i);
        return a;
    }, []);
    const fronthalf = indexOfA.filter( x=> x< originalName.length/2)
    const backhalf = indexOfB.filter( x=> x< originalName.length/2)
    const lastindexoffronthalf = fronthalf.pop()
    const frontindexofbackhalf = backhalf.pop()
    const lastnumber = originalName.length - frontindexofbackhalf
    console.log(lastindexoffronthalf, frontindexofbackhalf, lastnumber, originalName.length-lastindexoffronthalf-lastnumber )
   if ( lastindexoffronthalf <= originalName.length-lastindexoffronthalf-frontindexofbackhalf  )
    {
            for(let i = 0; i<lastindexoffronthalf+1; i++)
            {   
            count += Math.min(originalName[i] - 65, 91 - originalName[i])+1;
            console.log(originalName[i],count)
            }
            count --;
            console.log('front', count)
            originalName.reverse();
            for(let i = 0; i<frontindexofbackhalf; i++)
            {   console.log(lastindexoffronthalf)
                count += Math.min(originalName[i] - 65, 91 - originalName[i])+1;
            }
            count --;
            console.log('back', count)
            return count+lastindexoffronthalf



    }







//     if (nameArr.filter(x => x !== 65).length === 0) {
//         return 0;
//     }
//     count += Math.min(nameArr[0] - 65, 91 - nameArr[0]);
//     console.log(count)
//     nameArr.shift();
//     if (nameArr.filter(x => x !== 65).length === 0) {
//         return count;
//     }
//     const getMinCountRight = getMinCount(nameArr)
//     nameArr.reverse();
//     const getMinCountLeft = getMinCount(nameArr)
//     nameArr.reverse();

//     if (getMinCountRight <= getMinCountLeft) {
//         for (let i = 0; i < nameArr.length - getMinCountLeft; i++) {
//             count += Math.min(nameArr[i] - 65, 91 - nameArr[i]) + 1;
//         }
//     }
//     else {
//         nameArr.reverse();
//         for (let i = 0; i < nameArr.length - getMinCountRight; i++) {
//             count += Math.min(nameArr[i] - 65, 91 - nameArr[i]) + 1;
//         }
//     }
//     return count;
}

// const getMinCount = (nameArr) => {
//     let whileCount = 0;
//     while (nameArr[whileCount] === 65) {
//         whileCount += 1
//     }
//     return whileCount;
// }


test('solution', () => {
    // expect(solution('JEROEN')).toBe(56)
    // expect(solution('AAABAAA')).toBe(4)
    // expect(solution('JAN')).toBe(23)
    // expect(solution('A')).toBe(0)
    // expect(solution('ABBBAA')).toBe(6)
    // expect(solution('ZAAZAA')).toBe(5)
    // expect(solution('BBAABAAAAB')).toBe(13)
    // expect(solution('BBBAAAAAAAAAAABBB')).toBe(13)
    // expect(solution('BBAABBB')).toBe(10)
    expect(solution('ABABAAAAAAABA')).toBe(11)

})

//  4 16 10 30


//  5 4 4

//  20 16 16

//  10 8 8