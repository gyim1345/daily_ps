const targetNumber = (numbers, target) => {
    let count = 0;

    function accFunction(acc, depth) {
        if(depth === numbers.length) {
            count += acc === target ? 1 : 0;
            return;
        }
        accFunction(acc + numbers[depth], depth + 1);
        accFunction(acc - numbers[depth], depth + 1);
        return count
    }
    return accFunction(0,0);

}



test('targetNumber', () => {
    expect(targetNumber([1,1,1,1,1],3)).toBe(5)
})