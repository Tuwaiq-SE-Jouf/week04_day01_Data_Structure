
// //Queue (delete and  add)
     function Queue () {
          collection = [];
         this.print =function() {
          console. log(collection); };
           this.enqueue = function(element) { 
               collection.push(element); };
            this.dequeue =function() {
                 return collection.shift(); }; 
                 this.front = function()
                 { return collecrion[0]; }
                 this.size = function() 
                 { return collection.length; };
                  this. isEmpty = function() 
                  { return (collection.length === 0); }
            }
            var q=new Queue();
            q.enqueue(1);
            q.enqueue(2);
            q.enqueue(3);
            q.enqueue(4);
            q.print();
            q.dequeue();
            q.print();
            q.enqueue(5);
            q.print();



//Array as Stack
 const arr = [];
 arr.push(1);
  arr.push(2); 
  arr.push(3);
  arr.push(4);
  arr.push(5);
console.log(arr.pop()); 
console.log(arr.pop()); 
console.log(arr.pop());  
console.log(arr.pop()); 
console.log(arr.pop()); 
