function bfs(rootNode, vertices, edges){
  let startEdges = edges.filter( (edge) => {
    return edge[0] === rootNode.name ||  edge[1] === rootNode.name
  })
  
  let startVertices = vertices.filter( (vertix) => {
    return startEdges.map ( (edge) => {
      return vertix.name === edge[0] || vertix.name === edge[1]
    })
  })
  
  return startVertices.map( (rootVertice) => {
    return rootVertice
  })
}

// function findAdjacent(rootPoint, vertices, edges){
//   console.log('rootPoint', rootPoint)
//   let theEdges = edges.filter( (edge) => {
//     //console.log('edge[0]', edge[0])
//     return edge[0] === rootPoint || edge[1] === rootPoint
//   })
//   //console.log('theEdges:', theEdges)
//   let arrayOfVertices = vertices.filter( (vertix) => { 
   
//       console.log('theEdges:', theEdges)
//       return theEdges.map( (e) => {
//         console.log('e:', e);
//         console.log('vertixname', vertix.name);
//         return vertix.name == e[0] || vertix.name == e[1] 
//         //(vertix.name === e[0] || vertix.name === e[1]) && vertix.name !== rootPoint ;
//       }) 
    
//   });
  //console.log('arrayOfVertices:', arrayOfVertices)
//   return arrayOfVertices
// }

function markDistanceAndPredecessor(rootNode, adjacentNodes){
  adjacentNodes.map( (node) => {
    node.distance = rootNode.distance + 1
    node.predecessor = rootNode
  })
}

function findAdjacent(rootNodeName, vertices, edges){
  let edgesWithName = edges.filter( (edge) => {
    return (edge[0] == rootNodeName || edge[1] == rootNodeName)
  })
  let edgePoints = edgesWithName.map( (edge) => {
    console.log('edge', edge)
    return edge.find( (item) => {
      return (item != rootNodeName)
    })
  })
  
  let theAdjacentNodes = edgePoints.map( (pointOfEdge)=> {
    return findNode( pointOfEdge, vertices)
  }).filter( (node) => node.distance == null)
  
  return theAdjacentNodes
}

function findNode(nodeName, vertices){
  return vertices.find( (vertix) => {
    return vertix.name == nodeName
  })
}