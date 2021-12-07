class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  
  const find_sum_of_path_numbers = function(root) {
    let sum = 0;
    let all_substrings = recursive_sum_array(root, '0'); //NOTE: let string start with 0 instead of '' to avoid NaN with parseInt
    all_substrings.forEach(x=>sum+= parseInt(x));
    return sum;
  };
  
  recursive_sum_array = function (node, str) {
      str += node.value.toString();
      let results = [];
      if (node.left != null) {
          let recursion = recursive_sum_array(node.left, str);
          //NOTE: the result of this concatenation will need to be passed bacl to result
          results = results.concat(recursion);
      }
      if (node.right != null) {
          results = results.concat(recursive_sum_array(node.right, str));
      }
      //hence leaf node
      if (node.left == null && node.right == null) {
          results.push(str);
      }
      return results;
  };
  
  
  var root = new TreeNode(1)
  root.left = new TreeNode(0)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(1)
  root.right.left = new TreeNode(6)
  root.right.right = new TreeNode(5)
  console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root)}`)
  