var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value) {
    var newNode = makeNode(value);
    if (this.head) {
      this.head.previous = newNode;
      newNode.next = this.head;
    } else {
      this.tail = newNode;
    }
    this.head = newNode;
  };

  list.removeTail = function(value) {
    if(this.tail) {
      var value = this.tail.value;
      if(this.tail.previous) {
        var tempNode = this.tail.previous;
        this.tail = tempNode;
        this.tail.next = null;
      }
      else {
        this.tail = null;
      }
      return value;
    }
  };

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if (this.tail) {
      this.tail.next = newNode;
      newNode.previous = this.tail;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
  };

  list.removeHead = function(){
    if(this.head) {
      var value = this.head.value;
      if(this.head.next) {
        var tempNode = this.head.next;
        this.head = tempNode;
        this.head.previous = null;
      }
      else {
        this.head = null;
      }
      return value;
    }
  };

  list.contains = function(target){
    var tempNode = this.head;
    while(tempNode !== null) {
      if(tempNode.value === target) {
        return true;
      }
      tempNode = tempNode.next;
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * contains: O(n)
 * everything else: O(1);
 */
