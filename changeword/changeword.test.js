const solution = (begin, target, words) => {
  const counts = [];
  if (!words.includes(target)) {
    return 0;
  }
  dfs(begin, target, words, counts);
  return Math.min(...counts);
};

const dfs = (current, target, words, counts, count = 0) => {
  if (current === target) {
    counts.push(count);
    return;
  }

  const newWords = getSimilarity(current, words);

  if (newWords.includes(target)) {
    return counts.push(count + 1);
  }
  if (!newWords[0]) {
    return;
  }

  newWords.forEach((currentWord) => {
    const filteredWord = words.filter((word) => word !== currentWord);
    dfs(currentWord, target, filteredWord, counts, count + 1);
  });
};

const getSimilarity = (current, words) => {
  return words.reduce((acc, cur) => {
    if (cur === current) {
      return acc;
    }

    let similarity = 0;
    for (let i = 0; i < current.length; i += 1) {
      if (current[i] === cur[i]) {
        similarity += 1;
      }
    }
    if (similarity === cur.length - 1) {
      return [...acc, cur];
    }

    return acc;
  }, []);
};

test('solution', () => {
  expect(
    solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])
  ).toBe(4);
});
