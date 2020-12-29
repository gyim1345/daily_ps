const solution = (n, edge) => {
  const nodes = {};
  edge.forEach((e) => {
    const [first, second] = e;
    addNode(nodes, first, second);
    addNode(nodes, second, first);
  });
  const lengthCount = { 1: 1 };
  const queue = [1];
  const history = [1];
  getLength(nodes, lengthCount, queue, history);
  return getMaxValueCounts(lengthCount);
};

const getMaxValueCounts = (lengthCount) => {
  const values = Object.values(lengthCount);
  const max = Math.max(...values);
  return values.filter((e) => e === max).length;
};

const getLength = (nodes, lengthCount, queue, history, currentCount = 0) => {
  while (queue[0]) {
    currentCount += 1;
    const currentNumber = queue.shift();
    nodes[currentNumber].forEach((number) => {
      if (history.includes(number)) {
        return;
      }

      history.push(number);
      queue.push(number);
      lengthCount[number] = lengthCount[currentNumber] + 1;
    });
  }
};

const addNode = (nodes, key, value) => {
  if (nodes[key]) {
    nodes[key].push(value);
    return;
  }
  nodes[key] = [value];
};

test('solution', () => {
  expect(
    solution(6, [
      [3, 6],
      [4, 3],
      [3, 2],
      [1, 3],
      [1, 2],
      [2, 4],
      [5, 2],
    ])
  ).toBe(3);
});
