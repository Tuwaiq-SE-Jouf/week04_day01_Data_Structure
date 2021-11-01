
//Implement a queue data structure by creating a queue class
class queue {
    constructor() {
      this.items = [];
      this.frontIndex = 0;
      this. backIndex = 0;
    }

    //to adds an elements to the back of a queue.
    enqueue(item) {
      this.items[this. backIndex] = item;
      this. backIndex++;
      
      return item;
    }
      //to removes an elements to the front of a queue.
    dequeue() {
      let item = this.items[this.frontIndex];
      this.items.shift();
      this.frontIndex++;
      return item;
    }
    //to print the elements of the queue
    traverse(){
                 
        for(let i = 0; i < this.items.length; i++)
        return this.items;
              
        

    }
    
  }
  const queue1 = new queue();
 console.log( queue1.enqueue(10)); 
 console.log( queue1.enqueue(4));
 console.log(queue1.enqueue(12));
 console.log(queue1.enqueue(6));
 console.log( queue1.traverse());
console.log(queue1.dequeue()); 
 console.log( queue1.traverse());
 console.log(queue1.dequeue()); 
 console.log( queue1.traverse());
  




 //Implement a stack data structure by creating a stack class
 class stack {
  constructor() {
    this.items = [];
    this.frontIndex = 0;
    this. backIndex = 0;
  }

//adds an item to the top of a stack
push(item) {
  this.items.unshift(item);
  //this.items[this.frontIndex]=item;
  //this.frontIndex++;
  return item;
}
//removes an item to the top of a stack
pop() {
  
  this.items.shift();
  
}


//to print the elements of the stack
traverse(){
  
          
  for(let i = 0; i < this.items.length; i++)
  return this.items;
        
  

}

}

const stack1 = new stack();
 console.log( stack1.push(1)); 
 console.log( stack1.push(2));
 console.log(stack1.push(3));
 console.log( stack1.traverse());
 stack1.pop(); 
 console.log( stack1.traverse());
 stack1.pop(); 
 console.log( stack1.traverse());


 function Node(value) {

  this.value = value;
  this.children = [];
}

// Create elements
const root = new Node(0)

const child1 = new Node(1)
root.children.push(child1)

const child2 = new Node(2)
root.children.push(child2)

const child3 = new Node(3)
root.children.push(child3)

const child11 = new Node(11)
child1.children.push(child11)

const child12 = new Node(12)
child1.children.push(child12)

const child31  = new Node(31)
child3.children.push(child31)