# Array
> [Take me back to Home](../../README.md)

## Basics
![Array basics](./basics.svg)

An array is the most primitive data type and data structure to hold a number of items.

Usually, an array can only hold one type of items, e.g. an array of integers, like so (in Java):
```Java
int[] array = new int[]{1, 2, 3, 4, 5};
```

Once defined and initialized, an array's size is fixed. You can neither grow nor shrink it without creating a new one, with either more or less elements.

In-memory, an array is a block of contiguous elements with no other elements in-between them.
This makes an array pretty efficient, because the computer can easiliy navigate from item to item, without having to do too much work.

Individual elements are stored at a position relative to the position of the first element, and thus are zero-indexed.

The first element has index 0, the second one index 1, the third one index 2, and so on.

In JavaScript, the Array is actually some kind of generic dynamic array, although its name might suggest otherwise.

## Accessing Array Elements
![Accessing array elements](./access.svg)

Because an array is represented as a block of contiguous elements within the computer's memory, accessing an element is pretty straight-forward.

```JavaScript
  const elementOne = array[0];
```

As previously explained, the indices of an array are zero-based.

You can imagine it like this:
A native array is nothing else than a pointer to some memory address.
If you want to access the second element, you only need to follow the pointer to the array, and go one address further:
```JavaScript
  // Basically: Follow the pointer, and go one address further.
  // Like: arrayAddress + 1 = second element's address.
  const elementTwo = array[1];
```

If you want to access the first element, you simply have to add 0 to the starting address, etc.

This leads to the access being really efficient. It can be performed in constant time, because the computer simply has to follow a memory address.

But this also comes at a cost! Some languages, like C, don't perform a range check, whether you access an index that actually exists within the array. This is a common security issue, because an address is simply an address and could potentially be accessed at any time.

Other languages, like Java or JavaScript basically "wrap" a native array and also do a check if the index you try to access actually exists within an array, and throw an error if it doesn't.

## Setting Array Elements
![Setting array elements](./setting.svg)

As with accessing array elements, setting them is equally straight-forward.

```JavaScript
  array[0] = 5;
```

In this case, the computer follows the memory address, but instead of returning the value stored at that location, it replaces the existing one with the one you assigned.

As you may have already guessed, this also works in constant time!

## Inserting Array Elements
![Inserting array elements](./inserting.svg)

If you still remember: An array's size is fixed. You can't resize it on-demand. But what if you want to insert an array?

This is where you will need your first real algorithm, that handles growing an array, inserting an element, and maintaining the previous order of elements.

This is the whole algorithm, and we'll go over it step-by-step, to ensure that you understand what's happening here.

```JavaScript
function insert(array, index, element) {
  if (index > array.length || index < 0) {
    throw new Error("Index Out Of Bounds");
  }

  const newArray = new Array(array.length + 1);

  for (let i = 0, j = 0; i < newArray.length; i++, j++) {
    let elem = array[j];
    if (i === index) {
      j--;
      elem = element;
    }
    newArray[i] = elem;
  }

  return newArray;
}
```

Let's start with the guard statement at the beginning of the function:

```JavaScript
if (index > array.length || index < 0) {
  throw new Error("Index Out Of Bounds");
}
```

It prevents users from trying to insert values at a negative index, or at an index larger than the actual array's size.

The next step is to create an array, that is one element larger than the previous one. This makes place to insert the element.

```JavaScript
const newArray = new Array(array.length + 1);
```

After that, you need to copy over the elements and insert the element you want to.

```JavaScript
for (let i = 0, j = 0; i < newArray.length; i++, j++) {
  let elem = array[j];
  if (i === index) {
    j--;
    elem = element;
  }
  newArray[i] = elem;
}
```

This code may look a little intimidating, but you can imagine it as another version of the following code:

You first need to copy over all the elements, up to the index you want to insert the element at.
```JavaScript
for (let i = 0; i < index; i++) {
  newArray[i] = array[i];
}
```

Then you insert the new element.
```JavaScript
newArray[index] = element;
```

And then you copy over the rest of the elements.
```JavaScript
for (let i = index + 1; i < newArray.length; i++) {
  newArray[i] = array[i - 1];
}
```

## Searching In Arrays
![Searching in arrays](./searching.svg)

An array is a data structure without any advanced functionality. It just contains elements, one after another, which can be accessed in constant time.

It maintains no order, other than the order of insertion.

This means that, as soon as you want to check if an array contains a certain element, you have to do a sequential search.

A sequantial search is the simplest search algorithm and works as follows:
1. Start at the beginning
2. Check if the element at `index` is the element searched for
3. If so
   1. Return `true`
4. If not, go to `index + 1`
5. If `index` is now greater than the number of elements
   1. return `false`
6. Go to step 2

Another method is the often used `indexOf`, which doesn't return a boolean but the index of the element, if it is contained within the array, or a negative number otherwise.

```JavaScript
function indexOf(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return i;
    }
  }
  return -1;
}
```

## Deleting Array Elements
![Deleting array elements](./deleting.svg)

Remember? You can't simply grow or shrink an array, and holes (null or undefined values, e.g.) within an array are not what we usually want.

You wouldn't know if a hole within an array was there on purpose, or because an element was deleted.

So, what you have to do is shrinking the array by creating a new array and then copying over all elements, except the one you want to delete.

This is the whole algorithm, and we'll go over it step-by-step, to ensure that you understand what's happening here.

```JavaScript
function removeAtIndex(array, index) {
  if (index > array.length - 1 || index < 0) {
    throw new Error("Index Out Of Bounds");
  }

  const newArray = new Array(array.length - 1);

  for (let i = 0, j = 0; i < array.length; i++, j++) {
    if (i === index) {
      j--;
      continue;
    }
    newArray[j] = array[i];
  }

  return newArray;
}
```

This is, once again, a guard statement to prevent deletions at indices that don't exist.

```JavaScript
if (index > array.length - 1 || index < 0) {
  throw new Error("Index Out Of Bounds");
}
```

Now you need to create a new array, which is smaller than the original one, as you want to delete an element.
```JavaScript
const newArray = new Array(array.length - 1);
```

And now you need to copy over all elements from the old array, except the one you want to delete.
```JavaScript
for (let i = 0, j = 0; i < array.length; i++, j++) {
  if (i === index) {
    j--;
    continue;
  }
  newArray[j] = array[i];
}
```

This may look a little intimidating, but it's nothing else than a very compressed version of the following steps:

Copy over all elements from the original array, up to the one at the index you want to remove.
```JavaScript
for (let i = 0; i < index; i++) {
  newArray[i] = array[i];
}
```

At least, you need to copy over the rest, basically skipping the element to delete.
```JavaScript
for (let i = index + 1; i < array.length; i++) {
  newArray[i - 1] = array[i];
}
```

## Traits And Use Cases Of Arrays
![Traits and use cases of arrays](./traits_and_use_cases.svg)

Arrays are the base for a lot of other data structures and they are really efficient.

You can, e.g., implement ArrayLists, Heaps, Stacks, Queues, Vectors and Matrices based on arrays!

Plain arrays can be used in some use cases, but they aren't suited for many others.
Sometimes it's better to use a more advanced data structure, which already abstracts away a lot of operations you'd have to implement yourself, otherwise.

But because they are the foundation for many algorithms and data structures, you should really learn to work well with them. You will always need that knowledge!

![Full poster](./array.svg)
