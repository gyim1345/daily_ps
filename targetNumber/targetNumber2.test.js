const targetNumber = (numbers, target) => {
    let count = 0;
    const nextNumber = ( n, depthCount =-1) => {
        if(depthCount === numbers.length-1){
            if(numbers.reduce((a,c) => a+c) === target) {
                count += 1;
            }
            return
        }
        nextNumber(numbers, depthCount +1)
        numbers[depthCount+1] = -numbers[depthCount+1]
        nextNumber(numbers, depthCount +1)
        return count
    }

    return nextNumber(0, 0)
}


test('nextNumber', () => {
    // expect(nextNumber([1,1],2)).toBe(1);
    expect(targetNumber([1,1,1,1,1],3)).toBe(5)
})

test('targetNumber', () => {
    expect(targetNumber([1,1,1,1,1],3)).toBe(5)
})