function bfs(rootNode, vertices, edges){
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

function findAdjacent(node, vertices, edges) {
  let adjacentNodes = []
  for (let arr of edges) {
    if (arr.includes(node)) {
      let index = arr.indexOf(node)
      let arrCopy = arr.slice()
      arrCopy.splice(index, 1)
      let adjacentNodeName = arrCopy[0]
      let adjacentNode = vertices.filter(element => {
        return element.name === adjacentNodeName && typeof element.distance != "number"
      })
      if (adjacentNode.length > 0) {
        adjacentNodes.push(adjacentNode[0])
      }
    }
  }
  return adjacentNodes
}

function markDistanceAndPredecessor(rootNode, adjacentNodes) {
  for (let node of adjacentNodes) {
    node.distance = 1
    node.predecessor = rootNode
  }
  return adjacentNodes
}
