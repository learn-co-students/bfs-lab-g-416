function bfs(rootNode, vertices, edges){
    rootNode.distance = 0;
    let queue = [rootNode]
    let discovered = [rootNode]
    while (queue.length != 0) {
        let current = queue.shift()
        let adjacent = findAdjacent(current.name, vertices, edges)
        discovered = discovered.concat(adjacent)
        markDistanceAndPredecessor(current, adjacent)
        queue = queue.concat(adjacent)
    }
    return discovered
}

function findAdjacent(root, vertices, edges) {
    let connections = edges.filter(e => e.includes(root))
    let nodeNames = connections.map(edge => edge.filter(node => node != root)[0])
    let nodes = nodeNames.map(name => vertices.find(v => v.name === name))
    return nodes.filter(node => node.distance === null)
}

function markDistanceAndPredecessor(first, adjacentNodes) {
    return adjacentNodes.map (node => {
        node.predecessor = first
        node.distance += 1
    })
}