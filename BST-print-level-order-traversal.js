// Given the root of a binary tree, print its level-order traversal. For example:



TreeNode =  function (value)  {
  this.value = value;
  this.left = null;
  this.right = null;
}

TreeNode.prototype.addLeftChild = function(value) {
  let k =  new TreeNode(value);
  this.left = k;
}

TreeNode.prototype.addRightChild = function(value) {
  this.right = new TreeNode(value);
}


var tree = new TreeNode(1);
tree.addLeftChild(2);
tree.addRightChild(3);
tree.right.addLeftChild(4);
tree.right.addRightChild(5);

printLevelOrderTraversal = function(node) {
  let queue = [];
  queue.push(node);
  while(queue.length !== 0) {
    let currentNode = queue[0];
    if(currentNode.left !== null) {
      queue.push(currentNode.left);
    }
    if (currentNode.right !== null) {
      queue.push(currentNode.right);
    }
    console.log(currentNode.value);
    queue.shift();
  }

}