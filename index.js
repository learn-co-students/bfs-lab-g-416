function bfs(rootNode, vertices, edges){
    let arr = []
    let visited = []
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


function findAdjacent(rootNode, vertices, edges) {
    let adjacentNodes = [];
    edges.forEach(edge => {
        if(edge[0] === rootNode) {
            let adjacentNode = vertices.find(vertex => vertex.name === edge[1] && vertex.distance === null);
            if(adjacentNode){
                adjacentNodes.push(adjacentNode);
            }
        }
        if(edge[1] === rootNode) {
            let adjacentNode = vertices.find(vertex => vertex.name === edge[0] && vertex.distance === null);
            if(adjacentNode){
                adjacentNodes.push(adjacentNode);
            }
        }
        
    });
    return adjacentNodes
}

// function findAdjacent(nodeName, vertices, edges) {
//     let adjacent = [];
//     let filteredEdges = edges.filter(edge => {
//         return edge.includes(nodeName);
//     })
//     console.log(filteredEdges);
//     //for each filtered edge, loop thru its eles and find the node.name that's not nodeName
//       //find the vertex that has that as its name and push it to the adjacent arr
//         //return adjacent array
//     filteredEdges.forEach(element => {
//         element.forEach(name => {
//             if (name != nodeName) {
//               let node = vertices.find(n => n.name === name)
//               if (node.distance == null){
//                   adjacent.push(node);
//               }
//             }
//         })
//     });
//     return adjacent;
//   }

function markDistanceAndPredecessor(node, adjacentNodesArray) {
    adjacentNodesArray.forEach(adjNode => {
        adjNode.predecessor = node
        adjNode.distance = node.distance + 1
    }) 
}