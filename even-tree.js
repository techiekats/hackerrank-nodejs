//https://www.hackerrank.com/challenges/even-tree/problem

function getEvenTree(adjList) {
    let result = 0;
    adjList[1].forEach(node => {
        let count = getTreeNodeCount(adjList, node);
        console.log(`Count from 1 - ${node} = ${count+1}`);
        if (count % 2 == 0) {
            result++;
            console.log('removing 1-' + node);
        }
    });
    return result;
}
function getTreeNodeCount(adjList, currentNode) {
    if (adjList[currentNode] == undefined) {
        return 1;
    }
    let count = 1;
    adjList[currentNode].forEach(node => {
        if (adjList[node] != undefined) {
            count+=getTreeNodeCount(adjList, node);
        }
        else {
            count++;
        }
    });
    return count;
}
function main() {
   // const treeNodesEdges = "10 9".split(' ');
    //var input="2 1\n3 1\n4 3\n5 2\n6 1\n7 2\n8 6\n9 8\n10 8".split("\n");
    const treeNodesEdges = "5 4".split(' ');
    var input="1 2\n1 3\n1 5\n2 4".split("\n");
    const treeEdges = parseInt(treeNodesEdges[1], 10);
    let adjList = {};
    for (var i = 0; i < treeEdges; i++) {
        const treeFromTo = input[i].split(' ');
        let from = parseInt(treeFromTo[0], 10);
        let to = parseInt(treeFromTo[1], 10);
        if (to < from) {
            let temp = from; from = to; to = temp;
        }
        if (adjList[from] == undefined) {
            adjList[from] = [];
        }
        adjList[from].push (to);
    }
    const result = getEvenTree(adjList);
    console.log(result);
}

main();