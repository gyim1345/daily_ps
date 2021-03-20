const solution = (arrayA, arrayB) => {

  const setA = createSetUsingArray(arrayA);
  const setB = createSetUsingArray(arrayB);
  const complementAB = complement(setA, setB);
  const sumAB = sum(setA, setB);
  const intersectAB = intersect(setA, setB);

  return [setA.length, setB.length, sumAB.length, complementAB.length, intersectAB.length]
}

const createSetUsingArray = (base) => {
  return removeDuplicate(base).sort((a,b) => a-b);
}

const removeDuplicate = (base) => {
  const set = [];
  base.forEach(value => {
      if (set.includes(value)) {
          return
      }
      set.push(value);
  })
  return set;
}

const add = (base, value) => {
  if (base.includes(value)) {
      return
  }
  base.push(value);
}

const sum = (base, other) => {
  let newSet = base.slice();
  other.forEach(value => {
      if (newSet.includes(value)) {
          return
      }
      newSet.push(value);
  })
  return newSet.sort((a, b) => a - b);
}

const complement = (base, other) => {
  return base.filter(e => !other.includes(e));
}

const intersect = (base, other) => {
  return base.filter(e => other.includes(e));
}

test("intersect", () => {
  expect(intersect([1, 2, 3], [1, 3])).toEqual([1, 3]);
  expect(intersect([1, 2, 4], [1, 3])).toEqual([1]);
})

test("sum", () => {
  expect(sum([1, 2, 3], [1, 3])).toEqual([1, 2, 3]);
  expect(sum([1, 2, 4], [1, 3])).toEqual([1, 2, 3, 4]);
})

test('solution', () => {
  expect(solution([1, 2, 3, 2, 1], [1, 3])).toEqual([3, 2, 3, 1, 2]);
  expect(solution([2, 3, 4, 3, 5], [1, 6, 7])).toEqual([4, 3, 7, 4, 0])
});