function bfs(rootNode, vertices, edges){
  let queue = []
  let visited = []
  queue.push(rootNode)
  
  while (queue.length !== 0) {

    let adjNodes = findAdjacent(queue[0].name, vertices, edges)
    adjNodes.forEach(vertix => queue.push(vertix))

    markDistanceAndPredecessor(queue[0], adjNodes)
    if (queue[0].distance === null && queue[0].predecessor === null) {
      queue[0].distance = 0
      queue[0].predecessor = "none"
    }

    visited.push(queue.shift())

  }
  return visited
}


const findAdjacent = (vertixName, vertices, edges) => {

  let foundVerticesNames = []
  let foundVertices = []

  let foundEdges = edges.filter(array => {
    if (array.includes(vertixName)) {
      return array
    }
  })

  foundEdges.forEach(array => foundVerticesNames.push(array.find(element => element !== vertixName)))


  foundVerticesNames.forEach(name => {
    vertices.forEach(vertix => {
      if (vertix.name === name && vertix.distance === null) {
        foundVertices.push(vertix)
      }
    })
  })

  return foundVertices

}

const markDistanceAndPredecessor = (node, adjacentNodesArray) => {
  adjacentNodesArray.forEach(adjNode => {
    adjNode.predecessor = node
    adjNode.distance = node.distance + 1
  })
}
