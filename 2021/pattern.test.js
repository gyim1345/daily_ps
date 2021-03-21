const solution = (name_list) => {
  name_list.sort((a, b) => a.length - b.length)
  for (let i = 0; i < name_list.length; i += 1) {
      for (let j = i + 1; j < name_list.length; j += 1) {
          if (ifStringMatch(name_list[i], name_list[j])) {
              return true;                
          }
      }
  }
  return false;
}

const ifStringMatch = (stringPattern, targetString) => {
  return targetString.match(stringPattern);
}


test('solution', () => {
  expect(solution(["asd", "bcc", "cee"])).toBe(false);
  expect(solution(["a", "ewqr", "aaa", "aa"])).toBe(true);
  expect(solution(["cee", "dde", "ewqr", "rrr"])).toBe(false);
});