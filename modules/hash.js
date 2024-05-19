import Node from './node';

export default class HashMap {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }

    hash(key) {
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 16;
        }

        return hashCode;
    }

    set(key, value) {
        
    }
}