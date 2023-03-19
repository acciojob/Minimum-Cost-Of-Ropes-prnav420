class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(element, priority) {
    let obj = { element, priority };
    let added = false;

    for (let i = 0; i < this.items.length; i++) {
      if (obj.priority < this.items[i].priority) {
        this.items.splice(i, 0, obj);
        added = true;
        break;
      }
    }

    if (!added) {
      this.items.push(obj);
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return "No elements in Queue";
    }
    return this.items[0];
  }

  rear() {
    if (this.isEmpty()) {
      return "No elements in Queue";
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  printQueue() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i].element + " ";
    }
    return str;
  }
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue("A", 1);
priorityQueue.enqueue("B", 2);
priorityQueue.enqueue("C", 3);
priorityQueue.enqueue("D", 2);

console.log(priorityQueue.printQueue()); // A B D C
console.log(priorityQueue.front()); // { element: 'A', priority: 1 }
console.log(priorityQueue.rear()); // { element: 'C', priority: 3 }
console.log(priorityQueue.dequeue()); // { element: 'A', priority: 1 }
console.log(priorityQueue.printQueue()); // B D C
