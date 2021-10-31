//Queue
class Queue {
    constructor (){
    this.Array=[];
}
//enqueue: adds an item to the back of a queue.
 enqueue(sa) { 
    this.Array.push(sa);
}
//dequeue: removes an item from the front of a queue.
dequeue() {
    this.Array.shift();
}
//traverse: print the elements of the queue one by one.
traverse(){
    this.Array.forEach(function (sa) {
        
        console.log(sa);

    })
}
}

let sa=new Queue();

sa.enqueue(2);
sa.enqueue(3);
sa.enqueue(5);
sa.enqueue(8);
console.log(sa);
sa.dequeue();
console.log(sa);
sa.traverse();


//stack
class Stack{

    constructor(){
        this.Array = []; 
    }


    //push: adds an item to the top of a stack.
    push(salma) {
this.Array.push(salma); 
return   
    }
     
    //pop: removes an item from the top of a stack.
    pop(){
        this.Array.pop();
    }
    //traverse: print the element of the stack one by one.
    traverse(){
        for (let i = 0; i < this.Array.length; i++) {
            console.log(this.Array[i])
          }}
        }
    let s=new Stack();
    s.push(5);
    s.push(6);
    s.push(7);
    s.push(8);
    s.pop();
    console.log(s);
    s.traverse();
  


    // Tree (BONUS)


    
   
function tree (root){
    this.tree=tree;
    this.child = [];
}
    function num(root) {

        for(let i = 0; i < root.child.length; i++) {
            num(root.child[i])    
}
console.log(root);
    }  
    // Create elements
const root = new Node(0)

const child1 = new Node(1)
root.child.push(child1)

const child2 = new Node(2)
root.child.push(child2)

const child3 = new Node(3)
root.child.push(child3)

const child11 = new Node(11)
child1.child.push(child11)

const child12 = new Node(12)
child1.child.push(child12)

const x= num(root);

    
