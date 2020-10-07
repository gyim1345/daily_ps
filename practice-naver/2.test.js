const solution = (n, edges) => {
  const sortedEdge = edges.map(edge => edge.sort());
  const deleteCount = 2;
  const finalTreeCount = 3;
  const nodeGroupCount = n/finalTreeCount;
  const nodes = new Array(n).fill(0).map((_,i) => i);
  const nodeCounts = getNodeGroupCountOfEveryNode(sortedEdge, nodes);
  return 1;
}

const getNodeGroupCountOfEveryNode = (edges,nodes) => {
  const a = 0;
  const queue = [a];
  let modifiedEdge = [...edges];
  while(queue[0] !== undefined) {

    const connected = modifiedEdge.filter(edge=> edge[0] === queue[0] || edge[1] === queue[0])
    modifiedEdge = modifiedEdge.filter(edge=> edge[0] !== queue[0] && edge[1] !== queue[0])
    connected.forEach(node => {
      if(node[1] === queue[0]) {
        queue.push(node[0]);
        return;
      }
      queue.push(node[1]);
    })
    console.log(queue)
    queue.shift();
  }
  }

test('solution', () => {
  expect(solution(9,[[0,2],[2,1],[2,4],[3,5],[5,4],[5,7],[7,6],[6,8]])).toEqual([2,5]);
});