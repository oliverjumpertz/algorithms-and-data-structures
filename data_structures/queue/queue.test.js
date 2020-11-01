import Queue from "./queue";

describe("Queue", () => {
  describe("constructor", () => {
    it("creates a new instance", () => {
      const queue = new Queue();

      expect(queue).toBeDefined();
      expect(queue.length).toEqual(0);
    });
  });
  describe("enqueue", () => {
    it("enqueues an element into an empty Queue", () => {
      const queue = new Queue();
      queue.enqueue(1);

      expect(queue._head).toBeDefined();
      expect(queue._tail).toBeDefined();
      expect(queue._head.element).toEqual(1);
      expect(queue._tail.element).toEqual(1);
    });
    it("enqueues multiple elements when called multiple times", () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue._head.element).toEqual(1);
      expect(queue._tail.element).toEqual(3);
      expect(queue.length).toEqual(3);
    });
  });
  describe("dequeue", () => {
    it("retuns null when the queue is empty", () => {
      const queue = new Queue();

      expect(queue.dequeue()).toBeNull();
    });
    it("dequeues an element", () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.dequeue()).toEqual(1);
      expect(queue._head.element).toEqual(2);
      expect(queue._tail.element).toEqual(3);
      expect(queue.length).toEqual(2);
    });
    it("dequeues all elements until empty", () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.dequeue()).toEqual(1);
      expect(queue.dequeue()).toEqual(2);
      expect(queue.dequeue()).toEqual(3);
      expect(queue.isEmpty()).toEqual(true);
    });
  });
  describe("peek", () => {
    it("returns no element when the Queue is empty", () => {
      const queue = new Queue();

      expect(queue.peek()).toBeNull();
    });
    it("returns the sole element of a Queue without removing it", () => {
      const queue = new Queue();
      queue.enqueue(1);

      expect(queue.peek()).toEqual(1);
      expect(queue.length).toEqual(1);
    });
    it("returns the first element of a Queue without removing it", () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.peek()).toEqual(1);
      expect(queue.length).toEqual(3);
    });
  });
});
