/*
    rootNode = vertices[0]
    queue = []
    addVertexToQueue(rootNode)
        // queue = [rootNode]
    while(!queue.length == 0) {
        let firstNode = queue.shift()
    adjacentVertices = findAdjacent(firstNode)
        for vertex in adjacentVertices {
            markDistanceAndPredecessor(vertex)
            addToQueue(vertex)
        }
    }
*/
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

function markDistanceAndPredecessor(vertex) {

}

function addToQueue(vertex) {

}

function bfs(rootNode, vertices, edges){

}
