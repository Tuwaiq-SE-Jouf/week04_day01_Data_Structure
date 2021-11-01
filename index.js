console.log("-----The Queue ")
class Queue {
    constructor() {
      this.element = [];
    }
    enqueue(item) {
        this.element.push(item)
    };
    dequeue(){
        this.element.shift()
    };
    traverse (){
        this.element.forEach((element, index) => {
            console.log(element);
        });
    }
}
let names = new Queue();
names.enqueue("Abdulmajeed");
names.enqueue("Faris");
names.enqueue("Ahmed");
names.traverse();
names.dequeue();
names.traverse();


console.log("--Stack---");

class Stack {
    constructor() {
      this.stack = [];
    }
    push (item) {
        this.stack.push(item)
    };
    pop(){
        this.stack.pop()
    };
    stackPrint (){
        this.stack.forEach((element, index) => {
            console.log(element);
        });
    }
}


let myFrinds = new Stack();
myFrinds.push("Khaled");
myFrinds.push("Mohamed");
myFrinds.push("Nasser");
myFrinds.push("Sultan");
myFrinds.stackPrint();
myFrinds.pop();
myFrinds.stackPrint();

