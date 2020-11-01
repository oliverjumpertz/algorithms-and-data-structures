import ArrayList from "./arraylist";

describe("ArrayList", () => {
  describe("constructor", () => {
    it("works when called without an initial size", () => {
      const arrayList = new ArrayList();
      expect(arrayList).toBeDefined();
      expect(arrayList.length).toEqual(0);
      expect(arrayList._array.length).toEqual(16);
    });
    it("works when called with an initial size", () => {
      const arrayList = new ArrayList(1);
      expect(arrayList).toBeDefined();
      expect(arrayList.length).toEqual(0);
      expect(arrayList._array.length).toEqual(1);
    });
    it("throws when a negative size is passed", () => {
      expect(() => new ArrayList(-1)).toThrow();
    });
  });
  describe("push", () => {
    it("appends elements to the list", () => {
      const arrayList = new ArrayList();
      arrayList.push(1);
      expect(arrayList.length).toEqual(1);
    });
    it("appends multiple elements to the list and grows the array as necessary", () => {
      const arrayList = new ArrayList();
      for (let i = 0; i < 100; i++) {
        arrayList.push(i);
      }
      expect(arrayList.length).toEqual(100);
      expect(arrayList._array.length >= 100).toEqual(true);
    });
  });
  describe("get", () => {
    it("returns an element from the ArrayList", () => {
      const arrayList = new ArrayList();
      arrayList.push(1);
      expect(arrayList.get(0)).toEqual(1);
    });
    it("throws an error if a negative index is accessed", () => {
      const arrayList = new ArrayList();
      arrayList.push(1);
      expect(() => arrayList.get(-1)).toThrow();
    });
    it("throws an error if an index greater than or equal to the ArrayList's length is accessed", () => {
      const arrayList = new ArrayList();
      arrayList.push(1);
      expect(() => arrayList.get(arrayList.length)).toThrow();
    });
  });
  describe("removeAtIndex", () => {
    it("removes an element when the ArrayList only has one entry", () => {
      const arrayList = new ArrayList();
      arrayList.push(1);
      arrayList.removeAtIndex(0);
      expect(arrayList.isEmpty()).toEqual(true);
    });
    it("removes an element", () => {
      const arrayList = new ArrayList();
      arrayList.push(1);
      arrayList.push(2);
      arrayList.push(3);
      arrayList.removeAtIndex(1);
      expect(arrayList.isEmpty()).toEqual(false);
      expect(arrayList.length).toEqual(2);
      expect(arrayList.get(0)).toEqual(1);
      expect(arrayList.get(1)).toEqual(3);
    });
    it("throws an error if the ArrayList is empty", () => {
      const arrayList = new ArrayList();
      expect(() => arrayList.removeAtIndex(0)).toThrow();
    });
    it("throws an error if an index greater than or equal to the ArrayList's length is supplied", () => {
      const arrayList = new ArrayList();
      arrayList.push(1);
      expect(() => arrayList.removeAtIndex(arrayList.length)).toThrow();
    });
  });
  describe("removeElement", () => {
    it("removes an element when the ArrayList only has one entry", () => {
      const arrayList = new ArrayList();
      arrayList.push(1);
      expect(arrayList.removeElement(1)).toEqual(true);
      expect(arrayList.isEmpty()).toEqual(true);
    });
    it("removes an element", () => {
      const arrayList = new ArrayList();
      arrayList.push(1);
      arrayList.push(2);
      arrayList.push(3);
      expect(arrayList.removeElement(2)).toEqual(true);
      expect(arrayList.isEmpty()).toEqual(false);
      expect(arrayList.length).toEqual(2);
      expect(arrayList.get(0)).toEqual(1);
      expect(arrayList.get(1)).toEqual(3);
    });
    it("does not remove a element that isn't present on an empty ArrayList", () => {
      const arrayList = new ArrayList();
      expect(arrayList.removeElement(1)).toEqual(false);
    });
    it("does not remove a element that isn't present", () => {
      const arrayList = new ArrayList();
      arrayList.push(1);
      arrayList.push(2);
      arrayList.push(3);
      expect(arrayList.removeElement(4)).toEqual(false);
    });
  });
  describe("indexOf", () => {
    it("returns -1 on an empty ArrayList", () => {
      const arrayList = new ArrayList();
      expect(arrayList.indexOf(0)).toEqual(-1);
    });
    it("returns -1 when the element is not present within an ArrayList", () => {
      const arrayList = new ArrayList();
      arrayList.push(1);
      arrayList.push(1);
      arrayList.push(1);
      expect(arrayList.indexOf(0)).toEqual(-1);
    });
    it("returns the index when the element is present within an ArrayList", () => {
      const arrayList = new ArrayList();
      arrayList.push(1);
      arrayList.push(2);
      arrayList.push(3);
      expect(arrayList.indexOf(1)).toEqual(0);
    });
    it("returns the first index when the element is present within an ArrayList multiple times", () => {
      const arrayList = new ArrayList();
      arrayList.push(1);
      arrayList.push(1);
      arrayList.push(1);
      expect(arrayList.indexOf(1)).toEqual(0);
    });
  });
  describe("lastIndexOf", () => {
    it("returns -1 on an empty ArrayList", () => {
      const arrayList = new ArrayList();
      expect(arrayList.lastIndexOf(0)).toEqual(-1);
    });
    it("returns -1 when the element is not present within an ArrayList", () => {
      const arrayList = new ArrayList();
      arrayList.push(1);
      arrayList.push(1);
      arrayList.push(1);
      expect(arrayList.lastIndexOf(0)).toEqual(-1);
    });
    it("returns the index when the element is present within an ArrayList", () => {
      const arrayList = new ArrayList();
      arrayList.push(1);
      arrayList.push(2);
      arrayList.push(3);
      expect(arrayList.lastIndexOf(1)).toEqual(0);
    });
    it("returns the last index when the element is present within an ArrayList multiple times", () => {
      const arrayList = new ArrayList();
      arrayList.push(1);
      arrayList.push(1);
      arrayList.push(1);
      expect(arrayList.lastIndexOf(1)).toEqual(2);
    });
  });
  describe("set", () => {
    it("replaces an element that is present within the ArrayList with multiple items present", () => {
      const arrayList = new ArrayList();
      arrayList.push(1);
      arrayList.push(1);
      arrayList.push(1);
      arrayList.set(1, 5);
      expect(arrayList.length).toEqual(3);
      expect(arrayList.get(1)).toEqual(5);
    });
    it("replaces an element that is present within the ArrayList a single item contained", () => {
      const arrayList = new ArrayList();
      arrayList.push(1);
      arrayList.set(0, 5);
      expect(arrayList.length).toEqual(1);
      expect(arrayList.get(0)).toEqual(5);
    });
    it("replaces an element that is present at the end of the ArrayList", () => {
      const arrayList = new ArrayList();
      arrayList.push(1);
      arrayList.push(1);
      arrayList.push(1);
      arrayList.set(2, 5);
      expect(arrayList.length).toEqual(3);
      expect(arrayList.get(2)).toEqual(5);
    });
    it("throws if a negative index is supplied", () => {
      const arrayList = new ArrayList();
      expect(() => arrayList.set(-1, 5)).toThrow();
    });
    it("throws if a index greater than or equal to the ArrayList's length is supplied", () => {
      const arrayList = new ArrayList();
      arrayList.push(1);
      expect(() => arrayList.set(1, 5)).toThrow();
    });
  });
  describe("insert", () => {
    it("inserts an element", () => {
      const arrayList = new ArrayList();
      arrayList.push(1);
      arrayList.push(2);
      arrayList.insert(1, 5);
      expect(arrayList.length).toEqual(3);
      expect(arrayList.get(0)).toEqual(1);
      expect(arrayList.get(1)).toEqual(5);
      expect(arrayList.get(2)).toEqual(2);
    });
    it("inserts an element if the ArrayList only has one element", () => {
      const arrayList = new ArrayList();
      arrayList.push(1);
      arrayList.insert(0, 5);
      expect(arrayList.length).toEqual(2);
      expect(arrayList.get(0)).toEqual(5);
      expect(arrayList.get(1)).toEqual(1);
    });
    it("throws if a negative index is supplied", () => {
      const arrayList = new ArrayList();
      expect(() => arrayList.insert(-1, 5)).toThrow();
    });
    it("throws if an index greater than or equal to the ArrayList's size is supplied", () => {
      const arrayList = new ArrayList();
      arrayList.push(1);
      expect(() => arrayList.insert(1, 5)).toThrow();
    });
  });
});
