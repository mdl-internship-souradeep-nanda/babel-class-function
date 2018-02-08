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
  this.pop = function pop() {
    if (this.head !== null) {
      this.head = this.head.last;
    }
    this.count -= 1;
  };
  this.peek = function peek() {
    if (this.head !== null) {
      return this.head.payload;
    }
    return null;
  };
}

module.exports = Linky;
