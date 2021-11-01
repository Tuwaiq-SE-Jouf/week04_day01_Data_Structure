class myCars {
    constructor() {
        this.items = ["mazda", "toyota", "honda", "tesla"];
    }
    enqueue(items) {
        return this.items.push(items);
    }
    dequeue() {
        return this.items.shift();
    }

    traverse() {
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i])
        }
    }
}
let cars = new myCars();
console.log(cars.items);
cars.enqueue("ford");
console.log(cars.items);
cars.dequeue();
console.log(cars.items);
cars.traverse();
console.log(cars.items);









//https://www.programiz.com + youtube