const solution = (n, results) => {
  const history = {};

  updateHistory(n,results, history);

  const historyArray = Object.values(history).map((x,i)=> x= {...x, 'index': i+1});

  let answer = 0;

  historyArray.forEach(node => {
    answer += searchNodeCounts(history, node, n);
  })

  return answer;
}

const searchNodeCounts = (history, node, n) => {
  const win = getMatchCount(history, node.win, 'win')
  const lose = getMatchCount(history, node.lose, 'lose')
  if(win + lose === n-1) {
    return 1;
  }
  return 0;
}


const getMatchCount= (history, queue, type) => {
  let count = 0;
  let passedNode = [...queue];
  let newQueue = [...queue];
  while(newQueue[0]) {
    count += 1;
    const player = newQueue.shift();
    const newNodes = history[player][type].filter(x=> !passedNode.includes(x));
    passedNode = [...passedNode, ...newNodes];
    newQueue = [...newQueue, ...newNodes];
  }

  return count;
}

const updateHistory =(n,results, history) =>{
  for(let i = 1; i <=n; i += 1) {
    history[i] = {win: [], lose: [], matches: new Set([])}
  }

  results.forEach(matchResult => {
    const [win, lose] = matchResult;
    history[win].win.push(lose);
    history[lose].lose.push(win);
    history[win].matches.add(lose);
    history[lose].matches.add(win);
  })
  
  for(let i = 1; i <=n; i += 1) {
    history[i].matches = [...history[i].matches]
  }
}


test('solution', () => {
  expect(solution(5, [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]])).toBe(2);
});
// test('solution', () => {
//   const history =   {
//     '1': { win: [ 2 ], lose: [], matches: [ 2 ] },
//     '2': { win: [ 5 ], lose: [ 4, 3, 1 ], matches: [ 4, 3, 1, 5 ] },
//     '3': { win: [ 2 ], lose: [ 4 ], matches: [ 4, 2 ] },
//     '4': { win: [ 3, 2 ], lose: [], matches: [ 3, 2 ] },
//     '5': { win: [], lose: [ 2 ], matches: [ 2 ] }
//   };
//   const loseQueue = [ 2 ];
//   expect(getLoseMatchCount(history, loseQueue, 0)).toBe(4);
// });