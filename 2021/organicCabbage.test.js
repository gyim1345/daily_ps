const solution = (fieldInfo, locations) => {

  const obj = {};
  locations.forEach(location => {
    const [x, y] = location.split(' ')
    obj[x+y] = true;
  })

  const values = Object.keys(obj);

  let count = 0;
  values.forEach(cabbageLocation => {
    const x = cabbageLocation[0];
    const y = cabbageLocation[1];
    if(obj[x+''+y]) {
      count ++;
      removeAdjacentNumbers(x, y, obj);
    }
  })

  return count;
}

const removeAdjacentNumbers = (x,y, obj) => {
  const queue = [x+''+y];
  obj[x+''+y] = false;

  while(queue[0]) {
    const number = queue.shift();
    const x = +number[0];
    const y = +number[1];

    const adjacentNumbers = getAdjacentNumbers(x,y);
    
    adjacentNumbers.forEach(adjNumber => {
      if(obj[adjNumber]) {
        obj[adjNumber] = false;
        queue.push(adjNumber);
      }
    })
  }

  return ;
}

const getAdjacentNumbers = (x, y) => {
  return [(x-1) +''+ y,  (x + 1) +''+ y, '' + x + (y - 1), '' + x + (y + 1)];
}


test('solution', () => {
  expect(solution("10 8 17",
    ["0 0",
    "1 0",
    "1 1",
    "4 2",
    "4 3",
    "4 5",
    "2 4",
    "3 4",
    "7 4",
    "8 4",
    "9 4",
    "7 5",
    "8 5",
    "9 5",
    "7 6",
    "8 6",
    "9 6",])).toBe(5);

  expect(solution(
    "10 10 1", ["5 5"],)).toBe(1);

  expect(solution("5 3 6",
    ["0 2",
    "1 2",
    "2 2",
    "3 2",
    "4 2",
    "4 0"])).toBe(2);
});