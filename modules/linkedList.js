import Node from "./node";

export default class LinkedList {
    constructor(head = null, tail = null) {
        this.head = head;
        this.tail = tail;
    }

    #setIndex() {
        let temp = this.head;
        let number = 0;
        while(temp !== null) {
            temp.index = number;
            number++;
            temp = temp.next;
        }
    }

    append(value) {
        const node = new Node(value);

        if(!this.head || !this.tail) {

            this.head = node;
            this.tail = node;
            return this;

        } else {

            this.tail.next = node;
            this.tail = node;
            this.#setIndex()
            return this;
        }
    }

    prepend(value) {
        const node = new Node(value);

        if(!this.head || !this.tail) {

            this.head = node;
            this.tail = node;
            return this;

        } else {
            const before = this.head;
            this.head = node;
            this.head.next = before;

            this.#setIndex()
            return this;

        }
    }

    size() {
        let temp = this.head;
        let number = 0;
        while(temp !== null) {
            temp.index = number;
            number++;
            temp = temp.next;
        }
        return number;
    }

    


}

