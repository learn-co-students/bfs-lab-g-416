function bfs(rootNode, vertices, edges){
  rootNode.distance = 0;
  let queue = [rootNode];
  let visited = [rootNode];

  while (queue.length != 0 ){
    let currNode = queue.shift()
    let adjacentVertices = findAdjacent(currNode.name, vertices, edges);

    markDistanceAndPredecessor(currNode, adjacentVertices)
    visited = visited.concat(adjacentVertices);
    queue = queue.concat(adjacentVertices);
  }

  return visited
}

function findAdjacent(edgeName, vertices, edges) {
  let relevantEdges = edges.filter(arr => arr.includes(edgeName))
  let adjacentNodeNames = relevantEdges.map(arr => arr.filter(x => x != edgeName)[0])

  let adjacentVertices = [];

  for (let i=0; i < vertices.length; i++) {
    if (adjacentNodeNames.includes(vertices[i].name)){
      adjacentVertices.push(vertices[i]);
    }
  }

  return adjacentVertices.filter(x => x.distance == null);
}

function markDistanceAndPredecessor(predecessor, adjacentNodes) {
  adjacentNodes.map( n => {
    n.distance = n.distance + 1,
    n.predecessor = predecessor
  })
}
