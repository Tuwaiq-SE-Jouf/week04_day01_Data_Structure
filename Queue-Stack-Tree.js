class Queue {
  // Array is used to implement a Queue
  constructor() {
    this.items = [];
  }

  // Functions to be implemented
  // enqueue(item)
  enqueue(element) {
    // adding element to the queue
    this.items.push(element);
  }
  // dequeue()
  dequeue() {
    // removing element from the queue
    // returns underflow when called
    // on empty queue
    if (this.items.length == 0) return "Underflow";
    return this.items.shift();
  }

  traverse() {
    for (var i = 0; i < this.items.length; i++) {
      console.log(this.items[i]);
    }
  }
}
////////Queue test
var queue = new Queue();

console.log(queue.dequeue());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);

console.log(queue.dequeue());

queue.traverse();
console.log(queue.dequeue());

queue.traverse();

console.log("-----------------------------");

///Stack

// Stack class
class Stack {
  // Array is used to implement stack
  constructor() {
    this.items = [];
  }

  // Functions to be implemented
  push(element) {
    // push element into the items
    this.items.push(element);
  }

  pop() {
    if (this.items.length == 0) return "Underflow";
    return this.items.pop();
  }
  traverse() {
    for (var i = 0; i < this.items.length; i++) {
      console.log(this.items[i]);
    }
  }
}

var stack = new Stack();

console.log(stack.pop());
stack.push(10);
stack.push(20);
stack.push(30);

stack.traverse();

console.log(stack.pop());

stack.traverse();

console.log("----------------------------");
//Tree
function Node(value) {
  this.value = value;
  this.children = [];
}

function traverse(root) {
  console.log(root.value);
  root.children.forEach(function (n) {
    traverse(n);
  });
  //console.log(root.children);
}

// Create elements
const root = new Node(0);

const child1 = new Node(1);
root.children.push(child1);

const child2 = new Node(2);
root.children.push(child2);

const child3 = new Node(3);
root.children.push(child3);

const child11 = new Node(11);
child1.children.push(child11);

const child12 = new Node(12);
child1.children.push(child12);

const child31 = new Node(31);
child3.children.push(child31);

const x = traverse(root);
