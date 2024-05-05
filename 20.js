class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    contains(element) {
        return this.items.includes(element);
    }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Is 2 present in the stack?",
    stack.contains(2));
console.log("Is 4 present in the stack?",
    stack.contains(4));