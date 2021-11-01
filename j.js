class Queue {
    constructor(items) {
        this.items = [];
    }
//add
    enqueue(element) {
        return this.items.push(element);
    }

    // remove 
    dequeue() {
        if(this.items.length > 0) {
            return this.items.shift();
        }}

        traverse(){
            for(let i=0;i<this.items.length;i++){
                console.log(this.items[i])
            }
        }}



let number = new Queue();
number.enqueue(5);
number.enqueue(7);
number.enqueue(2);
number.enqueue(9);
number.enqueue(8);
number.enqueue(3);
console.log(number.items);

number.dequeue();
number.enqueue(11);
console.log(number.items);



number.traverse();


