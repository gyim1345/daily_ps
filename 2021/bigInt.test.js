const solution = (a,b) => {
  const length = Math.max(a.length, b.length);

  const reversedA = a.split('').reverse();
  const reversedB = b.split('').reverse();
  const final = [];
  let previousValue = 0;
  for(let i = 0; i < length; i ++) {
    const firstNumber = reversedA[i] || '0';
    const secondNumber = reversedB[i] || '0';

    const currentNumber = +firstNumber + +secondNumber + +previousValue;
    
    previousValue = Math.floor(currentNumber / 10) || '0';
    final.push((+currentNumber % 10).toString());

  }
  return removeLeadingZero([...final, previousValue.toString()].reverse().join(''));
}

const removeLeadingZero = (stringNumber) => {
  for(let i = 0; i < stringNumber.length; i ++) {
    if(stringNumber[i] !== '0') {
      return stringNumber.substring(i,stringNumber.length);
    }
  }
}


test('solution', () => {
  expect(solution('1234','4424')).toBe('5658');
  expect(solution('828959235923124124','395412515235125412348683581278517825')).toBe('395412515235125413177642817201641949');
});