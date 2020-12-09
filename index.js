let edges = [
    ['14th&6th', '23rd&6th'],
    ['23rd&6th', '34th&6th'],
    ['34th&6th', '28th&Bwy'],
    ['28th&Bwy', '23rd&Bwy'],
    ['23rd&Bwy', '14th&Lex'],
    ['14th&Lex', '23rd&Lex']
]

let vertices = [
    {name: '34th&6th', distance: null, predecessor: null},
    {name: '23rd&6th', distance: null, predecessor: null},
    {name: '28th&Bwy', distance: null, predecessor: null},
    {name: '14th&6th', distance: null, predecessor: null},
    {name: '23rd&Bwy', distance: null, predecessor: null},
    {name: '14th&Lex', distance: null, predecessor: null},
    {name: '23rd&Lex', distance: null, predecessor: null}
]

function bfs(rootNode, vertices, edges){
    rootNode.distance = 0
    let queue = [rootNode]
    let discoverOrder = [rootNode]
    while(queue.length != 0){
        let currentNode = queue.shift()
        let adjacentNodes = findAdjacent(currentNode.name, vertices, edges)
        discoverOrder = discoverOrder.concat(adjacentNodes);
        markDistanceAndPredecessor(currentNode, adjacentNodes)
        queue = queue.concat(adjacentNodes)
    }
    return discoverOrder
}
function findAdjacent(nodeName,  vertices, edges){
    return edges.filter(edge => {return edge.includes(nodeName)})
    .map(edge => {return edge.filter(node => {return (node != nodeName)})[0]})
    .map(name => {return findNode(name, vertices)})
    .filter(node => {return node.distance == null;})
}
  
function markDistanceAndPredecessor(predecessor, adjacentNodes){
    adjacentNodes.map(
        function(node){
            node.distance = predecessor.distance + 1;
            node.predecessor = predecessor;
    })
}
  
  
  
function findNode(nodeName, vertices){
    return vertices.find(function(vertex){
        return vertex.name == nodeName
    })
}

// bfs({name: '34th&6th', distance: null, predecessor: null}, vertices, edges)  