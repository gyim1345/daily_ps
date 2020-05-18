const kNumber = (array, commands) => {
    const arrayReturn =[];
    commands.forEach(indexes => arrayReturn.push(array.slice(indexes[0]-1, indexes[1]).sort((a,b)=>a-b)[indexes[2]-1]))
    return arrayReturn;
    }
    
    test('kNumber', () => {
    expect(kNumber([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]])).toEqual([5,6,3])
    })