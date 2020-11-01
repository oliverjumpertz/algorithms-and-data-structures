class Node {
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }
}

export default class Queue {
  constructor() {
    this._head = null;
    this._tail = null;
    this.length = 0;
  }
  isEmpty() {
    return this.length === 0;
  }
  enqueue(element) {
    const tail = this._tail;
    const node = new Node(element, null);
    this._tail = node;
    if (tail == null) {
      this._head = node;
    } else {
      tail.next = node;
    }
    this.length++;
  }
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const head = this._head;
    this._head = head.next;
    this.length--;
    return head.element;
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this._head.element;
  }
}
