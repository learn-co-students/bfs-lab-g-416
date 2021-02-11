function bfs(rootNode, vertices, edges){
	rootNode.distance = 0
	let discovered = [rootNode]
	let discoverOrder = [rootNode]
	while(!discovered.length == 0) {
		let firstNode = discovered.shift()
		let adjacentVertices = findAdjacent(firstNode.name, vertices, edges)
		discoverOrder = discoverOrder.concat(adjacentVertices)
		markDistanceAndPredecessor(firstNode, adjacentVertices)
		discovered = discovered.concat(adjacentVertices)
	}

	return discoverOrder
}

function findAdjacent(rootNode, vertices, edges) {
	let adjacent = []
	edges.forEach(edge => {
		if (edge.includes(rootNode)) {
			adjacent.push(rootNode === edge[0] ? edge[1] : edge[0])
		}
	})
	return adjacent.map(node => {
		return vertices.find(vertex => (vertex.name === node && vertex.distance === null))
	}).filter(el => el!= null)
}

function markDistanceAndPredecessor(rootNode, adjacentNodes) {
	adjacentNodes.forEach(node => {
		node.distance = rootNode.distance + 1
		node.predecessor = rootNode
	});
	return adjacentNodes
}
