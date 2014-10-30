var makeTree = function(value){
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;
  newTree.children = undefined;
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  var child = makeTree(value);
  if (!this.children) {
      this.children = [child];
  } else {
    this.children.push(child);
  }

};

treeMethods.contains = function(target){
  var found = false;
  if (this.value === target) {
    found = true;
  } else {
    if (this.children) {
      for(var i = 0; i < this.children.length; i++) {
        found = found || this.children[i].contains(target);
      }
    }
  }
  return found;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
