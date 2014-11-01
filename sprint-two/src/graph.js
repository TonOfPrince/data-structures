var Graph = function(){
  this.values = {};
  this.edges = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  if(Object.keys(this.values).length === 1) {
    var first = Object.keys(this.values)[0];
    this.addEdge(first, newNode);
  }
  else if(toNode) {
    this.addEdge(newNode, toNode);
  }
  this.values[newNode] = newNode;
  // console.log(this.edges);
};

Graph.prototype.contains = function(node){
  return (this.values[node] === node);
};

Graph.prototype.removeNode = function(node){
  this.removeEdge(node);
  delete this.values[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  return this.edges[fromNode].hasOwnProperty(toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if (!this.edges[fromNode]) {
    var obj = {};
    obj[toNode] = toNode;
    this.edges[fromNode] = obj;
  }
  this.edges[fromNode][toNode] = toNode;
  if (!this.edges[toNode]) {
    var obj = {};
    obj[fromNode] = fromNode;
    this.edges[toNode] = obj;
  }
  this.edges[toNode][fromNode] = fromNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  if(!toNode) {
    if (Object.keys(this.edges).length > 0) {
      var arr = Object.keys(this.edges[fromNode]);
      for (var i = 0; i < arr.length; i++) {
        delete this.edges[arr[i]][fromNode];
      }
      delete this.edges[fromNode];
    }
  }
  else {
    delete this.edges[fromNode][toNode];
    delete this.edges[toNode][fromNode];
  }
  if(this.edges[fromNode]) {
    if (Object.keys(this.edges[fromNode]).length === 0) {
      delete this.values[fromNode];
    }
  }
  if(this.edges[toNode]) {
    if (Object.keys(this.edges[toNode]).length === 0) {
      delete this.values[toNode];
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
