class myCars {
    constructor() {
        this.items = ["mazda", "toyota", "honda", "tesla"];
    }
    add(items) {
        return this.items.push(items);
    }
    remove() {
        return this.items.pop();
    }

    traverse() {
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }
}
let cars = new myCars();
console.log(cars.items);
cars.add("ford");
console.log(cars.items);
cars.remove();
console.log(cars.items);
cars.traverse();
console.log(cars.items);









//https://www.programiz.com + youtube