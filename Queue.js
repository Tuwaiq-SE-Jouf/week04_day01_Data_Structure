let stack = [];

let stackAddItem = ( num ) => stack.push(num);

let stackRemoveItem = () => stack.pop();

let stackPrint = () => {
    stack.forEach((element, index) => {
        console.log(element);
    });
}

stackAddItem(2);
stackAddItem(8);
stackAddItem(3);
stackAddItem(9);
stackPrint();
stackRemoveItem();
stackPrint();

/////////////////////////////////////////////



let queue = [];

let queueAddItem = (num) => queue.push(num);

let queueRemoveItem = () => queue.shift();

let queuePrint = () => {
    queue.forEach((element, index) => {
        console.log(element);
    });
}

queueAddItem(5);
queueAddItem(6);
queueAddItem(7);
queueAddItem(8);
queuePrint();
queueRemoveItem();
queuePrint(); 


////////////////////////////////////////////////

function Node(value) {
    this.value = value;
    this.children = [];
  }
  
  function traverse(root) {
    console.log(root.value);
    root.children.forEach(function (n) {
      traverse(n);
    });
    //console.log(root.children);
  }
  
  // Create elements
  const root = new Node(0);
  
  const child1 = new Node(1);
  root.children.push(child1);
  
  const child2 = new Node(2);
  root.children.push(child2);
  
  const child3 = new Node(3);
  root.children.push(child3);
  
  const child11 = new Node(14);
  child1.children.push(child11);
  
  const child12 = new Node(15);
  child1.children.push(child12);
  
  const child31 = new Node(41);
  child3.children.push(child31);
  
  const x = traverse(root);