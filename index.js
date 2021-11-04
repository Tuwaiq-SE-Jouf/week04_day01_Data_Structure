
// STACK


class Stack {
    constructor() {
      this.Elements = [];

  }
    push(item) {
      this.Elements.push(item);
    }


    pop() {
      this.Elements.pop();
    }
   

   traverse() {
    let stack = 0;
    for (let i = 0; i < this.Elements.length; i++)
      stack = stack + this.Elements[i] + " , ";
    return stack; 
  }
}


var Stack2 = new Stack();


Stack2.push(1);
Stack2.push(2);
Stack2.push(3);
Stack2.push(4);
Stack2.log(Stack2.pop());
Stack2.log(Stack2.traverse());




// QUEUE
class Queue {
    constructor() {
      this.Elements = [];
    }

    // ADD
    enqueue(item) {
      this.Elements.push(item);
    }


    // REMOVE
    dequeue() {
      return this.Elements.shift();
    }




    traverse() {
      let traversing = 0;
      for (let i = 0; i < this.Elements.length; i++)
      traversing = traversing + this.Elements[i] + " , ";
      return traversing;
    }
  }



  let queue2 = new Queue();


  queue2.enqueue(1);
  queue2.enqueue(2);
  queue2.enqueue(3);
  queue2.enqueue(4);
 


  console.log(queue2.dequeue());
  console.log(queue2.traverse());

