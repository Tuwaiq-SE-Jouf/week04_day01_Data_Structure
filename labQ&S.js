//////// Queue
let myName =["sultanh","moqbel"]
function enqueue(name){
    console.log(myName)
    myName.push(name)
    console.log(myName)
}
function dequeue(){
    console.log(myName)
    myName.shift()
    console.log(myName)
}
function traverse(){
    for(i=0; i < myName.length; i++){
        console.log(myName[i])
    }
}
enqueue("alrwuaili");
dequeue();
traverse();


///////// stack
let myBrother =["Naif","khaled","fahad"]
function push (name){
    console.log(myBrother)
    myBrother.push(name)
    console.log(myBrother)
}
function pop(){
    console.log(myBrother)
    myBrother.pop()
    console.log(myBrother)
}
function traverseName(){
    for(i=0; i < myBrother.length; i++){
        console.log(myBrother[i])
    }
}
push("abdulaziz");
pop();
traverseName();

