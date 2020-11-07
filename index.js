function bfs(rootNode, vertices, edges){
    let queue = [rootNode]
    let visitedNodes = []

    while(queue.length !== 0) {       
        let currentNode = queue.shift() 
        if (visitedNodes.includes(currentNode)) {
            currentNode = queue.shift()
        }       
        visitedNodes.push(currentNode)
        let adjacentNodes = findAdjacent(currentNode.name, vertices, edges)
        markDistanceAndPredecessor(currentNode, adjacentNodes)
        for (const node of adjacentNodes) {            
            queue.push(node)                   
        }
    }
    return visitedNodes
}
function findAdjacent(vertex, vertices, edges) {
    let adjacent = []
    let newAdjacent

    for (const pair of edges) {
        newAdjacent = null 

        if (pair[0] == vertex) {
            newAdjacent = vertices.filter((x) => x.name == pair[1])[0]
        } else if (pair[1] == vertex) {
            newAdjacent = vertices.filter((x) => x.name == pair[0])[0]
        }

        if (!!newAdjacent && newAdjacent.distance === null) {
            adjacent.push(newAdjacent)
        }
    }        
    return adjacent 
}

function markDistanceAndPredecessor(node, adjacentNodes) {
    let currentDistance
    let newArray = []

    if (!!node.distance) {
        currentDistance = node.distance 
    } else {
        currentDistance = 0 
    }
   
    for (const n of adjacentNodes) {
        if (n.distance === null) {
            n.predecessor = node
            n.distance = currentDistance + 1 
            newArray.push(n)
        }
        
    }

    return newArray

}
