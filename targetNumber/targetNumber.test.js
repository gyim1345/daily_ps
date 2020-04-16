const targetNumber = (numbers, target) => {
    let count = 0;
    const nextNumber = ( numbers, target, depthCount =0) => {
        if(depthCount === numbers.length-1){
            if(numbers.reduce((a,c) => a+c) === target) {
                count += 1;
            }
            return
        }
        nextNumber(numbers, target, depthCount +1)
        numbers[depthCount+1] = -numbers[depthCount+1]
        nextNumber(numbers, target, depthCount +1)
        return count
    }
    nextNumber(numbers,target)
    numbers[0] = -numbers[0]
    return nextNumber(numbers, target)
}


test('nextNumber', () => {
    // expect(nextNumber([1,1],2)).toBe(1);
    expect(targetNumber([1,1,1,1,1],3)).toBe(5)
})

test('targetNumber', () => {
    expect(targetNumber([1,1,1,1,1],3)).toBe(5)
})