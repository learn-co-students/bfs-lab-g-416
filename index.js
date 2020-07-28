function bfs(rootNode, vertices, edges){
    rootNode.distance = 0
    let discovered = [rootNode]
    let discoverOrder = [rootNode]
    while (discovered.length != 0) {
      let currentNode = discovered.shift()
      let adjacentNodes = findAdjacent(currentNode.name, vertices, edges)
      discoverOrder = discoverOrder.concat(adjacentNodes);
      markDistanceAndPredecessor(currentNode, adjacentNodes)
      discovered = discovered.concat(adjacentNodes)
    }
    return discoverOrder
}

function findAdjacent(nodeName, vertices, edges) {
    return edges.filter(e => e.includes(nodeName)).map(e => e.filter(n => n != nodeName)[0]).map(n => findNode(n, vertices)).filter(n => n.distance == null)
}

function findNode(nodeName, vertices) {
    return vertices.find(v => v.name == nodeName)
}

function markDistanceAndPredecessor(rootNode, adjacentNodes) {
    adjacentNodes.forEach(function(node) {
        if (rootNode.distance == null) rootNode.distance = 0;
        node.distance = rootNode.distance + 1;
        node.predecessor = rootNode;
    })
    return adjacentNodes
}