
// https://www.programiz.com/javascript/examples/queue

class Queue {
    constructor(items) {
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
        }}

        traverse(){
            for(let i=0;i<this.items.length;i++){
                console.log(this.items[i])
            }
        }}
    


let queue = new Queue();
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(8);
console.log(queue.items);

queue.dequeue();
queue.enqueue(15);
console.log(queue.items);



queue.traverse();

