const primeNumber = (n) => {

    let array = Array(n + 1).fill().map((x, i) => x = i);

    let rootNumber = Math.floor(Math.sqrt(n));

    for (let i = 2; i <= rootNumber; i += 1) {
        if (array[i] === false) {
            continue;
        }
        for (let j = i + i; j < n + 1; j += i) {
            array[j] = false;
        }
    }
    array = array.filter(x => x !== false);
    return array.splice(2).length;
}


test('primeNumber', () => {
    expect(primeNumber(10)).toBe(4);
    expect(primeNumber(5)).toBe(3);

})