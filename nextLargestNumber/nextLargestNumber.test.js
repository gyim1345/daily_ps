const nextLargestNumber = (n) => {
    const lengthOfOne = getLengthOfOne(n);
    while(true) {
        n++;
        if(getLengthOfOne(n) === lengthOfOne) {
            return n;
        }
    }
}

const getLengthOfOne = (n) =>{
    return n.toString(2).split("").reduce((a,b)=> a+parseInt(b),0)
}

test('nextLargestNumber', () =>{
    expect(nextLargestNumber(78)).toBe(83);
    expect(nextLargestNumber(15)).toBe(23);
})