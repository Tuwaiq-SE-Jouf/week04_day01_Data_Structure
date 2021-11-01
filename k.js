class stack {
    constructor() {
        this.items = [];
    }

    // add 
    add(element) {
        return this.items.push(element);
    }

    // remove 
    remove() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }

    traverse(){
        for(let i=0;i<this.items.length;i++){
            console.log(this.items[i])
        }

}}

let st = new stack();
st.add(5);
st.add(7);
st.add(2);
st.add(9);
st.add(8);
st.add(3);
console.log(st.items);

st.add(11);
console.log(st.items);
st.remove();
st.remove();
console.log(st.items);
st.traverse();
