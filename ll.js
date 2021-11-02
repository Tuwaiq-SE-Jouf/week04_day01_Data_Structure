
const root = new Node(0);

const child1 = new Node(5);
root.children.push(child1);

const child2 = new Node(9);
root.children.push(child2);

const child3 = new Node(11);
root.children.push(child3);

const child4 = new Node(14);
child1.children.push(child4);

const child5 = new Node(20);
child1.children.push(child5);

const child6 = new Node(12);
child3.children.push(child6);

const x = traverse(root);
