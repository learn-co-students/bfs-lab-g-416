
function bfs(startingNode, vertices, edges){
  startingNode.distance = 0;
  let discovered = [startingNode]
  let discoverOrder = [startingNode]
  while(discovered.length !== 0){
    let currentNode = discovered.shift()
    let adjacentNodes = findAdjacentNodes(currentNode.name, vertices, edges)
    discoverOrder = discoverOrder.concat(adjacentNodes);
    markDistanceAndPredecessor(currentNode, adjacentNodes)
    discovered = discovered.concat(adjacentNodes)
  }
  return discoverOrder
}

// function findAdjacentNodes(firstNode, vertices, edges) {

//   // locate adjacent nodes from vertices 
//   const flattenEdges = [].concat.apply([], edges);
//   console.log(flattenEdges)
//   const firstAdjacent = 
//     vertices.find(v => v.name == flattenEdges[flattenEdges.indexOf(firstNode) - 2] );
//   const secondAdjacent = 
//     vertices.find(v => v.name == flattenEdges[flattenEdges.indexOf(firstNode) + 2] );

//   const adjacentNodes = [firstAdjacent, secondAdjacent];

// 	// set explored vertice distance to 0
// 	console.log('v0 ', vertices[0])
// 	if (vertices[0].distance === null)
// 	  vertices[0].distance = 0;
	
//   return adjacentNodes.map(v => v.distance !== 0);
// }
// need to write a test for non-discovered nodes
function findAdjacentNodes(nodeName,  vertices, edges){
  return edges.filter(function(edge){
    return edge.includes(nodeName)
  }).map(function(edge){
    return edge.filter(function(node){
      return (node != nodeName)
    })[0]
  }).map(function(name){
    return findNode(name, vertices)
  }).filter(function(node){
    return node.distance == null;
  })
}

function markDistanceAndPredecessor(predecessor, adjacentNodes) {

  return adjacentNodes.map(node => {
    node.distance = predecessor.distance + 1;
    node.predecessor = predecessor;
  });
}



function findNode(nodeName, vertices){
  return vertices.find(function(vertex){
    return vertex.name == nodeName
  })
}











