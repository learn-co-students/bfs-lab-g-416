function bfs(rootNode, vertices, edges){

}

function findAdjacent(nodeName,  vertices, edges){
    let adjacentEdges = edges.filter(edge => {
        return edge.includes(nodeName)
    })
    let adjacentNames = adjacentEdges.map(edge => edge.filter(side => side !== nodeName)[0])
    let adjacentNodes = adjacentNames.map(name => {
        return vertices.filter(vertex => vertex.name === name)[0]
    })
    let finalNodes = adjacentNodes.filter(node => node.distance === null)
    return finalNodes;
  }

function markDistanceAndPredecessor(node, adjacentNodes) {
    adjacentNodes.forEach(el => {
        el.predecessor = node;
        el.distance = node.distance + 1
    })
}

// function pseudocode() {
//     rootNode = vertices[0]
//     queue = []
//     addVertexToQueue(rootNode)
//     while(queue.length !== 0) {
//         let firstNode = queue.shift()
//         let adjacentVertices = findAdjacent(firstNode)
//         for (vertex in adjacentVertices) {
//             markDistanceAndPredecessor(vertex)
//             addToQueue(vertex)
//         }
//     }
// }