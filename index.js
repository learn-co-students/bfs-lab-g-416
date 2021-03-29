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

function markDistanceAndPredecessor(node, adjacentNodes) {
    for (let idx in adjacentNodes) {
        if (node.distance === null) node.distance = 0;
        adjacentNodes[idx].distance = node.distance + 1
        adjacentNodes[idx].predecessor = node
    }
    return adjacentNodes
}

// function bfs(startingNode, vertices, edges){

//     let adjacentNodes = findAdjacent(startingNode.name, vertices, edges)
//     markDistanceAndPredecessor(startingNode, adjacentNodes)
//     if (adjacentNodes.length !== 0) {
//         for ( idx in adjacentNodes) {
//             return bfs(adjacentNodes[idx], vertices, edges)
//         }
//     }
//     return startingNode
// }