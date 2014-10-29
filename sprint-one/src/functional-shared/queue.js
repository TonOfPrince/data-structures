var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  newQueue.head = 0;
  newQueue.tail = 0;
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.tail] = value;
  this.tail++;
};

queueMethods.dequeue = function(){
  var item = this.storage[this.head];
  delete this.storage[this.head];
  this.head++;
  return item;

};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};



