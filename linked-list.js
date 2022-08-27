class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Your code here
    this.head = null
    this.length=0
  }

  addToHead(val) {
    // Your code here
    let newNode = new LinkedListNode(val)
   let curr= this.head
   this.head= newNode
   this.head.next= curr
   this.length++
  }

  addToTail(val) {
    // Your code here
   let newNode = new LinkedListNode(val)
   if(this.head===null){
    this.head=newNode
   }else{
    let curr= this.head
    while(curr.next!==null){
      curr=curr.next
    }
    curr.next = newNode
   }
   this.length++
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;