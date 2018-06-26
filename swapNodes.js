'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

class Node 
{  
    constructor(value, depth) {
        this.left = -1;
        this.right = -1;
        this.value = value;
        this.depth = depth;
    };
    inorder () {
        if (this.value == -1) {
            return "";
        }
        if (this.left == -1 && this.right == -1) {
            return  new String(this.value).toString();
        }
        if (this.left == -1) {
            var expr = this.right.inorder().toString();
            return `${this.value} ${expr}`;
        }
        if (this.right == -1) {
            var expr = this.left.inorder().toString();
            return `${expr} ${this.value}`;
        }
        var l = this.left.inorder().toString();
        var r = this.right.inorder().toString();
        return `${l} ${this.value} ${r}`;
    };
    swap (k) {
        if (this.depth % k == 0) {
            var temp = this.left;
            this.left = this.right;
            this.right = temp;
        }
        if (this.left !== -1) {
            this.left.swap(k);
        }
        if (this.right !== -1) {
            this.right.swap(k);
        }
    };
    addLeft (value) {
        this.left = new Node(value, this.depth + 1);
        return this.left;
    };
    addRight (value) {
        this.right = new Node(value, this.depth + 1);
        return this.right;
    };
}

function swapNodes(indexes, queries) {
    var result = [];

    var queue = [];
    var root = new Node (1,1);
    queue.push(root);//root
    for (let j=0; j< indexes.length; j++){
        let i=indexes[j];
        var currentNode = queue.shift();
        //the order of pushing matters !!
        if (i[0] != -1) {
            var left = currentNode.addLeft(i[0]);
            queue.push(left);
        }
        if (i[1] != -1) {
            var right = currentNode.addRight(i[1]);
            queue.push(right);
        }
    }
    queries.forEach(element => {
        root.swap(element);
        result.push(root.inorder());
    });
    return result;
}

function main() {
    
    let indexes = [];
    let queries = [];

    /*3
2 3
-1 -1
-1 -1
2
1
1 
    indexes = [[2,3], [-1,-1], [-1,-1]];
    queries = [1,1];*/
    /*5
2 3
-1 4
-1 5
-1 -1
-1 -1
1
2
    indexes = [[2,3],[-1,4],[-1,5],[-1,-1],[-1,-1]];
    queries = [2];*/ 
    /*11
2 3
4 -1
5 -1
6 -1
7 8
-1 9
-1 -1
10 11
-1 -1
-1 -1
-1 -1
2
2
4*/
    indexes = [[2,3],[4,-1],[5,-1],[6,-1],[7,8],[-1,9],[-1,-1],[10,11],[-1,-1],[-1,-1],[-1,-1]];
    queries = [2,4];
    let result = swapNodes(indexes, queries);
    console.log(result.join("\n") + "\n");
}
main();