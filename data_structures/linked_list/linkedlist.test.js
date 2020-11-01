import LinkedList from "./linkedlist";

describe("LinkedList", () => {
  describe("constructor", () => {
    it("creates a new instance", () => {
      const list = new LinkedList();
      expect(list).toBeDefined();
      expect(list.length).toEqual(0);
    });
  });
  describe("append", () => {
    it("appends an element to an empty list", () => {
      const list = new LinkedList();
      list.append(1);
      expect(list._head).toBeDefined();
      expect(list._tail).toBeDefined();
      expect(list._head.element).toEqual(1);
      expect(list._tail.element).toEqual(1);
    });
    it("appends multiple elements", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list._head.element).toEqual(1);
      expect(list._tail.element).toEqual(3);
      expect(list.length).toEqual(3);
    });
  });
  describe("prepend", () => {
    it("prepends an element to an empty list", () => {
      const list = new LinkedList();
      list.prepend(1);
      expect(list._head).toBeDefined();
      expect(list._tail).toBeDefined();
      expect(list._head.element).toEqual(1);
      expect(list._tail.element).toEqual(1);
    });
    it("prepends multiple elements", () => {
      const list = new LinkedList();
      list.prepend(1);
      list.prepend(2);
      list.prepend(3);
      expect(list._head.element).toEqual(3);
      expect(list._tail.element).toEqual(1);
      expect(list.length).toEqual(3);
    });
  });
  describe("get", () => {
    it("returns the element at the specified index", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      const element = list.get(1);
      expect(element).toEqual(2);
    });
    it("throws when index is less than zero", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      expect(() => list.get(-1)).toThrow();
    });
    it("throws when index is greater than or equal to length", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      expect(() => list.get(list.length)).toThrow();
    });
    it("throws when the list is empty", () => {
      const list = new LinkedList();
      expect(() => list.get(0)).toThrow();
    });
  });
  describe("insert", () => {
    it("insert the element at the specified index", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      list.insert(1, 5);
      expect(list.length).toEqual(4);
      expect(list.get(1)).toEqual(5);
    });
    it("throws when index is less than zero", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      expect(() => list.insert(-1, 5)).toThrow();
    });
    it("throws when index is greater than or equal to length", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      expect(() => list.insert(list.length, 5)).toThrow();
    });
  });
  describe("set", () => {
    it("sets the element at the specified index", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      list.set(1, 5);
      expect(list.get(1)).toEqual(5);
    });
    it("throws when index is less than zero", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      expect(() => list.set(-1, 5)).toThrow();
    });
    it("throws when index is greater than or equal to length", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      expect(() => list.set(list.length, 5)).toThrow();
    });
  });
  describe("removeAtIndex", () => {
    it("removes the element at the specified index", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      list.removeAtIndex(1);
      expect(list.get(0)).toEqual(1);
      expect(list.get(1)).toEqual(3);
      expect(list.length).toEqual(2);
    });
    it("removes the element at the first index", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      list.removeAtIndex(0);
      expect(list.get(0)).toEqual(2);
      expect(list.get(1)).toEqual(3);
      expect(list.length).toEqual(2);
    });
    it("removes the element at the last index", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      list.removeAtIndex(2);
      expect(list.get(0)).toEqual(1);
      expect(list.get(1)).toEqual(2);
      expect(list.length).toEqual(2);
    });
    it("throws when index is less than zero", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      expect(() => list.removeAtIndex(-1)).toThrow();
    });
    it("throws when index is greater than or equal to length", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      expect(() => list.removeAtIndex(list.length)).toThrow();
    });
  });
  describe("indexOf", () => {
    it("returns the index of the element when found at the beginning", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      const indexOf = list.indexOf(1);
      expect(indexOf).toEqual(0);
    });
    it("returns the index of the element when found at the end", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      const indexOf = list.indexOf(3);
      expect(indexOf).toEqual(2);
    });
    it("returns the index of the element when found in between", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      const indexOf = list.indexOf(2);
      expect(indexOf).toEqual(1);
    });
    it("returns the index of the element when found in a list with only one item", () => {
      const list = new LinkedList();
      list.append(3);
      const indexOf = list.indexOf(3);
      expect(indexOf).toEqual(0);
    });
    it("returns -1 when the item is not found", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      const indexOf = list.indexOf(5);
      expect(indexOf).toEqual(-1);
    });
  });
  describe("lastIndexOf", () => {
    it("returns the index of the element when found at the beginning", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      const indexOf = list.lastIndexOf(1);
      expect(indexOf).toEqual(0);
    });
    it("returns the index of the element when found at the end", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      const indexOf = list.lastIndexOf(3);
      expect(indexOf).toEqual(2);
    });
    it("returns the index of the element when found in between", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      const indexOf = list.lastIndexOf(2);
      expect(indexOf).toEqual(1);
    });
    it("returns the last index of the element when found in between", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(2);
      list.append(3);
      const indexOf = list.lastIndexOf(2);
      expect(indexOf).toEqual(2);
    });
    it("returns the index of the element when found in a list with only one item", () => {
      const list = new LinkedList();
      list.append(3);
      const indexOf = list.lastIndexOf(3);
      expect(indexOf).toEqual(0);
    });
    it("returns -1 when the item is not found", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      const indexOf = list.lastIndexOf(5);
      expect(indexOf).toEqual(-1);
    });
  });
  describe("Iterator", () => {
    it("works on multiple items", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      let i = 1;
      for (const value of list) {
        expect(value).toEqual(i++);
      }
      expect(i).toEqual(4);
    });
    it("works on an list with only one item", () => {
      const list = new LinkedList();
      list.append(1);
      let i = 1;
      for (const value of list) {
        expect(value).toEqual(i++);
      }
      expect(i).toEqual(2);
    });
    it("works on an empty list", () => {
      const list = new LinkedList();
      for (const value of list) {
        throw new Error(`Loop mustn't run, as list is empty, but did. Returned value was ${value}`);
      }
    });
    it("enables spreading", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      const arr = [...list];
      expect(arr).toEqual([1, 2, 3]);
    });
  });
});
