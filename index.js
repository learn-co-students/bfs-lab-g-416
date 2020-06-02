function bfs(rootNode, vertices, edges){
  rootNode.distance = 0
  const queue = [rootNode]
  const visited = []
  while (queue.length !== 0){
    let firstNode = queue.shift()
    let adjvert = findAdjacent(firstNode.name, vertices, edges)
    markDistanceAndPredecessor(firstNode, adjvert)
    for (let adj of adjvert){
      queue.push(adj)
    }
    visited.push(firstNode)
  }
  return visited
}

function findAdjacent(rootNode, vertices, edges){
  let vert = []
  for (let edge of edges){
    if (edge.includes(rootNode)){
      for (let vertex of edge){
        if( vertex !== rootNode){
          vertices.find(e => e.name === vertex && e.distance === null)?
            vert.push(vertices.find(e => e.name === vertex && e.distance === null)): null
        }
      }
    }
  }
  return vert
}

function markDistanceAndPredecessor(node, adjacent){
  for(let connection of adjacent){
    connection.predecessor = node
    if (connection.distance === null){
      connection.distance = 1
    }
    else{
      connection.distance += 1
    }
  }
}
