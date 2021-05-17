function bfs(rootNode, vertices, edges){
    rootNode.distance = 0
    let discovered = [rootNode]
    let nodeOrder = [rootNode]
    while (discovered.length != 0) {
        let currentNode = discovered.shift()
        let adjacentNodes = findAdjacent(currentNode.name, vertices, edges)
        nodeOrder = nodeOrder.concat(adjacentNodes)
        markDistanceAndPredecessor(currentNode, adjacentNodes)
        discovered = discovered.concat(adjacentNodes)
    }
    return nodeOrder
}

function findAdjacent(name,  vertices, edges) {
    return edges.filter(edge => {
        return edge.includes(name)
    }).map(edge => {
        return edge.filter(node => {
            return (node != name)
        })[0]
    }).map(name => {
        return vertices.find(vertex => {
            return vertex.name == name
        })
    }).filter(node => {
        return node.distance == null
    })
}

function markDistanceAndPredecessor(predecessor, adjacentNodes) {
    adjacentNodes.map(node => {
        node.distance = predecessor.distance + 1
        node.predecessor = predecessor
    })
}

