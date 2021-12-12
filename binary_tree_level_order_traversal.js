class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  
  const traverse = function(root) {
    let result = [];
    let queue = [root];
    while (queue.length > 0) {
        let currentLevel = [];
        let previousLevel = [];
        while (queue.length > 0) {
            let current = queue.shift();  //NOTE: the shift() operation to dequeue. will remove the first element from array
            //the opposite of shift() is unshift() when need to place element at the first position of the array
            previousLevel.push(current.value);
            if (current.left != null) {
                currentLevel.push(current.left);
            }
            if (current.right != null) {
                currentLevel.push(current.right);
            }
        }
        result.push(previousLevel);
        queue = currentLevel;
    }
    return result;
  };
  
  
  
  var root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(9);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  console.log(`Level order traversal: ${traverse(root)}`);
  