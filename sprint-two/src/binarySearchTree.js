var makeBinarySearchTree = function(value){
  var tree = Object.create(binaryTreeMethods);
  tree.left = null;
  tree.right = null;
  tree.value = value;
  return tree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {
  var newTree = makeBinarySearchTree(value);
  if (value > this.value && !this.right) {
    this.right = newTree;
  } else if (value > this.value && this.right){
    this.right.insert(value);
  } else if (value < this.value && !this.left) {
    this.left = newTree;
  } else if (value < this.value && this.left) {
    this.left.insert(value);
  } else {

  }

};

binaryTreeMethods.contains = function(target) {
  var found = false
  if (target === this.value) {
    found = true;
  } else if (target > this.value && this.right){
    found = found || this.right.contains(target);
  } else if (target < this.value && this.left) {
    found = found || this.left.contains(target);
  } else {

  }
  return found;
};

binaryTreeMethods.depthFirstLog = function(callback){
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};

binaryTreeMethods.breadthFirstLog = function(callback) {
//callback(this);
  var arr = [this];
  while (arr.length > 0) {
    var item = arr.shift();
    if(callback) {
      callback(item.value);
    }
    if(item.left) {
      arr.push(item.left);
    }
    if(item.right) {
      arr.push(item.right);
    }
  }

}
/*
 * Complexity: What is the time complexity of the above functions?
 * O(log(n)) average
 */

