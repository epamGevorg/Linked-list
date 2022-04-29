// User defined class node
class Node {
    // constructor
    constructor(element)
    {
        this.element = element;
        this.next = null
    }
}

// linkedlist class
class LinkedList {
    constructor()
    {
        this.head = null;
        this.size = 0;
    }

    // functions to be implemented
    // add(element)
    add(element) {
        const node = new Node();
        let current;

        if (this.head == null) {
            this.head = node
        } else {
            current = this.head;

            while (current.next) {
                current = current.next
            }

            current.next = node;
        }
        this.size++
    }

    // insertAt(element, location)

    insertAt(element, index) {
        if (index < 0 || index > this.size) {
            return "Please enter a valid index."
        } else {
            // creates a new node
            const node = new Node(element);
            let curr, prev;

            curr = this.head;

            // add the element to the first index
            if(index === 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                let it = 0;

                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // adding an element
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }
    // removeFrom(location)
    removeFrom(index) {
        if(index < 0 || index >= this.size) {
            return "Please enter a valid index.";
        } else {
            let curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            if(index === 0) {
                this.head = curr.next;
            } else {
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                prev.next = curr.next;
            }
            this.size--;

            return curr.element;
        }
    }
    // removeElement(element)
    removeElement(element) {
        let current = this.head;
        let prev = null;

        while (current !== null) {
            if(current.element === element) {
                if(prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }
    // Helper Methods
    indexOf(element) {
        let count = 0;
        let current = this.head;

        while (current !== null) {
            if(current.element === element) {
                return count;
            }
            count++;
            current = current.next;
        }
        return -1;
    }

    idEmpty() {
        return this.size === 0;
    }

    size_of_list() {
        return this.size;
    }

    printList() {
        let curr = this.head;
        let str = '';
        while(curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }
}
