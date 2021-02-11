function bfs(rootNode, vertices, edges){
	let queue = []
	let array = []
	rootNode.distance = 0
	queue.push(rootNode)
	array.push(rootNode)
	while(!queue.length == 0) {
		let firstNode = queue.shift()
		let adjacentVertices = findAdjacent(firstNode.name, vertices, edges)
		markDistanceAndPredecessor(firstNode, adjacentVertices)
    adjacentVertices.forEach(vertex => {
			queue.push(vertex)
			array.push(vertex)
		})
	}

	return array
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
