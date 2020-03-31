const primeNumber = (n) => {

    let array = Array(n).fill().map((x, i) => x = i + 1)
    array.shift();
    let newArray = [];
    while (array.length > 0) {
        let head = array[0];
        newArray.push(array.shift())
        array = array.filter(x => x % head !== 0)
    }

    return newArray.length;
}


test('primeNumber', () => {
    expect(primeNumber(10)).toBe(4);
    expect(primeNumber(5)).toBe(3);

})