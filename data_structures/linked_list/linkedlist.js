class Node {
  constructor(prev, element, next) {
    this.element = element;
    this.prev = prev;
    this.next = next;
  }
}

export default class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this.length = 0;
  }
  isEmpty() {
    return this.length === 0;
  }
  append(element) {
    const tail = this._tail;
    const node = new Node(tail, element, null);
    this._tail = node;
    if (tail == null) {
      this._head = node;
    } else {
      tail.next = node;
    }
    this.length++;
  }
  prepend(element) {
    const head = this._head;
    const node = new Node(null, element, head);
    this._head = node;
    if (head == null) {
      this._tail = node;
    } else {
      head.prev = node;
    }
    this.length++;
  }
  get(index) {
    return this._node(index).element;
  }
  set(index, element) {
    const node = this._node(index);
    node.element = element;
  }
  insert(index, element) {
    const oldNode = this._node(index);
    const newNode = new Node(oldNode.prev, element, oldNode);
    oldNode.prev.next = newNode;
    oldNode.prev = newNode;
    this.length++;
  }
  removeAtIndex(index) {
    const nodeToRemove = this._node(index);
    const prev = nodeToRemove.prev;
    const next = nodeToRemove.next;
    
    if (prev == null) {
      this._head = next;
    } else {
      prev.next = next;
      nodeToRemove.prev = null;
    }

    if (next == null) {
      this._tail = prev;
    } else {
      next.prev = prev;
      nodeToRemove.next = null;
    }

    nodeToRemove.element = null;

    this.length--;
  }
  indexOf(element) {
    let curr = this._head;

    for (let i = 0; i < this.length; i++) {
      if (curr.element === element) {
        return i;
      }
      curr = curr.next;
    }

    return -1;
  }
  lastIndexOf(element) {
    let curr = this._tail;

    for (let i = this.length - 1; i >= 0; i--) {
      if (curr.element === element) {
        return i;
      }
      curr = curr.prev;
    }

    return -1;
  }
  [Symbol.iterator]() {
    let curr = this._head;
    return {
      next: function() {
        const element = curr?.element;
        curr = curr?.next;
        return {
          value: element,
          done: curr === this._tail
        }
      }
    }
  }
  _node(index) {
    this._checkRange(index);

    // this is an optimized form, which
    // brings access of the head to O(1),
    // and access of the tail to O(1),
    // while at least halving the work
    // needed to be done to find any other element in between.
    if (index < (this.length >> 1)) {
      let node = this._head;
      for (let i = 0; i < index; i++) {
        node = node.next;
      }
      return node;
    } else {
      let node = this._tail;
      for (let i = this.length - 1; i > index; i--) {
        node = node.prev;
      }
      return node;
    }
  }
  _checkRange(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index Out Of Bounds");
    }
  }
}
