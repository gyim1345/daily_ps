const primeNumber = (n) => {

    let newArray = [];

    let array = Array(n).fill().map((x, i) => x = i + 1)
    array.shift();
    let rootNumber = Math.floor(Math.sqrt(n))
    let head = array[0];
    for(let i = head; i<=rootNumber; i++ ) {
        newArray.push(array.shift())
        array = array.filter(x => x % i !== 0)
    }

    newArray.push(...array)
    return newArray.length;
}


test('primeNumber', () => {
    expect(primeNumber(10)).toBe(4);
    expect(primeNumber(5)).toBe(3);

})