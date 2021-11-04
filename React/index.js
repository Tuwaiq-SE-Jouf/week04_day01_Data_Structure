//  queue 
class Queue {
    constructor() {
      this.i = [0,1,2,3];
      console.log(this.i);
    }
  
    enqueue(  b) {
      return this.i.push(b);
    }
  
    dequeue() {
  
      return this.i.shift();
    }
  
    traverse() {
      for (let i = 0; i < this.i.length; i++) {
        const p = this.i[i];
  
      }
    }
  }
  let queue = new Queue();
  queue.enqueue(10);
  console.log(queue.i);
  
  queue.dequeue();
  console.log(queue.i);
  
  queue.traverse();
  
  
  ///////// stack
  class Stack {
    items = [1,2,3,4]
  
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
  
  stack.push(5)
  console.log(stack.items)
  
  stack.pop()
  console.log(stack.items);
  
  //stack.Traverse()
  
  
  // let array = [0,1,2,3,4,5,6,7,8,9];
  // console.log(array)
  // function enqueue(elment) {
  //     array.push(elment);
  
  //     console.log(array)
  // }
  
  // function dequeue() {
  //     array.shift();
  
  //     console.log(array)
  // }
  
  // function traverse(){
  // for (let i = 0; i <  array.length; i++) {
  
  
  // }}
  //  enqueue(10);
  //   dequeue();
  //  traverse();
  
  // //stack
  
  // let array2= [2,4,6,8,9,11,12]
  
  //  function push(elment){
  //     console.log(array2)
  //     array2.push(elment);
  //     console.log( array2)
  //  }
  
  // function pop(){
  
  //     array2.pop();
  //     console.log(array2)
  // }
  
  // function traverse(){
  // for (let i = 0; i < array2.length; i++) {
  
  //   }
  // }
  // push(10);
  // pop();
  // traverse();
  