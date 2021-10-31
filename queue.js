/* Queue ( F In F Out ) */
let queue = [];

let queueAddItem = (item) => queue.push(item);

let queueRemoveItem = () => queue.shift();

let queuePrint = () => {
    queue.forEach((element, index) => {
        console.log(element);
    });
}

queueAddItem(8);
queueAddItem(9);
queueAddItem(10);
queueAddItem(15);
queuePrint();
queueRemoveItem();
queuePrint();