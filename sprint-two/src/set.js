var makeSet = function(){
  var set = Object.create(setPrototype);
 // set._storage = undefined;
  set._storage = Object.create(null);
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  // if(this._storage !== undefined) {
  //   if(!this.contains(item)) {
  //     this._storage.push(item);
  //   }
  // }
  // else{
  //   this._storage = [item];
  // }

  this._storage[item] = true;
};

setPrototype.contains = function(item){
  // for(var i = 0; i < this._storage.length; i++) {
  //   if(this._storage[i] === item) {
  //     return true;
  //   }
  // }
  // return false
  return this._storage[item];
};

setPrototype.remove = function(item){
  // for(var i = 0; i < this._storage.length; i++) {
  //   if(this._storage[i] === item) {
  //     this._storage.splice(i, 1);
  //   }
  // }
  this._storage[item] = false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
