function bfs(startingNode, vertices, edges){ //should return an array of nodes in the order they were visited
  //start at rootNode
  //call findAdjacent on rootNode
  //iterate over array returned by findAdjacent and add (in order) to 'discovered' array
  //then set rootNode to next in vertices array
    //repeat the process
      //stop when no more in queue (start queue as an array == vertices)
      startingNode.distance = 0
      let discovered = [startingNode]
      let discoverOrder = [startingNode]
      while(discovered.length != 0){
        let currentNode = discovered.shift()
        let adjacentNodes = findAdjacent(currentNode.name, vertices, edges)
        discoverOrder = discoverOrder.concat(adjacentNodes);
        markDistanceAndPredecessor(currentNode, adjacentNodes)
        discovered = discovered.concat(adjacentNodes)
      }
      return discoverOrder
}


function findAdjacent(nodeName, vertices, edges) {
  let adjacent = [];
  let filteredEdges = edges.filter(edge => {
      return edge.includes(nodeName);
  })
  console.log(filteredEdges);
  //for each filtered edge, loop thru its eles and find the node.name that's not nodeName
    //find the vertex that has that as its name and push it to the adjacent arr
      //return adjacent array
  filteredEdges.forEach(element => {
      element.forEach(name => {
          if (name != nodeName) {
            let node = vertices.find(n => n.name === name)
            if (node.distance == null){
                adjacent.push(node);
            }
          }
      })
  });
  return adjacent;
}

function markDistanceAndPredecessor(predecessor, adjacentNodes) {
  adjacentNodes.map(function(node){
    node.distance = predecessor.distance + 1;
    node.predecessor = predecessor;
   })
}
