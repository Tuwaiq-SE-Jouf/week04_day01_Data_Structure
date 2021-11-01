//https://dmitripavlutin.com/javascript-queue/

//-------------------------
//https://www.programiz.com/javascript/examples/queue

class Queue {
    constructor() {
        this.items = [];
    }
    
    // add element to the queue
    enqueue(element) {
        return this.items.push(element);
    }
    
    // remove element from the queue
    dequeue() {
        if(this.items.length > 0) {
            return this.items.shift();
        }
    }
    
    // view the last element
    peek() {
        return this.items[this.items.length - 1];
    }
    
    // check if the queue is empty
    isEmpty(){
       return this.items.length == 0;
    }
   
    // the size of the queue
    size(){
        return this.items.length;
    }
 
    // empty the queue
    clear(){
        this.items = [];
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(8);
console.log(queue.items);

queue.dequeue();
console.log(queue.items);

console.log(queue.peek());

console.log(queue.isEmpty());

console.log(queue.size());

queue.clear();
console.log(queue.items);
  //______________________________
  //https://raulmelo.dev/blog/data-structure-with-javascript-queue
  console.log("function queue")
  function QueueFactory() {
    const items = [];
  
    return {
      enqueue,
      dequeue,
   
   
   
      print
    };
  
    function enqueue(element) {
      items.push(element);
    }
  
    function dequeue() {
      return items.shift();
    }
  
    
   
  
  
    function print() {
      console.log(items.toString());
    }
  }
  
  
  const myQueue = QueueFactory();
  
  myQueue.enqueue(3);
  myQueue.enqueue(2);
  myQueue.enqueue(6);
  
  
  myQueue.print(); // 3,2,6
  
  console.log(myQueue.dequeue()); // 3
  myQueue.print(); // 2,6
  //_________________________________________
  console.log("function stack")
  function Stack() {
    const it = [];
  
    return {
      push,
      dequeue,
   
   
   
      print
    };
  
    function push(x) {
      it.push(x);
    }
  
    function dequeue() {
      return it.pop();
    }
  
    
   
  
  
    function print() {
      console.log(it.toString());
    }
  }
  
  
  const my = Stack ();
  
  my.push(3);
  my.push(2);
  my.push(6);
  
  
  my.print(); // 3,2,6
  
  console.log(my.dequeue()); // 3
  my.print(); // 2,6