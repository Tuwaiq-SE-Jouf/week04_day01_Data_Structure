
class Queue {
 
  constructor() {
    this.items = [];
  }

  
  enqueue(element) {
 
    this.items.push(element);
  }
  
  dequeue() {
    
    if (this.items.length == 0) return "Underflow";
    return this.items.shift();
  }

  traverse() {
    for (var i = 0; i < this.items.length; i++) {
      console.log(this.items[i]);
    }
  }
}

var queue = new Queue();

console.log(queue.dequeue());

queue.enqueue(11);
queue.enqueue(12);
queue.enqueue(13);
queue.enqueue(14);
queue.enqueue(15);
queue.enqueue(16);

console.log(queue.dequeue());

queue.traverse();
console.log(queue.dequeue());

queue.traverse();

console.log("-----------------------------");

///Stack


class Stack {
 
  constructor() {
    this.items = [];
  }

  push(element) {
   
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
stack.push(11);
stack.push(12);
stack.push(13);

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
  
}

// Create elements
const root = new Node(0);

const child1 = new Node(1);
root.children.push(child1);

const child2 = new Node(2);
root.children.push(child2);

const child3 = new Node(3);
root.children.push(child3);

const child4 = new Node(4);
child1.children.push(child4);

const child5 = new Node(5);
child1.children.push(child5);

const child6 = new Node(6);
child3.children.push(child6);

const x = traverse(root);


