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

    if (val < this.val) {
      if (this.left === null) return undefined;
      return this.left.findRecursively(val);
    } else if (val > this.val) {
      if (this.right === null) return undefined;
      return this.right.findRecursively(val);
    }
    return this;
  }

  /** insertRecursively(val): Starting at the invoking node, insert a new node
   * into the BST with value val. Returns the inserted node. Uses recursion. */

  insertRecursively(val) {

    if (val < this.val) {
      if (this.left === null) {
        this.left = new Node(val);
        return this;
      }
      return this.left.insertRecursively(val);
    } else {
      if (this.right === null) {
        this.right = new Node(val);
        return this;
      }
      return this.right.insertRecursively(val);
    }
  }

  /** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
  * Returns an array of visited nodes. */

  dfsPreOrder() {

    let visitedNodeValues = [];

    if (this) {
      visitedNodeValues.push(this.val);
      if (this.left !== null) {
        visitedNodeValues = [...visitedNodeValues, ...this.left.dfsPreOrder()];
      }
      if (this.right !== null) {
        visitedNodeValues = [...visitedNodeValues, ...this.right.dfsPreOrder()];
      }
    }
    return visitedNodeValues;
  }

  /** dfsInOrder(): Traverse from the invoking node using in-order DFS.
  * Returns an array of visited nodes. */

  dfsInOrder() {

    let visitedNodeValues = [];

    if (this) {
      if (this.left !== null) {
        visitedNodeValues = [...visitedNodeValues, ...this.left.dfsInOrder()];
      }
      visitedNodeValues.push(this.val);
      if (this.right !== null) {
        visitedNodeValues = [...visitedNodeValues, ...this.right.dfsInOrder()];
      }
    }
    return visitedNodeValues;
  }

  /** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
  * Returns an array of visited nodes. */

  dfsPostOrder() {

    let visitedNodeValues = [];

    if (this) {
      if (this.left !== null) {
        visitedNodeValues = [...visitedNodeValues, ...this.left.dfsPostOrder()];
      }
      if (this.right !== null) {
        visitedNodeValues = [...visitedNodeValues, ...this.right.dfsPostOrder()];
      }
      visitedNodeValues.push(this.val);
    }
    return visitedNodeValues;
  }

}


class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): Insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    // If the tree is empty, insert at the root
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    // Otherwise, find the correct spot for the new node.
    let current = this.root;
    while (true) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = new Node(val);
          return this;
        } else {
          current = current.left;
        }
      } else if (val > current.val) {
        if (current.right === null) {
          current.right = new Node(val);
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
    // If the tree is empty, insert at the root
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    this.root.insertRecursively(val);
    return this;
  }

  /** find(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;
    let found = false;

    if (val === currentNode.val) return currentNode;

    while (currentNode && !found) {
      if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else if (val > currentNode.val) {
        currentNode = currentNode.right;
      } else {
        found = true;
      }
    }

    if (!found) return undefined;
    return currentNode;
  }

  /** findRecursively(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (this.root === null) return undefined;

    return this.root.findRecursively(val);
  }

  /** dfsPreOrder(): Traverse the BST using pre-order DFS.
   * Returns an array of visited nodes. */

  dfsPreOrder() {
    if (this.root === null) {
      return [];
    }

    return this.root.dfsPreOrder();
  }

  /** dfsInOrder(): Traverse the BST using in-order DFS.
   * Returns an array of visited nodes. */

  dfsInOrder() {
    if (this.root === null) {
      return [];
    }

    return this.root.dfsInOrder();
  }

  /** dfsInOrderWithHelper(): Traverse the BST using in-order DFS.
   * Returns an array of visited nodes.
   * Uses an inner helper function.*/

  dfsInOrderWithHelper() {
    let visitedNodeValues = [];

    function traverse(node) {
      if (node) {
        traverse(node.left);
        visitedNodeValues.push(node.val);
        traverse(node.right);
      }
    }

    traverse(this.root);
    return visitedNodeValues;
  }

  /** dfsInOrderIterative(): Uses a stack.
   *  Returns a dfs in-order array of visited nodes.  */

  dfsInOrderIterative() {
    let current = this.root;
    let stack = [];
    let dfs = [];
    while (stack.length > 0 || current) {
      while (current) {
        stack.push(current);
        current = current.left;
      }
      current = stack.pop();
      if (current) {
        dfs.push(current.val);
        current = current.right;
      }
    }
    return dfs;
  }

  /** dfsPostOrder(): Traverse the BST using post-order DFS.
   * Returns an array of visited nodes. */

  dfsPostOrder() {
    if (this.root === null) {
      return [];
    }

    return this.root.dfsPostOrder();
  }

  /** dfsPostOrderWithHelper(): Traverse the BST using post-order DFS.
   * Returns an array of visited nodes.
   * Uses inner helper function. */

  dfsPostOrderWithHelper() {
    let visitedNodeValues = [];

    function traverse(currentNode) {
      if (currentNode) {
        traverse(currentNode.left);
        traverse(currentNode.right);
        visitedNodeValues.push(currentNode.val);
      }
    }

    traverse(this.root);
    return visitedNodeValues;
  }

  /** bfs(): Traverse the BST using BFS.
   * Returns an array of visited nodes. */

  bfs() {
    let node = this.root;
    let queue = [];
    let visitedNodeValues = [];

    if (node) queue.push(node);

    while (queue.length) {
      node = queue.shift();
      visitedNodeValues.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return visitedNodeValues;
  }

  /** findSuccessorNode(node): Find and return node with next largest value.
   * Returns undefined if no successor. */

  findSuccessorNode(node) {
    if (!node.right) return undefined;
    let successor = node.right;
    while (successor.left) {
      successor = successor.left;
    }
    return successor;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    let nodeToRemove = this.root;
    let parent;

    // find node to remove and its parent
    while (nodeToRemove.val !== val) {
      parent = nodeToRemove;
      if (val < nodeToRemove.val) {
        nodeToRemove = nodeToRemove.left;
      } else {
        nodeToRemove = nodeToRemove.right;
      }
    }

    // Case 1: node to remove has no children
    if (nodeToRemove.left === null && nodeToRemove.right === null) {
      // reassign root if removing root (deleting last node)
      if (this.root === nodeToRemove) {
        this.root = null;
      } else if (parent.left === nodeToRemove) {
        parent.left = null;
      } else {
        parent.right = null;
      }

      // Case 2 : node to remove has 2 children
    } else if (nodeToRemove.left !== null && nodeToRemove.right !== null) {
      let successor = this.findSuccessorNode(nodeToRemove);
      const newVal = successor.val;
      // recursive call to this.remove, to get rid of the successor
      // (which we moved to where we deleted the original node from)
      this.remove(newVal);
      nodeToRemove.val = newVal;

      // Case 3: node to remove has one child
    } else {
      // reassign root if removing root
      if (this.root === nodeToRemove) {
        if (nodeToRemove.right === null) {
          this.root = nodeToRemove.left;
        } else {
          this.root = nodeToRemove.right;
        }
      } else if (parent.left === nodeToRemove) {
        if (nodeToRemove.right === null) {
          parent.left = nodeToRemove.left;
        } else {
          parent.left = nodeToRemove.right;
        }
      } else {
        if (nodeToRemove.right === null) {
          parent.right = nodeToRemove.left;
        } else {
          parent.right = nodeToRemove.right;
        }
      }
    }
    return nodeToRemove;
  }
}

module.exports = {
  BinarySearchTree,
  Node,
};
