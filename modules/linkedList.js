import { createHtmlTagObject } from "html-webpack-plugin";
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

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }

    at(indexs) {
        let temp = this.head;
        let number = 0;
        while(temp !== null) {
            if(temp.index === indexs) {
                return temp;
            } else {
                temp.index = number;
                number++;
                temp = temp.next;
            }
        }
    }

    pop() {

        if (this.head === null) {

            return undefined;

        } else if (this.head.next === null ) {

            this.head = null;
            this.tail = null;
            return undefined;

        } else {

            let temp = this.head;
            let number = 0;

            while(temp.next !== this.tail) {
                temp.index = number;
                number++;
                temp = temp.next;
            }

            this.tail = temp;
            temp.next = null;
        }
        
        this.#setIndex();
    }

    contains(value) {  

        if(this.head === null) {

            return undefined;

        } else {
            let temp = this.head;
            let number = 0;

            while(temp !== null) {
                if(temp.data === value) {

                    return true;

                } else { 

                    temp.index = number;
                    number++;
                    temp = temp.next;

                }
            }
        }
    }

    

}