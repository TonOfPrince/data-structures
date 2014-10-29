var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var head = 0, tail = 0, count = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[tail] = value;
    tail++;
    count++;
  };

  someInstance.dequeue = function(){
    var item = storage[head];
    delete storage[head];
    head++;
    count = Math.max(0,count - 1);
    return item;
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
