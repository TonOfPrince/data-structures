describe('tree', function() {
  var tree;

  beforeEach(function() {
    trie = Trie();
  });

  it('should add new words', function() {
    trie.dictionaryAdd('bear');
    expect(tree.addChild).to.be.a("function");
    expect(tree.contains).to.be.a("function");
    expect(tree.hasOwnProperty("value")).to.equal(true);
  });

});
