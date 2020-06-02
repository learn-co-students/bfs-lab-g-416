function bfs(rootNode, vertices, edges){

}

function findAdjacent(rootNode, vertices, edges){
  let vert = []
  for (edge in edges){
    if (edge.includes(rootNode)){
      for (vertice in edge){
        if(vertice !== rootNode){
          let connection = vertices.find(e => e.name = vertice)
          vert.push(connection)
        }
      }
    }
  }
  return vert
}
