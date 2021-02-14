const solution = (string, commands) => {

  const left = string.split('');
  const right = [];

  commands.forEach(command => {
    if(command === 'L' && left[0]) {
      right.push(left.pop());
    }
    
    if(command === 'D' && right[0]) {
      left.push(right.pop());
    }
    
    if(command === 'B') {
      left.pop();
    }

    if(command.length > 1) {
      left.push(command[command.length - 1]);
    }
  })

  return [...left, ...right.reverse()].join('');
}


test('solution', () => {
  expect(solution("abcd", ["P x", "L", "P y"])).toBe("abcdyx");

  expect(solution("abc", ["L", "L","L","L", "P x", "L", "B","P y"])).toBe("yxabc");

  expect(solution("dmih", ["B", "B", "P x", "L", "B", "B", "B", "P y", "D", "D", "P z"])).toBe("yxz");

});

