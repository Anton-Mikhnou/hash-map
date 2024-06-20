import { log } from 'util';
import LinkedList from './linkedList';

export default class HashMap {
    numIntems = 0;

    constructor(size) {
        this.size = size;
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


    set (key, value) {
        this.numIntems++;
        const loadFactor = this.numIntems / this.buckets.length;

        if(loadFactor > 0.75) {
            this.#growingBuckets();
        }

        let index = this.#hash(key);

        if (!this.buckets[index]) {
            let pair = [key, value];
            this.buckets[index] = [pair];
        } else {
            if (this.buckets[index][0][0] === key) {
                this.buckets[index][0][1] = value;
            } else {
                let pair = [key, value];
                this.buckets[index].push(pair);
            }
        }

    }

    #growingBuckets () {
        const newSize = this.size*2;
        const newBuckets = new Array(this.size*2);

        this.buckets.forEach(item => {

            this.buckets = newBuckets;

            if (item) {

                item.forEach(([key, value]) => {

                    let index = this.#hash(key);

                    if (!newBuckets[index]) {
                        let pair = [key, value];
                        newBuckets[index] = [pair];
                    } else {
                        if (newBuckets[index][0][0] === key) {
                            newBuckets[index][0][1] = value;
                        } else {
                            let pair = [key, value];
                            newBuckets[index].push(pair);
                        }
                    }
                })

            }
        })
        this.size = newSize;
    }

    get (key) {

        let index = this.#hash(key);
        
        if (!this.buckets[index]) {
            return null;
        } else {
            return this.buckets[index].find(value => value[0] === key);
        }

    }

    has (key) {

        let index = this.#hash(key);
        
        if(!this.buckets[index]) {
            return false;
        } else {
            const found = this.buckets[index].find(item => item[0] === key);
            return found !== undefined;
        }

    }

    remove (key) {

        let index = this.#hash(key);

        if (!this.buckets[index]) {
            
            return false;

        } else {

            for(let i = 0; i < this.buckets[index].length; i++) {

                if(this.buckets[index][i][0] === key) {

                    this.buckets[index].splice(i, 1);
                    this.numIntems--;

                    if (this.buckets[index].length === 0) {
                        this.buckets[index] = null;
                    }

                    return true
                }

            }

            return 'not find';
        }

    }

    length () {
        let  amount = 0;

        for(let i = 0; i < this.buckets.length; i++) {
            if(this.buckets[i]) {
                for(let j = 0; j < this.buckets[i].length; j++) {
                   amount++
                }
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
                for(let j = 0; j < this.buckets[i].length; j++) {
                    keys.push(this.buckets[i][j][0])
                }
            }
        }

        return keys;
    }

    values () {

        let values = []

        for(let i = 0; i < this.buckets.length; i++) {
            if(this.buckets[i]) {
                for(let j = 0; j < this.buckets[i].length; j++) {
                    values.push(this.buckets[i][j][1])
                }
            }
        }

        return values;
    }

    entrise () {

        let entrise = [];

        for(let i = 0; i < this.buckets.length; i++) {
            if(this.buckets[i]) {
                for(let j = 0; j < this.buckets[i].length; j++) {
                    entrise.push(this.buckets[i][j])
                }
            }
        }

        return entrise;
    } 
}