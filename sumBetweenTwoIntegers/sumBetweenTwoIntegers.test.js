const sumBetweenTwoIntegers = (a,b) => {
    return new Array(Math.abs(b-a)+1).fill().map((value,index) => value = Math.min(a,b)+index).reduce((a,b) => a+b)
}

test('sumBetweenTwoIntegers', () => {
    expect(sumBetweenTwoIntegers(5,3)).toBe(12);
  });
  
  