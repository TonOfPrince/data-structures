var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.storage = {};
  _.extend(newStack, makeStack.stackMethods);
  return newStack;
};

makeStack.stackMethods = {};

makeStack.stackMethods.push = function(value){
  this.storage[this.size()] = value;
  //console.log(this.storage);
};

makeStack.stackMethods.pop = function(){
  var result = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];

  return result;
};

makeStack.stackMethods.size = function(){
  return Object.keys(this.storage).length;
};


