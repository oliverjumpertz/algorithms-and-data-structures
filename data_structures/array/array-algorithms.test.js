import { insert, append, removeAtIndex, indexOf } from "./array-algorithms";

describe("Array Algorithms", () => {
  describe("insert", () => {
    let array = [];
    beforeEach(() => {
      array.length = 0;
      array = [1, 2, 3, 4, 5];
    });
    it("should work at the first index", () => {
      const result = insert(array, 0, 0);
      expect(result).toEqual([0, 1, 2, 3, 4, 5]);
    });
    it("should work in between", () => {
      const result = insert(array, 2, 0);
      expect(result).toEqual([1, 2, 0, 3, 4, 5]);
    });
    it("should work at the end", () => {
      const result = insert(array, array.length, 2);
      expect(result).toEqual([1, 2, 3, 4, 5, 2]);
    });
    it("should throw on a negative index", () => {
      expect(() => {
        insert(array, -1, 2);
      }).toThrow();
    });
    it("should throw on a index greater than current length + 1", () => {
      expect(() => {
        insert(array, array.length + 1, 2);
      }).toThrow();
    });
  });

  describe("removeAtIndex", () => {
    let array = [];
    beforeEach(() => {
      array.length = 0;
      array = [1, 2, 3, 4, 5];
    });
    it("should work at the first index", () => {
      const result = removeAtIndex(array, 0);
      expect(result).toEqual([2, 3, 4, 5]);
    });
    it("should work in between", () => {
      const result = removeAtIndex(array, 2);
      expect(result).toEqual([1, 2, 4, 5]);
    });
    it("should work at the end", () => {
      const result = removeAtIndex(array, array.length - 1);
      expect(result).toEqual([1, 2, 3, 4]);
    });
    it("should throw on a negative index", () => {
      expect(() => {
        removeAtIndex(array, -1);
      }).toThrow();
    });
    it("should throw on a index greater than current length", () => {
      expect(() => {
        removeAtIndex(array, array.length);
      }).toThrow();
    });
  });

  describe("append", () => {
    let array = [];
    beforeEach(() => {
      array.length = 0;
      array = [1, 2, 3, 4, 5];
    });
    it("should work", () => {
      const result = append(array, 0);
      expect(result).toEqual([1, 2, 3, 4, 5, 0]);
    });
  });

  describe("indexOf", () => {
    let array = [];
    beforeEach(() => {
      array.length = 0;
      array = [1, 2, 3, 4, 5];
    });
    it("should return the index of an element that is present at the beginning of the array", () => {
      const result = indexOf(array, 1);
      expect(result).toEqual(0);
    });
    it("should return the index of an element that is present at the end of the array", () => {
      const result = indexOf(array, 5);
      expect(result).toEqual(4);
    });
    it("should return the index of an element that is present in between", () => {
      const result = indexOf(array, 3);
      expect(result).toEqual(2);
    });
    it("should return a negative number if the element is not present", () => {
      const result = indexOf(array, 10);
      expect(result).toEqual(-1);
    });
  });
});
