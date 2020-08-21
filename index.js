function bfs(rootNode, vertices, edges){
    rootNode.distance = 0
    let queue = [rootNode]
    let queOrder = [rootNode]
    
    while(queue.length != 0){
        let firstNode = queue.shift()
        let adjVerts = findAdjacent(firstNode.name, vertices, edges)
        queOrder = queOrder.concat(adjVerts)
        markDistanceAndPredecessor(firstNode, adjVerts)
        queue = queue.concat(adjVerts)
    }
    return queOrder
}

function findAdjacent(nodeName,  vertices, edges){
    return edges.filter(function(edge){
      return edge.includes(nodeName)
    }).map(function(edge){
      return edge.filter(function(node){
        return (node != nodeName)
      })[0]
    }).map(function(name){
      return findNode(name, vertices)
    }).filter(function(node){
      return node.distance == null;
    })
  }

function markDistanceAndPredecessor(strt, nodes){
    nodes.map(n => {
        n.distance = strt.distance + 1
        n.predecessor = strt
    })
    return nodes
}

function findNode(nodeName, vertices){
    return vertices.find(function(vertex){
      return vertex.name == nodeName
    })
  }