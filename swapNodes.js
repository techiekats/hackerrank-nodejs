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
            return  "" + this.value + "";
        }
        if (this.left == -1) {
            return this.value + this.right.inorder();
        }
        if (this.right == -1) {
            return this.left.inorder() + this.value;
        }
    };
    swap (k) {
        if (this.depth % k == 0) {
            var temp = this.left;
            this.left = this.right;
            this.right = temp;
            if (this.left !== -1) {
                this.left.swap(k);
            }
            if (this.right !== -1) {
                this.right.swap(k);
            }
        }
    };
    addLeft (value) {
        this.left = new Node(value, this.depth + 1);
    };
    addRight (value) {
        this.right = new Node(value, this.depth + 1);
    };
}

function swapNodes(indexes, queries) {
    var result = "";
    queries.forEach(element => {
        var stack = [];
        var root = new Node (1,1);
        stack.push(root);//root
        indexes.forEach(i=>{
            var currentNode = stack.pop();
            
            var d = currentNode.depth;
            if (i[0] != -1) {
                var left = new Node(i[0], d+1);
                currentNode.addLeft(left);
                stack.push(left);
            }
            if (i[1] == -1) {
                var right = new Node (i[1], d+1);
                currentNode.addRight(right);
                stack.push(right);
            }
            //console.log(currentNode);
        });
        //console.log(root);
        root.swap(element);

        result += root.inorder();
        result += "\n";
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
1 */
    indexes = [[2,3], [-1,-1], [-1,-1]];
    queries = [1,1];
    let result = swapNodes(indexes, queries);
    console.log(result);
    //console.log(result.map(x => x.join(' ')).join("\n") + "\n");
    //ws.end();
}
main();