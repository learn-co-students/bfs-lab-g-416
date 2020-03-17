function bfs(rootNode, vertices, edges) {
  let visitedNodes = []
  let queue = []
  queue.push(rootNode)
  let currentNode = rootNode
  rootNode.distance = 0
  while (queue.length > 0) {
    let adjacentNodes = findAdjacent(currentNode.name, vertices, edges)
    let markedAdjacentNodes = markDistanceAndPredecessor(rootNode, adjacentNodes)

    if (markedAdjacentNodes.length > 0) {
      for (let node of markedAdjacentNodes)
        queue.push(node)
    }

    visitedNodes.push(queue.shift())
    currentNode = queue[0]
  }
  return visitedNodes
}

function findAdjacent(vertixName, vertices, edges) {
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

function markDistanceAndPredecessor(rootNode, adjacentNodes) {
  for (let node of adjacentNodes) {
    node.distance = 1
    node.predecessor = rootNode
  }
  return adjacentNodes
}