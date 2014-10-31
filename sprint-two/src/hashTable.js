var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var specificBucket = this._storage.get(i);
  if (specificBucket === undefined) {
    this._storage.set(i,[[k, v]]);
  }
  else {
    var inserted = false;
    for (var j= 0; j<specificBucket.length; j++) {
      if (specificBucket[j][0] === k) {
        specificBucket.splice(j, 1, [k,v]);
        inserted = true;
      }
    }
    if (!inserted) {
      specificBucket.push([k,v]);
    }
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var specificBucket = this._storage.get(i);
  for(var j = 0; j < specificBucket.length; j++) {
    if(specificBucket[j][0] === k) {
      console.log(specificBucket[j][1]);
      return specificBucket[j][1];
    }
  }
};

HashTable.prototype.remove = function(k){
  this.insert(k,null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 * O(1) average; O(n) worst
 */
