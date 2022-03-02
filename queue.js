//First In First Out = FIFO 

class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue(element) {
        this.queue.push(element)
    }
    dequeue() {
        this.queue.shift()
    }
}

const premiks = new Queue();
premiks.enqueue('Ashiq');
console.log(premiks.queue)
premiks.enqueue('Dewan')
console.log(premiks.queue)
premiks.enqueue('Prem')
console.log(premiks.queue)
premiks.enqueue('Sagor')
console.log(premiks.queue)
premiks.enqueue('Raj')

console.log(premiks.queue)

premiks.dequeue()
console.log(premiks.queue)
premiks.dequeue()
console.log(premiks.queue)
premiks.dequeue()
console.log(premiks.queue)
premiks.dequeue()
console.log(premiks.queue)
premiks.dequeue()
console.log(premiks.queue)
