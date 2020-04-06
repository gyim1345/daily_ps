const camouflage = (clothes) => {
    const types = findType(clothes);
    const duplicateCounts = countDuplicateTypes(types);
    const NumberOfCases = duplicateCounts.map(x => x = x + 1).reduce((prev, curr) => prev * curr) - 1
    return NumberOfCases;
}

const countDuplicateTypes = (types) => {
    let newType = types.slice()
    let returnType = [];
    let i = 0;
    while (newType.length > 0) {
        returnType.push(newType.filter(x => x === types[i]).length)
        newType = removeDuplicate(newType, types[i])
        i++;
    }
    return returnType;
}

const removeDuplicate = (arr1, string) => {
    return arr1.filter(x => x !== string)
}

const findType = (clothes) => {
    return clothes.map(x => x = x[1])
}

test('removeDuplicate', () => {
    expect(removeDuplicate(['headgear', 'eyewear', 'headgear'], 'headgear')).toEqual(['eyewear'])

})



// test('removeDuplicate', () => {
//     expect(removeDuplicate(['headgear'], ['headgear','eyewear','headgear'])).toEqual(['eyewear'])
//     expect(removeDuplicate(['headgear','eyewear','shit'], ['headgear','eyewear','headgear'])).toEqual([])

// })


test('countDuplicateTypes', () => {
    expect(countDuplicateTypes(['headgear', 'eyewear', 'headgear'])).toEqual([2, 1])
})



test('findType', () => {
    expect(findType([['yellow_hat', 'headgear'], ['blue_sunglasses', 'eyewear'], ['green_turban', 'headgear']])).toEqual(['headgear', 'eyewear', 'headgear'])
})

test('camouflage', () => {
    expect(camouflage([['yellow_hat', 'headgear'], ['blue_sunglasses', 'eyewear'], ['green_turban', 'headgear']])).toBe(5)
    expect(camouflage([['crow_mask', 'face'], ['blue_sunglasses', 'face'], ['smoky_makeup', 'face']])).toBe(3)
    expect(camouflage([['crow_mask', 'face'], ['blue_sunglasses', 'face'], ['smoky_makeup', 'face'], ['asd', 'asd']])).toBe(7)
    expect(camouflage([['crow_mask', 'face'], ['blue_sunglasses', 'face2'], ['smoky_makeup', 'face'], ['asd', 'asd']])).toBe(11)


})