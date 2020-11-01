import Stack from "./stack";

describe("Stack", () => {
  describe("constructor", () => {
    it("creates a new instance", () => {
      const stack = new Stack();

      expect(stack).toBeDefined();
      expect(stack.size).toEqual(0);
    });
  });
  describe("push", () => {
    it("adds an element to the stack", () => {
      const stack = new Stack();
      stack.push(1);

      expect(stack.size).toEqual(1);
    });
    it("adds multiple elements to the stack", () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.size).toEqual(3);
    });
  });
  describe("pop", () => {
    it("removes no element from the stack if it is empty", () => {
      const stack = new Stack();

      expect(stack.pop()).toBeNull();
      expect(stack.size).toEqual(0);
    });
    it("removes an element from the stack until it is empty", () => {
      const stack = new Stack();
      stack.push(1);

      expect(stack.pop()).toEqual(1);
      expect(stack.size).toEqual(0);
    });
    it("removes an element from the stack", () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.pop()).toEqual(3);
    });
    it("removes multiple elements from the stack", () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.pop()).toEqual(3);
      expect(stack.pop()).toEqual(2);
      expect(stack.pop()).toEqual(1);
      expect(stack.isEmpty()).toEqual(true);
    });
  });
  describe("peek", () => {
    it("returns null if the Stack is empty", () => {
      const stack = new Stack();
      expect(stack.peek()).toBeNull();
    });
    it("returns the top element if the Stack contains one element without altering the Stack", () => {
      const stack = new Stack();
      stack.push(1);

      expect(stack.peek()).toEqual(1);
      expect(stack.size).toEqual(1);
    });
    it("returns the top element without altering the Stack", () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.peek()).toEqual(3);
      expect(stack.size).toEqual(3);
    });
  });
});
