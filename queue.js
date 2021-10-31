//  queue 
class Queue {
  constructor() {
    this.i = [9, 30];
  }

  // add element 
  enqueue(p) {
    return this.i.push(p);
  }

  // remove element 
  dequeue() {

    return this.i.shift();
  }

  traverse() {
    for (let i = 0; i < this.i.length; i++) {
      const p = this.i[i];
      console.log(p)
    }
  }
}

let queue = new Queue();
queue.enqueue(1);
console.log(queue.i);

queue.dequeue();
console.log(queue.i);

queue.traverse()

// stack 
class Stack {
  items = []
  push = (element) => this.items.push(element)
  pop = () => this.items.pop()

  Traverse() {
    for (let i = 0; i < this.items.length; i++) {
      const element = this.items[i];
      console.log(element)
    }
  }

}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.items)

stack.pop()
console.log(stack.items);

stack.Traverse()
