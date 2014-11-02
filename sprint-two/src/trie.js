var Trie = function(number) {
  this.children = undefined;
  this.words = {};
  this.number = number;
};

Trie.prototype.userAdd(number) {

};

Trie.prototype.userRemove(number) {

};

Trie.prototype.cycle(word) {

};

Trie.prototype.dictionaryAdd(word) {
  var num;
  for (var i = 0; i <word.length; i++) {
    if (/[abc]/i.match(word[i])) {
      num = 2;
    } else if (/[def]/i.match(word[i])) {
      num = 3;
    } else if (/[ghi]/i.match(word[i])) {
      num = 4;
    } else if (/[jkl]/i.match(word[i])) {
      num = 5;
    } else if (/[mno]/i.match(word[i])) {
      num = 6;
    } else if (/[pqrs]/i.match(word[i])) {
      num = 7;
    } else if (/[tuv]/i.match(word[i])) {
      num = 8;
    } else if (/[wxyz]/i.match(word[i])) {
      num = 9;
    }
    if (!this.children.hasOwnProperty(number)) {
      var child = new Trie(num);
      this.children.push(child);
    }
    this = child;
  }
  this.words.push(word);
};

Trie.prototype.dictionaryRemove(word) {

};
