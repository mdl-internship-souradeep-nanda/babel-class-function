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
}
