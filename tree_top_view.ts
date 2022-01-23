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
            result.unshift();
            result[0] = cur.nodeValue;
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
        node = new TreeNode(value, 0);
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
    let inputs = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));
    let root = null;
   
    for (let i=0; i < inputs.length; i++) {
        root = insert(root, inputs[i], 0);
    }
    let result = topView(root);
    console.log(result);
}


