// return first node that matches the name of the vertex
const findNode = (nodeName, vertices) => {
  return vertices.find((vertice) => nodeName === vertice.name);
};

// return array of adjacent nodes
const findAdjacent = (nodeName, vertices, edges) => {
  return (
    edges
      // 1. create an array of edges that includes node name
      .filter((edge) => edge.includes(nodeName))
      // 2. create an array of edges that does not include node name
      .map((edge) => edge.filter((node) => nodeName !== node)[0])
      // 3. create array of nodes that matches the name of each vertex
      .map((node) => findNode(node, vertices))
      // 4. return new array of nodes that excludes discovered nodes
      .filter((node) => node.distance === null)
  );
};

const markDistanceAndPredecessor = (rootNode, adjacentNodes) => {
  adjacentNodes.forEach((node) => {
    if (rootNode.distance === null) {
      rootNode.distance = 0;
    }
    node.distance = rootNode.distance + 1;
    node.predecessor = rootNode;
  });
  return adjacentNodes;
};

// should return an array of nodes in the order they were visited
const bfs = (rootNode, vertices, edges) => {
  rootNode.distance = 0;
  let discovered = [rootNode];
  let discoverOrder = [rootNode];
  while (discovered.length !== 0) {
    let currentNode = discovered.shift();
    let adjacentNodes = findAdjacent(currentNode.name, vertices, edges);
    discoverOrder = discoverOrder.concat(adjacentNodes);
    markDistanceAndPredecessor(currentNode, adjacentNodes);
    discovered = discovered.concat(adjacentNodes);
  }
  return discoverOrder;
};
