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
  join(newList) {
    const newListCopy = newList;
    this.count += newList.count;
    newListCopy.count = this.count;
    let tempNode = newList.head;
    while (tempNode.last) {
      tempNode = tempNode.last;
    }
    tempNode.last = this.head;
    this.head = newList.head;
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
