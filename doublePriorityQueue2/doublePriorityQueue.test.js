const solution = (operations) => {
  const queue = [];
  operations.forEach((operation) => {
    const [command, number] = operation.split(' ');

    if (command === 'I') {
      queue.push(number);
      return;
    }

    queue.sort((a, b) => a - b);

    if (command === 'D' && number[0] === '-') {
      queue.shift();
      return;
    }

    queue.pop();
  });

  return queue[0] ? [Math.max(...queue), Math.min(...queue)] : [0, 0];
};

test('solution', () => {
  expect(solution(['I 16', 'D 1'])).toEqual([0, 0]);
});
