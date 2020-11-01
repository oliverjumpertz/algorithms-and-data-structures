class Node {
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }
}

export default class Stack {
  constructor() {
    this._top = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  push(element) {
    const top = this._top;
    const node = new Node(element, top);
    this._top = node;
    this.size++;
  }
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const head = this._top;
    this._top = head?.next;
    this.size--;
    return head.element;
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this._top?.element;
  }
}
