const topological_sort = function(vertices, edges) {
    let sortedOrder = [];
    let inDegreeCount = {};
    let adjacencyList = {};
    let sources = [];
    //initialize
    for (let i=0; i< vertices; i++) {
        inDegreeCount[i] = 0;
        adjacencyList[i] = [];
    }
    edges.forEach(edge => {
        let from = edge[0];
        let to = edge[1];
        inDegreeCount[to] = inDegreeCount[to] + 1;
        adjacencyList[from].push(to);
    });
    Object.keys(inDegreeCount).forEach(x=>{
            if (inDegreeCount[x] == 0){
                sources.push(x);
            }
        }
    );
    while(sources.length != 0) {
        let node = sources.shift();
        sortedOrder.push(node);
        adjacencyList[node].forEach(x=>{
            inDegreeCount[x] = inDegreeCount[x] - 1;
            if (inDegreeCount[x] == 0){
                sources.push(x);
            }
        });
    }
    // topological sort is not possible as the graph has a cycle
    if (sortedOrder.length !== vertices) {
        return [];
    }

    return sortedOrder;
  };
  
  
  console.log(`Topological sort: ${topological_sort(4, [[3, 2], [3, 0], [2, 0], [2, 1]])}`)
  console.log(`Topological sort: ${topological_sort(5, [[4, 2], [4, 3], [2, 0], [2, 1], [3, 1]])}`)
  console.log(`Topological sort: ${topological_sort(7, [[6, 4], [6, 2], [5, 3], [5, 4], [3, 0], [3, 1], [3, 2], [4, 1]])}`)
  