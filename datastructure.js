
console.log(" ------ Data Structure Lab  ------")
console.log(" ------ Queue Part ------")

class Queue {
    constructor() {
        this.items = []
        this.count = 0
    }

    // Add element to top of Queue
    enqueue(element) {
        this.items[this.count] = element
        console.log(element+" added to " + this.count)
        console.log(element)
        this.count += 1
        return this.count - 1
    }

    // Return and remove top element in Queue
    // Return undefined if Queue is empty
    dequeue() {

       let deleteItem = this.items.shift();
       this.count -= 1
        console.log( deleteItem + " removed")
        return deleteItem
    }
    // Print elements in Queue
    print() {
        let str = ''
        for(let i = 0; i < this.count; i++) {
            str += this.items[i] + '  '
        }
        return str
    }

}

const queue = new Queue()

queue.enqueue(100)
queue.enqueue(200)
queue.enqueue(300)
queue.enqueue(400)
queue.enqueue(500)

console.log("The Queue is .. "+queue.print())

queue.dequeue()
queue.dequeue()

console.log("The Queue is .. "+queue.print())


console.log(" ------ Stack Part ------")
class Stack {
    constructor() {
        this.items = []
        this.count = 0
    }

    // Add element to top of stack
    push(element) {
        this.items[this.count] = element
        console.log(element+" added to " + this.count)
        console.log(element)
        this.count += 1
        return this.count - 1
    }

    // Return and remove top element in stack
    // Return undefined if stack is empty
    pop() {
        if(this.count == 0) return undefined
        let deleteItem = this.items[this.count - 1]
        this.count -= 1
        console.log( deleteItem + " removed")
        return deleteItem
    }

    // Print elements in stack
    print() {
        let str = ''
        for(let i = 0; i < this.count; i++) {
            str += this.items[i] + '  '
        }
        return str
    }

}
const stack = new Stack()

stack.push(100)
stack.push(200)
stack.push(300)
stack.push(400)
stack.push(500)

console.log("The Stack is .. "+ stack.print())

stack.pop()
stack.pop()


console.log("The Stack is .. "+ stack.print())
