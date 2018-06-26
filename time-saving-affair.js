'use strict';

const fs = require('fs');
//https://www.hackerrank.com/contests/w38/challenges/a-time-saving-affair/problem

// Complete the leastTimeToInterview function below.
function leastTimeToInterview(n,k, adjList, visited,instant, node) {
    console.log(`leastTimeToInterview(${n},${k},adjL, ${visited}, ${instant}, ${node})`);
    //mark node visited
    visited[node] = 1;
    if (instant % k == 0) {
        if ((instant / k)%2 == 1) {
            instant += k;
        }        
    }
    let minDistance = Number.MAX_SAFE_INTEGER;
    Object.keys(adjList[node]).forEach( e => {        
        if (visited[e] == undefined) {
            let currentDist = -1;
            if (e == n) {            
                console.log(`adding ${adjList[node][e]} to ${instant}`);   
                currentDist = instant +  adjList[node][e];
            }
            else {
                let clone = Object.assign({}, visited);
                currentDist = leastTimeToInterview (n, k, adjList, clone, instant + adjList[node][e], e);                
            }
            if (currentDist < minDistance) {
                minDistance = currentDist;
            }
        }
    });
    return  minDistance === Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : minDistance ;
}

function main() {
    //Expected: 9
    const n = 4;
    const m = 4;
    const k = 5;
    let input ="1 2 1,2 2 1,2 3 4,3 4 3".split(',');
    /* Expected : 0
    const n = 1;
    const k = 4;
    const m = 1;
    let input = "1 2 4".split(",");*/
    /* Expected:9
    const n = 5;
    const k = 5;
    const m = 5;
    let input = "1 2 1,2 3 4,3 5 3,2 4 3,4 3 2".split(',');*/
   /* Expected : 8
    const n=5;
    const k=3;
    const m=5;
    let input = "1 2 2,2 3 4,3 4 1,3 5 8,4 5 1".split(',');*/
/*
    const n = 7;
    const k = 4;
    const m = 7;
  
    let input = "1 2 3,2 3 1,1 4 4,4 6 7,7 5 2,3 5 1,4 5 5".split(',');*/
    let adjList = {};
    input.forEach(element => {
        var edge = element.split(' ');
        let a = parseInt(edge[0], 10);
        let b = parseInt(edge[1], 10);
        let w = parseInt(edge[2], 10);
        if (adjList[a] == undefined) {
            adjList[a] = {};
        }
        adjList[a][b] = w;
        
        if (adjList[b] == undefined) {
            adjList[b] = {};
        }        
        adjList[b][a] = w;
        
    });
    const result = (n==1) ? 0 : (m==1) ? adjList[1][n]  :leastTimeToInterview(n, k, adjList, {},0, 1);
    console.log(result);
    console.log(adjList);
}

main();