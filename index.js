function bfs(rootNode, vertices, edges){
    let arr = [];
    let visited = [];
    rootNode.distance = 0;
    visited.push(rootNode);
    while (visited.length !== 0) {
        let node = visited[0];
        arr.push(node);
        visited = visited.splice(1);
        let adjNodes = findAdjacent(node.name, vertices, edges);
        markDistanceAndPredecessor(node, adjNodes);
        visited.push(...adjNodes);
    }
    return arr;
}

function findAdjacent (node, vertices, edges) {
    let adjNodes = [];
    for (let edge of edges) {
        if (edge.includes(node)) {
            let currentEdge = edge;
            for (let vertice of currentEdge) {
                if (vertice !== node) {
                    let adj = vertices.find(vert => vert.name === vertice)
                    adj.distance === null ? adjNodes.push(adj) : '';
                }
            }
        }
    }
    return adjNodes;
}

function markDistanceAndPredecessor (currentNode, adjacentNodes) {
    for (let node of adjacentNodes) {
        node.predecessor = currentNode;
        node.distance = currentNode.distance + 1;
    }
}