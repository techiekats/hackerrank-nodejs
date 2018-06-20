'use strict';

const fs = require('fs');


// Complete the leastTimeToInterview function below.
function leastTimeToInterview(k, adjList, adjMatrix, visited,timeInstant, node, signalOn) {
    //mark node visited
    visited[node] = 1;
    if (instant % k == 0) {
        instant+=k;
    }

}

function main() {

    const n = 7;

    const k = 4;

    const m = 7;
  
    let input = "1 2 3,2 3 1,1 4 4,4 6 7,7 5 2,3 5 1,4 5 5".split(',');
    let adjList = {};
    let adjMatrix = new Array(n);
    //build adjMatrix
    for (let i=0; i<n; i++) {
        adjMatrix[i] = new Array(n);        
    }
    input.forEach(element => {
        var edge = element.split(' ');
        let a = parseInt(edge[0], 10);
        let b = parseInt(edge[1], 10);
        let w = parseInt(edge[2], 10);
        adjMatrix[a-1][b-1] = w;
        adjMatrix[b-1][a-1] = w;
        if (adjList[a] == undefined) {
            adjList[a] = [];
        }
        adjList[a].push(b);
        
        if (adjList[b] == undefined) {
            adjList[b] = [];
        }        
        adjList[b].push(a);
        
    });
    const result = leastTimeToInterview(n, k, m, adjList, adjMatrix, {},0, 1);

    console.log(adjMatrix);
    console.log(adjList);
}

main();