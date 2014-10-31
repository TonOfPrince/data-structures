var makeTree = function(value){
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;
  newTree.children = undefined;
  newTree.parent = null;
  return newTree;
};

var treeMethods = {};

treeMethods.removeFromParent = function() {
  for (var i = 0; i < this.parent.children.length; i++) {
    if (this.parent.children[i] === this) {
      this.parent.children.splice(i, 1);
      this.parent = null;
      break;
    }
  }
};

treeMethods.addChild = function(value){
  var child = makeTree(value);
  child.parent = this;
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

treeMethods.traverse = function(callback) {
  callback(this.value);
  if (this.children) {
    for(var i = 0; i < this.children.length; i++) {
       this.children[i].traverse(callback);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addchild is constant
 * everything else is log(n)
 */
