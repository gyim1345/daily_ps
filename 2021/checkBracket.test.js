const solution = (inputString) => {

  let aCount = 0; // ()
  let bCount = 0; // {}
  let cCount = 0; // []
  let dCount = 0; // <>

  let pairCount = 0;

  for(let i = 0; i < inputString.length; i ++) {
    if(inputString[i] === '(') {
      aCount += 1;
    }
    if(inputString[i] === ')') {
      if(aCount === 0) {
        return -1;
      }
      aCount -=1;
      pairCount += 1;
    }

    if(inputString[i] === '{') {
      bCount += 1;
    }
    if(inputString[i] === '}') {
      if(bCount === 0) {
        return -1;
      }
      bCount -=1;
      pairCount += 1;

    }

    if(inputString[i] === '[') {
      cCount += 1;
    }
    if(inputString[i] === ']') {
      if(cCount === 0) {
        return -1;
      }
      cCount -=1;
      pairCount += 1;

    }

    if(inputString[i] === '<') {
      dCount += 1;
    }
    if(inputString[i] === '>') {
      if(dCount === 0) {
        return -1;
      }
      dCount -=1;
      pairCount += 1;

    }
    
  }

  return pairCount;
}


test('solution', () => {
  expect(solution('this world')).toBe(0);
  expect(solution('that [] world')).toBe(1);
  expect(solution('(my wo)rld{}')).toBe(2);
  expect(solution('wo>rl<d')).toBe(-1);
});