const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.bstRoot = null;
  }

  root() {
    return this.bstRoot;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.bstRoot === null) {
      this.bstRoot = newNode;
      return;
    }
    let current = this.bstRoot;
    while (true) {
      const parent = current;
      if (newNode.data > current.data) {
        current = current.right;
        if (current === null) {
          parent.right = newNode;
          break;
        }
      } else if (newNode.data < current.data) {
        current = current.left;
        if (current === null) {
          parent.left = newNode;
          break;
        }
      }
    }
  }

  has(data) {
    let current = this.bstRoot;
    while (current !== null) {
      if (data === current.data) {
        return true;
      } else if (data > current.data) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return false;
  }

  find(data) {
    let current = this.bstRoot;
    while (current !== null) {
      if (data === current.data) {
        break;
      }
      if (data > current.data) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return current;
  }

  remove(data) {
    function removeNode(current, delData) {
      if (current === null) {
        return current;
      } else if (delData < current.data) {
        current.left = removeNode(current.left, delData);
        return current;
      } else if (delData > current.data) {
        current.right = removeNode(current.right, delData);
        return current;
      } else {
        if (current.left === null && current.right === null) {
          return null;
        } else if (current.left === null) {
          return current.right;
        } else if (current.right === null) {
          return current.left;
        } else {
          let maxLeftSubtreeNode = current.left;
          while (maxLeftSubtreeNode.right !== null) {
            maxLeftSubtreeNode = maxLeftSubtreeNode.right;
          }
          current.data = maxLeftSubtreeNode.data;
          current.left = removeNode(current.left, maxLeftSubtreeNode.data);
          return current;
        }
      }
    }

    this.bstRoot = removeNode(this.bstRoot, data);
  }

  min() {
    let current = this.bstRoot;
    if (current === null) {
      return current;
    }
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    let current = this.bstRoot;
    if (current === null) {
      return current;
    }
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree,
};
