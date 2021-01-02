//array of adjacent nodes
//findAdjacent('34th&6th',  vertices, edges)
function findAdjacent(rootNode, vertices, edges){
    let current = rootNode
    const nodes = [];
    const final = [];
    edges.forEach(edgeSet => {
        if (edgeSet.includes(current)){
            edgeSet.forEach(edge => {
                if (current !== edge){
                    nodes.push(edge)
                }
            })
        }
    })
    nodes.forEach(node => {
        vertices.forEach(vertice => {
            if (vertice.name == node && vertice.distance !== 0) {
                final.push(vertice)
            }
        })
    })
    return final;
}

//return array
function markDistanceAndPredecessor(rootNode, adjacentNodes){
    const current = rootNode;
    adjacentNodes.forEach(node => {
        node.distance = 1;
        node.predecessor = current
    })

    return adjacentNodes
}

// array of node names as strings
// function bfs(startingNode, vertices, edges){
//     startingNode.distance = 0;
//     let current = startingNode;
//     let queue = [];
        // while (queue.length != 0){

        // }
//     for (let i = 1; i < vertices.length; i++){
//         let adjacent = findAdjacent(current.name, vertices, edges)
//         markDistanceAndPredecessor(current, adjacent)
//         queue.push(current.name)
//         current = vertices[i]
//     }
//     return queue;
// }

function bfs(startingNode, vertices, edges){
    startingNode.distance = 0
    let discovered = [startingNode]
    let discoverOrder = [startingNode]
    while(discovered.length != 0){
      let currentNode = discovered.shift()
      let adjacentNodes = findAdjacent(currentNode.name, vertices, edges)
      discoverOrder = discoverOrder.concat(adjacentNodes);
      markDistanceAndPredecessor(currentNode, adjacentNodes)
      discovered = discovered.concat(adjacentNodes)
    }
    return discoverOrder
  }
  

