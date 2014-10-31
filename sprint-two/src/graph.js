var Graph = function(){
  this.values = [];
  this.edges = [];
};

Graph.prototype.addNode = function(newNode, toNode){
  this.values.push(newNode);
  if(this.values.length === 2) {
    this.addEdge(this.values[0], newNode);
  }
  else if(toNode) {
    this.addEdge(newNode, toNode);
  }
};

Graph.prototype.contains = function(node){
  for(var i = 0; i < this.values.length; i++) {
    if (node === this.values[i]) {
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  for(var i = 0; i < this.values.length; i++) {
    if (node === this.values[i]) {
      this.values.splice(i, 1);
      this.removeEdge(node);
    }
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
  for(var i = 0; i < this.edges.length; i++ ){
    if((this.edges[i][0] === fromNode && this.edges[i][1] === toNode) ||
        (this.edges[i][0] === toNode && this.edges[i][1] === fromNode)) {
      return true;
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.edges.push([fromNode, toNode]);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  if(!toNode) {
    for(var i = 0; i < this.edges.length; i++ ){
      if((this.edges[i][0] === fromNode) || this.edges[i][1] === fromNode) {
        this.edges.splice(i, 1);
      }
    }
  }
  else {
    for(var i = 0; i < this.edges.length; i++ ){
      if((this.edges[i][0] === fromNode && this.edges[i][1] === toNode) ||
          (this.edges[i][0] === toNode && this.edges[i][1] === fromNode)) {
        this.edges.splice(i, 1);
      }
    }
    var toDeleteFromNode = true;
    var toDeleteToNode = true;
    for(var i = 0; i < this.edges.length; i++ ) {
      if(this.edges[i][0].indexOf(fromNode) > 0) {
        toDeleteFromNode = false;
      }
      if(this.edges[i][0].indexOf(toNode) > 0) {
        toDeleteToNode = false;
      }
    }

    if(toDeleteFromNode) {
      this.removeNode(fromNode);
    }

    if(toDeleteToNode) {
      this.removeNode(toNode);
    }
  }



};

/*
 * Complexity: What is the time complexity of the above functions?
 * add edge and add node = O(1);
 * removing node = O(V+E);
 * removing edge = O(E);
 * Query = O(V);
 */
