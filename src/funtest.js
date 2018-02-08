function Linky() {
  this.head = null;
  this.count = 0;
  this.add = function add(obj) {
    const newNode = {
      last: this.head,
      payload: obj,
    };
    this.head = newNode;
    this.count += 1;
  };
  this.length = function length() {
    return this.count;
  };
}

module.exports = Linky;
