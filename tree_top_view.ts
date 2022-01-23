'use strict';

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

function readLine(): string {
    return inputLines[currentLine++];
}

function topView(root: TreeNode): string {
    let queue = [];
    queue.push(root);
    let result = [root.nodeValue];
    let left = 0;
    let right = 0;
  
    while (queue.length > 0) {
        let cur = queue.shift();
        if (cur.left != null) {
            queue.push(cur.left);
        }
        if (cur.right!= null) {
            queue.push(cur.right);
        }
        if (cur.level < left) {
            //NOTE: specify value with unshift()
            result.unshift(cur.nodeValue);
            left--;
        }
        if (cur.level > right) {
            result.push(cur.nodeValue);
            right++;
        }
     }
    return result.join(' ');
}
class TreeNode {    
    nodeValue: number;
    level: number;
    left: TreeNode;
    right: TreeNode;
    constructor (nodeValue: number, level:number) {
        this.nodeValue = nodeValue;
        this.level = level;
        this.left = null;
        this.right = null;
    }
}
function insert (node: TreeNode, value: number, level: number) {
    if (node == null) {
        node = new TreeNode(value, level);
    }
    else {
        if (value < node.nodeValue) {
            let cur = insert(node.left, value, node.level - 1);
            node.left = cur;
        }
        else if (value > node.nodeValue) {
            let cur = insert (node.right, value, node.level + 1);
            node.right = cur;
        }
    }
    return node;
}

function main() {    
    //let inputs = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));
    //let inputs = [1,2,5,3,6,4]; //expected : 1 2 5 6
    let inputs = [1, 14, 3, 7, 4, 5, 15, 6, 13, 10, 11, 2, 12, 8, 9]    //expected : 2 1 14 15 12 
    let root = null;
   
    for (let i=0; i < inputs.length; i++) {
        root = insert(root, inputs[i], 0);
    }
    let result = topView(root);
    console.log(result);
}

main();

