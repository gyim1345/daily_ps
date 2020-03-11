const primeNumber = (n) => {
    let count = 0;

    for (let i = 2; i <= n; i++) {
        let countInner = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                countInner += 1;
            }
        }
        if (countInner === 2) {
            count += 1;
        }
    }
    return count;
}


test('primeNumber', () => {
    expect(primeNumber(10)).toBe(4);
    expect(primeNumber(5)).toBe(3);

})