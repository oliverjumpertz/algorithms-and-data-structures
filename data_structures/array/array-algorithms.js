/**
 * Inserts the element at the index providedm shifting
 * all other elements after said index to the rifht.
 * Returns a new array containing all original elements
 * and the new element at the index specified
 * @param {*} array the array to insert the element into
 * @param {number} index the index to insert at
 * @param {*} element the element to insert
 */
export function insert(array, index, element) {
  // This is just a guard statement.
  // You can insert at array.length, basically appending an element
  // but you can't add an element to an index larger than that.
  // And the second condition just checks that no negative index
  // is provided.
  if (index > array.length || index < 0) {
    throw new Error('Index Out Of Bounds');
  }

  // This is the new array we will return. It is one element
  // larger than the previous array.
  const newArray = new Array(array.length + 1);

  // We loop over all indices of the new array.
  for (let i = 0, j = 0; i < newArray.length; i++, j++) {
    // Until we hit the index below, we copy over
    let elem = array[j];

    // If we hit the index, we have to insert our new element.
    // When the loop iteration is over, we would have missed the element from
    // the orgiginal array, as we haven't copied it over.
    // This is why we use j as a second loop variable.
    // By decreasing it, we now copy over the element we would have missed,
    // and all following elements, up to the old arrays length - 1 (its last index).
    if (i === index) {
      j--;
      elem = element;
    }
    // And assign the element.
    newArray[i] = elem;
  }

  return newArray;
}

/**
 * Appends an item to an array and returns a new array
 * containing all original elements, as well as the new one.
 * @param {*} array the array to append to
 * @param {*} element the element to append
 */
export function append(array, element) {
  return insert(array, array.length, element);
}

/**
 * Removes the element at the index within the array.
 * Returns a new array containing all original values, except
 * the one removed.
 * @param {*} array the array to remove the element in
 * @param {number} index the index to remove the element at
 */
export function removeAtIndex(array, index) {
  // This is just a guard statement.
  // You can remove elements between index 0 and index array.length - 1.
  // Outside of these bounds, there's nothing so you can't delete anything there!
  if (index > array.length - 1 || index < 0) {
    throw new Error('Index Out Of Bounds');
  }

  // This is the new array that will be returned later.
  const newArray = new Array(array.length - 1);

  // All items except the one to delete have to be copied over,
  // so looping over the whole array.
  for (let i = 0, j = 0; i < array.length; i++, j++) {
    // When you hit the index, the item is simply ignored and not copied.
    if (i === index) {
      // This is the second loop variable.
      // When we skip an element, we still have to
      // shift all remaining elements to the left.
      // This is why we decrement this variable once, and then continue.
      j--;
      continue;
    }
    // This just copies over all the elements we want to keep.
    newArray[j] = array[i];
  }

  return newArray;
}

/**
 * Returns the index of the element within the array, if and only
 * if the element is present.
 * Otherwise it returns -1.
 * @param {*} array the array to search in
 * @param {*} element the element to search for
 */
export function indexOf(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return i;
    }
  }
  return -1;
}
