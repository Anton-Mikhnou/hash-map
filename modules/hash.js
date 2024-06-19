import { log } from 'util';
import LinkedList from './linkedList';

export default class HashMap {

    constructor(size) {
       this.buckets = new Array(size)
    }

    #hash (key) {
        
        let hashCode = 0;
      
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
        }

        return hashCode;
    }

    // #growingBuckets () {
    //     const capacity = 0.75;

    //     let counter = 0

    //     for(let i = 0; i < this.buckets.length; i++) {
    //         if (this.buckets[i] !== null | ' ' | undefined) {
    //             counter++
    //         }
    //     }

    //     if(counter >= size*capacity) {
    //         size *= 2;
    //     }
    // }

    set (key, value) {

        let index = this.#hash(key);

        if (!this.buckets[index]) {
            let linkedList = new LinkedList();
            let pair = [key, linkedList];
            this.buckets[index] = pair;
            linkedList.append(value);
        } else {
            if (this.buckets[index][0] === key) {
                this.buckets[index][1].getHead().data = value;
            } else {
                let pair = [key, value]
                this.buckets[index][1].append(pair);
            }
        }

        console.log('buckets',this.buckets)
    }

    get (key) {

        let index = this.#hash(key);
        
        if (!this.buckets[index]) {
            return null;
        } else {
            return this.buckets[index][1].getHead().data;
        }

    }

    has (key) {

        let index = this.#hash(key);
        
        if(!this.buckets[index]) {
            return false;
        } else {
            return true
        }

    }

    remove (key) {
        let index = this.#hash(key);

        if (!this.buckets[index]) {
            return false;
        } else {
            this.buckets[index] = null;
            return true
        }
    }

    length () {
        let  amount = 0;

        for(let i = 0; i < this.buckets.length; i++) {
            if(this.buckets[i]) {
                amount++;
            }
        }

        return amount;
    }

    clear () {

        for(let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = null;
        }

    }

    keys () {

        let keys = []

        for(let i = 0; i < this.buckets.length; i++) {
            if(this.buckets[i]) {
                keys.push(this.buckets[i][0]);
            }
        }

        return keys;
    }

    values () {

        let values = []

        for(let i = 0; i < this.buckets.length; i++) {
            if(this.buckets[i]) {
                values.push(this.buckets[i][1].getHead().data);
            }
        }

        return values;
    }

    entrise () {

        let entrise = [];

        for(let i = 0; i < this.buckets.length; i++) {
            
            if(this.buckets[i]) {
                let array = [];
                array.push(this.buckets[i][0])
                array.push(this.buckets[i][1].getHead().data)
                entrise.push(array);
            }
        }

        return entrise;
    } 

}