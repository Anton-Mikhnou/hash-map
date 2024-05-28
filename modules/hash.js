import Node from './node';

export default class HashMap {
    constructor() {
       this.buckets = new Array(16)
    }

    hash(key) {
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
        }

        return hashCode;
    }

    set(key, value) {
        let index = this.hash(key);

        if (this.buckets[index] !== '' && this.buckets[index] === value) {
            this.buckets[index] = value;
        } else {
            
            this.buckets[index] = value;
        }

    }

    value(index) {
        console.log(this.buckets[index]);
        console.log(this.buckets);
    }
}