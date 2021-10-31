/* Stack ( L In F Out ) */

let stack = [];

let stackAddItem = ( item ) => stack.push(item);

let stackRemoveItem = () => stack.pop();

let stackPrint = () => {
    stack.forEach((element, index) => {
        console.log(element);
    });
}

stackAddItem(6);
stackAddItem(3);
stackAddItem(9);
stackAddItem(7);
stackPrint();
stackRemoveItem();
stackPrint();
