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

  if(typeof item === "object") {
    this._storage[JSON.stringify(item)] = true;
  } else {
    this._storage[item] = true;
  }
};

setPrototype.contains = function(item){
  // for(var i = 0; i < this._storage.length; i++) {
  //   if(this._storage[i] === item) {
  //     return true;
  //   }
  // }
  // return false
  if(typeof item === "object") {
    return this._storage[JSON.stringify(item)];
  } else {
    return this._storage[item];
  }
};

setPrototype.remove = function(item){
  // for(var i = 0; i < this._storage.length; i++) {
  //   if(this._storage[i] === item) {
  //     this._storage.splice(i, 1);
  //   }
  // }
  if(typeof item === "object") {
    this._storage[JSON.stringify(item)] = false;
  } else {
    this._storage[item] = false;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * everything is constant
 */
