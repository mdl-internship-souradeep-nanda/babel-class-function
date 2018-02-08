export default class Linky {
  constructor() {
    this.head = null;
    this.count = 0;
  }
  length() {
    return this.count;
  }
  add(obj) {
    const newNode = {
      last: this.head,
      payload: obj,
    };
    this.head = newNode;
    this.count += 1;
  }
  pop() {
    if (this.head !== null) {
      this.head = this.head.last;
    }
    this.count -= 1;
  }
  peek() {
    if (this.head !== null) {
      return this.head.payload;
    }
    return null;
  }
}
