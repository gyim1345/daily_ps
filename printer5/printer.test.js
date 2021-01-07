/*
1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
3. 그렇지 않으면 J를 인쇄합니다.
*/

const solution = (priorities, location) => {
  let newPriorities = [...priorities];
  let newLocation = location;
  let count = 0;
  while (true) {
    const max = Math.max(...newPriorities);
    if (newPriorities[0] === max && newLocation === 0) {
      return (count += 1);
    }

    if (newPriorities[0] === max) {
      count += 1;
      newPriorities.shift();
      newLocation -= 1;
      continue;
    }

    newPriorities.push(newPriorities.shift());
    if (newLocation === 0) {
      newLocation = newPriorities.length - 1;
      continue;
    }
    newLocation -= 1;
  }
};

test('solution', () => {
  expect(solution([2, 1, 3, 2], 2)).toBe(1);
});
