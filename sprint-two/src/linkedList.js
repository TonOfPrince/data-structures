var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if (this.tail !== null) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
  };

  list.removeHead = function(){
    if(this.head !== null) {
      var value = this.head.value;
      if(this.head.next !== null) {
        var tempNode = this.head.next;
        this.head = tempNode;
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

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
