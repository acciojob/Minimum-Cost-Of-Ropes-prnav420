function calculateMinCost() {
 const PriorityQueue = require('js-priority-queue');

const pq = new PriorityQueue({
  comparator: function(a, b) {
    return a - b;
  }
});

// Add elements to the queue
pq.queue(4);
pq.queue(2);
pq.queue(7);
pq.queue(6);
pq.queue(9);

// Remove elements from the queue and calculate the minimum cost
let cost = 0;
while (pq.length > 1) {
  let a = pq.dequeue();
  let b = pq.dequeue();
  let sum = a + b;
  pq.queue(sum);
  cost += sum;
}

console.log(cost); // output: 62

  
}  
