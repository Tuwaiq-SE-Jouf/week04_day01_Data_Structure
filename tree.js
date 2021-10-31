function Node(value) {

    this.value = value;
    this.children = [];
}

// Create elements
const root = new Node(0)

const child1 = new Node(1)
root.children.push(child1)

const child2 = new Node(2)
root.children.push(child2)

const child3 = new Node(3)
root.children.push(child3)

const child11 = new Node(11)
child1.children.push(child11)

const child12 = new Node(12)
child1.children.push(child12)

const child31  = new Node(31)
child3.children.push(child31)


let traverseTree = () =>{
    console.log ( root.value )
    root.children.forEach((element, index) => {
if(element.children > 0){
    console.log(element.value)

}
else
console.log(element.value)

        element.children.forEach((element1) => {
            console.log(element1.value);
        });
    });
}

traverseTree(); 



 /*console.log(root.value);
 console.log(child1.value);
 console.log(child2.value);
 console.log(child3.value);
 console.log(child11.value);
 console.log(child12.value);
 console.log(child31.value);*/