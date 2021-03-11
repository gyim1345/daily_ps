const solution = (N,M,startNode,edges) => {
  const graph = new Map();

  edges.forEach(edge => {
    const [vertexA, vertexB] = edge.split(' ');

    if(!graph.get(vertexA)) {
      graph.set(vertexA, []);
    }
    if(!graph.get(vertexB)) {
      graph.set(vertexB, []);
    }
    
    graph.set(vertexA, [...graph.get(vertexA), vertexB]);
  })

  let dfsPath = [startNode];
  let bfsPath = [];

  dfs(graph, startNode, dfsPath)
  bfs(graph, startNode, bfsPath)
  return [dfsPath, bfsPath];
}

const dfs = (graph, currentNode, pathHistory) => {
  const vertices = graph.get(currentNode); 
  if(!vertices) {
    return;
  }
  vertices.forEach(node => {
    if(!pathHistory.includes(node)) {
      pathHistory.push(node);
      dfs(graph, node, pathHistory)
    }
  })
}

const bfs = (graph, startNode, pathHistory) => {

  const queue = [startNode];
  const history = {[startNode]: true};
  while(queue[0]) {
    const currentNode = queue.shift()
    pathHistory.push(currentNode);
    const vertices = graph.get(currentNode);
    vertices.forEach(vertex => {
      if(!history[vertex]) {
        history[vertex] = true;
        queue.push(vertex);
      }
    })
    
  }

}


test('solution', () => {
  expect(solution('4','5','1',['1 2', '1 3', '1 4', '2 4', '3 4'])).toEqual([['1'
  , '2', '4', '3'], ['1', '2', '3', '4']]);
});