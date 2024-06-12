import { log } from 'util';
import LinkedList from './linkedList';
import Node from './node';

export default class HashMap {
    constructor() {
       this.buckets = new Array(16)
    }

    #hash(key) {
        let hashCode = 0;
      
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
        }

        return hashCode;
    }

    set(key, value) {
        let index = this.#hash(key);
        let pair = {};
        pair[key] = value; 

      
        console.log(this.buckets[index] === '');

        if (this.buckets[index] === '') {
            let linkedList = new LinkedList();
            this.buckets[index] = linkedList;
            linkedList.append(pair);
        } else {
            let linkedList = new LinkedList();
            this.buckets[index] = linkedList;
            linkedList.append(pair);
        }
    }

    value(index) {
        console.log(this.buckets[index]);
        console.log(this.buckets);
    }
}