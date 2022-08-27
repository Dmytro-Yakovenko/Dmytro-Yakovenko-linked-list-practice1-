class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    // Your code here
    this.head=null
    this.tail=null
    this.length=0
  }

  addToHead(val) {
    // Your code here
    let newNode=new DoublyLinkedListNode(val)
    if(this.head===null){
      this.head=newNode
      this.tail=newNode

    }else{
      this.head.prev = newNode
      let curr = this.head
      this.head=newNode
      this.head.next = curr

    }
    this.length++
  }

  addToTail(val) {
    // Your code here
    let newNode= new DoublyLinkedListNode(val)
    if(this.head===null){
      this.head=newNode
      this.tail=newNode
    }else{
      let curr = this.tail
      curr.next= newNode
      this.tail=newNode
      this.tail.prev= curr
      this.tail.next =null
    }
    
this.length++
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;