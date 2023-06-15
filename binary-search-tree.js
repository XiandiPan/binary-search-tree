"use strict";

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** findRecursively(val): Search from the invoking node for a node with value val.
   * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

    if (this.val === val) return this;

    if (this.val > val && this.left) {
      return this.left.findRecursively(val);
    }
    if (this.val < val && this.right) {
      return this.right.findRecursively(val);
    }
  }

  /** insertRecursively(val): Starting at the invoking node, insert a new node
   * into the BST with value val. Returns the inserted node. Uses recursion. */

  insertRecursively(val) {
    if (this.val > val) {
      if (this.left === null) {
        this.left = new Node(val);
        return this.left;
      } else {
        this.left.insertRecursively(val);
      }
    }
    if (this.val < val) {
      if (this.right === null) {
        this.right = new Node(val);
        return this.right;
      } else {
        this.right.insertRecursively(val);
      }
    }
  }

  /** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
   * Returns an array of visited nodes. */

  dfsPreOrder() {}

  /** dfsInOrder(): Traverse from the invoking node using in-order DFS.
   * Returns an array of visited nodes. */

  dfsInOrder() {}

  /** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
   * Returns an array of visited nodes. */

  dfsPostOrder() {}
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
    }

    let current = this.root;

    while (current) {
      if (current.val === val) return undefined;

      if (current.val > val) {
        if (current.left === null) {
          current.left = newNode; //adding new Node
          current = current.left;
          return this;
        } else {
          current = current.left;
        }
      }
      if (current.val < val) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  /** insertRecursively(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses recursion. */

  insertRecursively(val) {
    debugger;

    if (this.root === null) {
      const newNode = new Node(val);
      this.root = newNode;
      return this;
    }
    this.root.insertRecursively(val);
    return this;
  }

  /** find(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;

    while (current) {
      if (current.val === val) {
        return current;
      }

      current = val < current.val ? current.left : current.right;
    }
  }

  /** findRecursively(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
let theRoot = this.root
console.log("this is theRoot", theRoot)
console.log("this is theRoot.findRecursively", theRoot.findRecursively)

    return theRoot.findRecursively(val);
  }

  /** dfsPreOrder(): Traverse the BST using pre-order DFS.
   * Returns an array of visited nodes. */

  dfsPreOrder() {}

  /** dfsInOrder(): Traverse the BST using in-order DFS.
   * Returns an array of visited nodes. */

  dfsInOrder() {}

  /** dfsPostOrder(): Traverse the BST using post-order DFS.
   * Returns an array of visited nodes. */

  dfsPostOrder() {}

  /** bfs(): Traverse the BST using BFS.
   * Returns an array of visited nodes. */

  bfs() {}

  /** findSuccessorNode(node): Find and return node with next largest value.
   * Returns undefined if no successor. */

  findSuccessorNode(node) {}

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}
}

module.exports = {
  BinarySearchTree,
  Node,
};
