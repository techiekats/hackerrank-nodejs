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

function node (value, depth) 
{   
    this.left = -1;
    this.right = -1;
    this.value = value;
    this.depth = depth;
    //only does inorder. No swaps
    this.inorder = () => {
          if (this.value == -1) {
              return "";
          }
          if (this.left == -1 && this.right == -1) {
              return this.value;
          }
          if (this.left == -1) {
              return this.value + this.right.inorder();
          }
          if (this.right == -1) {
              return this.left.inorder() + this.value;
          }
    };
    this.swap = (k) => {
        if (depth % k == 0) {
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
    }
    
    this.addLeft = (value) => {
        this.left = node(value, this.depth + 1);
    }
    this.addRight = (value) => {
        this.right = node(value, this.depth + 1);
    }
}

function stack () {
    const ds = new Object();
    ds.arr = [];
    ds.isEmpty = () => {
        return this.arr.length === 0;
    }
    ds.push = (x) => {
        this.arr.push(x);
    }   
    ds.pop = () => {
        if (arr.length === 0) {
            throw "Can't pop from empty stack";
        }
        return arr[arr.length-1];
    }  
    return ds;
}

function swapNodes(indexes, queries) {
    var result = "";
    queries.forEach(element => {
        var s = stack();
        var root = node (1,1);
        s.push(root);//root
        indexes.forEach(i=>{
            var currentNode = s.pop();
            var d = currentNode.depth;
            if (i[0] != -1) {
                var left = node(i[0], d+1);
                node.addLeft(left);
                s.push(left);
            }
            if (i[1] == -1) {
                var right = node (i[1], d+1);
                node.addRight(right);
                s.push(right);
            }
        });
        root.swap(element);
        result += root.inorder();
        result += "\n";
    });
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

    //console.log(result.map(x => x.join(' ')).join("\n") + "\n");
    //ws.end();
}
main();