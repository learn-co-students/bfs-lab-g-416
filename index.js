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

//array of node names as strings
//let startingNode = vertices[0]
//{name: '34th&6th', distance: null, predecessor: null}
// vertices = [
//     {name: '34th&6th', distance: null, predecessor: null},
//     {name: '23rd&6th', distance: null, predecessor: null},
//       {name: '28th&Bwy', distance: null, predecessor: null},

//     {name: '14th&6th', distance: null, predecessor: null},
//     {name: '23rd&Bwy', distance: null, predecessor: null},
//     {name: '14th&Lex', distance: null, predecessor: null},
//     {name: '23rd&Lex', distance: null, predecessor: null}
//   ]
function bfs(startingNode, vertices, edges){
    startingNode.distance = 0;
    let queue = [startingNode];
    let discovered = [startingNode]
    let current = startingNode
    while (queue.length > 0){
        let adjacent = findAdjacent(current.name, vertices, edges)
        //console.log(adjacent)
        queue = queue.concat(adjacent)
        
        //console.log(discovered)
        markDistanceAndPredecessor(current, adjacent)
        discovered = discovered.concat(adjacent)
        //console.log(queue)
        current = queue.shift()
        console.log(current)
    }
    return discovered
    // while (queue.length != 0) {
    //     let current = queue.shift() //object
    //     console.log(current)
    //     let adjacent = findAdjacent(current.name, vertices, edges)
    // // console.log(adjacent)
    //     discovered.push(adjacent)
    //     markDistanceAndPredecessor(current, adjacent)
    //     queue.push(adjacent)
    // }
    // return discovered;
}

// function bfs(startingNode, vertices, edges){
//     startingNode.distance = 0
//     let discovered = [startingNode]
//     let discoverOrder = [startingNode]
//     while(discovered.length != 0){
//       let currentNode = discovered.shift()
//       let adjacentNodes = findAdjacent(currentNode.name, vertices, edges)
//       discoverOrder = discoverOrder.concat(adjacentNodes);
//       markDistanceAndPredecessor(currentNode, adjacentNodes)
//       discovered = discovered.concat(adjacentNodes)
//     }
//     return discoverOrder
//   }
  

