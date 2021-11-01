
// https://www.programiz.com/javascript/examples/stack

class Stack {
    constructor() {
        this.items = [];
    }
    
    // add element to the stack
    add(element) {
        return this.items.push(element);
    }
    
    // remove element from the stack
    remove() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }
    
    traverse(){
        for(let i=0;i<this.items.length;i++){
            console.log(this.items[i])
        }
    
}}

let stack = new Stack();
stack.add(3);
stack.add(4);
stack.add(5);
stack.add(6);
stack.add(7);
stack.add(8);
console.log(stack.items);

stack.add(15);
console.log(stack.items);
stack.remove();
stack.remove();
console.log(stack.items);
stack.traverse();



