/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.data = [];
  }

  push(elem) {
    this.data.push(elem);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    if (this.data.length === 0) {
      return undefined;
    } else {
      return this.data[this.data.length - 1];
    }
  }
}

module.exports = {
  Stack,
};
