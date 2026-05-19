let graph = {};

function addVertex(vertex) {
  if (!graph[vertex]) {
    graph[vertex] = [];
  }
}

function addEdge(src, dest) {
  graph[src].push(dest);
}

function topo() {
  let inDegree = {};

  // Step 1: Initialize indegree of all vertices as 0
  for (let vertex in graph) {
    inDegree[vertex] = 0;
  }

  // Step 2: Calculate indegree
  for (let vertex in graph) {
    for (let neighbour of graph[vertex]) {
      inDegree[neighbour]++;
    }
  }

  // Step 3: Push all nodes with indegree 0 into queue
  let queue = [];
  for (let vertex in inDegree) {
    if (inDegree[vertex] == 0) {
      queue.push(vertex);
    }
  }

  let result = [];

  // Step 4: Process queue
  while (queue.length > 0) {
    let node = queue.shift();
    result.push(node);

    // This loop must be inside while loop
    for (let neighbour of graph[node]) {
      inDegree[neighbour]--;

      if (inDegree[neighbour] == 0) {
        queue.push(neighbour);
      }
    }
  }

  // Step 5: Check cycle
  if (result.length != Object.keys(graph).length) {
    console.log("Cycle detected");
    return;
  }

  console.log("Topological Sort:", result);
}

addVertex(1);
addVertex(2);
addVertex(3);
addVertex(4);
addVertex(5);

addEdge(1, 2);
addEdge(2, 3);
addEdge(2, 4);
addEdge(5, 2);

topo();
