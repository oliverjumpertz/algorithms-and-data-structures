const DEFAULT_INITIAL_SIZE = 16;

/**
 * An ArrayList is a wrapper type for a dynamically growing array.
 */
export default class ArrayList {
  /**
   * This creates a new instance of an ArrayList.
   * @param {number} initialSize
   */
  constructor(initialSize) {
    if (initialSize == null) {
      initialSize = DEFAULT_INITIAL_SIZE;
    }

    if (initialSize < 0) {
      throw new Error("Illegal initialSize passed to ArrayList constructor.");
    }

    this.length = 0;
    this._array = new Array(initialSize);
  }
  /**
   * Appends an element to the ArrayList.
   *
   * @param {*} element the element to append.
   */
  push(element) {
    this._growIfNecessary();
    this._array[this.length++] = element;
  }
  /**
   * Returns the element at the given index.
   *
   * Throws an error if the index is either < 0 or >= the length
   * of the ArrayList.
   * @param {number} index
   */
  get(index) {
    this._checkRange(index);
    return this._array[index];
  }
  /**
   * Removes the element at the given index.
   *
   * Throws an error if the index is either < 0 or >= the length
   * of the ArrayList.
   * @param {number} index
   */
  removeAtIndex(index) {
    this._checkRange(index);

    for (let i = index; i < this.length; i++) {
      this._array[i] = this._array[i + 1];
    }

    this._array[this.length--] = undefined;
  }
  /**
   * Removes the element if it is present within the ArrayList.
   *
   * Returns true if an element could be removed.
   * Returns false if no element was present.
   *
   * @param {*} element
   */
  removeElement(element) {
    for (let i = 0; i < this.length; i++) {
      if (this._array[i] === element) {
        this.removeAtIndex(i);
        return true;
      }
    }
    return false;
  }
  /**
   * Returns the index of the element if it is present within the ArrayList.
   *
   * Returns -1 if no element could be found.
   *
   * @param {*} element the element to look the index up for
   */
  indexOf(element) {
    for (let i = 0; i < this.length; i++) {
      if (element === this._array[i]) {
        return i;
      }
    }
    return -1;
  }
  /**
   * Returns the last index where the element provided occurrs.
   *
   * Returns -1 if no element could be found.
   *
   * @param {*} element the element to look the index up for
   */
  lastIndexOf(element) {
    for (let i = this.length - 1; i >= 0; i--) {
      if (element === this._array[i]) {
        return i;
      }
    }
    return -1;
  }
  /**
   * Sets the element at the index, basically replacing the old value.
   *
   * @param {number} index the index to set the element at
   * @param {*} element the element to replace the old one at index with
   */
  set(index, element) {
    this._checkRange(index);
    this._array[index] = element;
  }
  /**
   * Inserts the element into the ArrayList,
   * shifting all elements at indices > index to the right.
   *
   * @param {number} index the index to insert the element into
   * @param {*} element the element to insert
   */
  insert(index, element) {
    this._checkRange(index);
    this._growIfNecessary();

    for (let i = this.length; i >= index; i--) {
      this._array[i + 1] = this._array[i];
    }

    this._array[index] = element;
    this.length++;
  }
  isEmpty() {
    return this.length === 0;
  }
  _checkRange(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index Out Of Bounds");
    }
  }
  _growIfNecessary() {
    if (this.length === this._array.length) {
      this._grow(this.length + 1);
    }
  }
  _grow(minLength) {
    const oldLength = this._array.length;

    // basically increasing size by old length + Math.floor(old length / 2)
    let newLength = oldLength + (oldLength >> 1);

    if (newLength - minLength < 0) {
      newLength = minLength;
    }

    const newArray = new Array(newLength);

    for (let i = 0; i < this._array.length; i++) {
      newArray[i] = this._array[i];
    }

    this._array = newArray;
  }
  toString() {
    let str = "[";

    for (let i = 0; i < this.length; i++) {
      str += this._array[i];
      if (i !== this.length - 1) {
        str += ", ";
      }
    }

    str = str + "]";

    return str;
  }
}
