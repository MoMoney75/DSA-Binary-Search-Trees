const { transcode } = require("buffer");

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */


  insert(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    let current = this.root;
    while (true) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = new Node(val);
          return this;
        } else {
          current = current.left;
        }
      } 
      
      else if (val > current.val) {
        if (current.right === null) {
          current.right = new Node(val);
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }
  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    if (val < current.val) {
      if (current.left === null) {
        current.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.left);
    } 
    
    else {
      if (current.right === null) {
        current.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;

    while(current !== null)
    if(current.val === val){
      return current;
    }
   
    else if(val < current.val){
      current = current.left;
    }

    else if(val > current.val){
      current = current.right;
    }
    else{
      return undefined;
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
      if(current === null) {
        return undefined;
      }
      if(val === current.val){
        return current;
      }

      else if(val < current.val){
        return this.findRecursively(val, current.left)
      }

      else if(val > current.val)
        return this.findRecursively(val, current.right)

}

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const arr = [];
    let current = this.root;
    if(this.root === null){
      return undefined;
    }

    function traverse(node){
      arr.push(node.val)

      if(node.left !== null){
        traverse(node.left)
      }

      if(node.right !== null){
        traverse(node.right)
      }
    }

    traverse(current)
    return arr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const arr = [];

    function traverse(node){
      if(node !== null){
        traverse(node.left);
        arr.push(node.val);
        traverse(node.right)
      }
    }

    traverse(this.root);
    return arr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const arr = [];

    function traverse(node){
      if(node !== null){
        traverse(node.left);
        traverse(node.right);
        arr.push(node.val)
      }
    }
    traverse(this.root)
    return arr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root;
    let queue = [];
    let data = [];

    queue.push(node);

    while (queue.length > 0) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return data;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
