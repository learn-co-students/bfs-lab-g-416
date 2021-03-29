let findAdjacent = (nodeName, vertices, edges) => {
    const adjacentNodes = []
    let selectEdges = edges.filter( e => e[0] === nodeName || e[1] === nodeName );
    for (let idx in selectEdges) {
        let adjacentNodeName
        let adjacentVertex
        nodeName === selectEdges[idx][0] ? adjacentNodeName = selectEdges[idx][1] : adjacentNodeName = selectEdges[idx][0]
        adjacentVertex = vertices.find( v => v.name === adjacentNodeName )
        if (adjacentVertex.distance === null) adjacentNodes.push(adjacentVertex)
    }
    return adjacentNodes
}

function markDistanceAndPredecessor(predecessor, adjacentNodes){
    adjacentNodes.map(function(node){
      node.distance = predecessor.distance + 1;
      node.predecessor = predecessor;
    })
  }

// function markDistanceAndPredecessor(node, adjacentNodes) {
//     for (let idx in adjacentNodes) {
//         if (node.distance === null) node.distance = 0;
//         adjacentNodes[idx].distance = node.distance + 1
//         adjacentNodes[idx].predecessor = node
//     }
//     return adjacentNodes
// }

function bfs(startingNode, vertices, edges){
    let visited = [startingNode]
    let visitedOrder = [startingNode]
    startingNode.distance = 0;

    while ( visited.length !== 0) {
        let currentNode = visited.shift()
        let adjacentNodes = findAdjacent(currentNode.name, vertices, edges)
        markDistanceAndPredecessor(currentNode, adjacentNodes)
        visited = visited.concat(adjacentNodes)
        visitedOrder = visitedOrder.concat(adjacentNodes)
    }
    return visitedOrder
}