const solution = (numbers) => {
  const allPossibleCombination = getAllPossibleCombination(numbers);

  return getPrimeCount(allPossibleCombination);
}


const getPrimeCount = (array) => {
  return array.reduce((acc,cur) => {
    let isPrime = true;
    if(cur === 0 || cur === 1) {
      return acc;
    }
    for(let i = 2; i <cur; i+= 1) {
      if(cur % i === 0) {
        isPrime = false;
        break;
      }
    }
    if(isPrime) {
      return acc + 1;
    }
    return acc;
  },0);
}

const getAllPossibleCombination = (array) => {
  return [...new Set(permutate(array.split('')).map(el=>  Number(el.join(''))))];
}

const permutate = (array) => {
  let permutation = [];

  for (let i = 0; i < array.length; i += 1) {
    let temp = permutate(array.slice(0, i).concat(array.slice(i + 1)));
    permutation.push(...temp)
    if(!temp.length) {
      permutation.push([array[i]])
    } else {
      for(let j = 0; j < temp.length; j += 1) {
        permutation.push([array[i]].concat(temp[j]))
      }
    }
  }
  return permutation;
}

test('solution', () => {
  expect(solution('17')).toBe(3);
  expect(solution('011')).toBe(2);
});