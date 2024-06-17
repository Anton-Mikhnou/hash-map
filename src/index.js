import HashMap from '../modules/hash';
import LinkedList from '../modules/linkedList';

let hashMap = new HashMap();

// console.log(hashMap.set('Car', 'fsdf'));

// hashMap.value('hh',4);

console.log(hashMap.set('Car', 'bmw'));

console.log(hashMap.set('Car', 'brr'));
// console.log(hashMap.set('Car', 'brr'));

console.log(hashMap.set('Ca', 'df'));

// console.log(hashMap.set('Anton', 'Mikhnou'))

hashMap.value(4);

console.log('get:', hashMap.get('Car'));
console.log('has:', hashMap.has('Car'))
// console.log('remove:', hashMap.remove('Car'))
console.log('lenght:', hashMap.length());
// console.log('clear:', hashMap.clear());
console.log('keys:', hashMap.keys());
console.log('values:', hashMap.values());
console.log('entrise:', hashMap.entrise());



// console.log(hashMap.set('Car', 'bmw'));





// hashMap.set('Mano', 'Farci')

// hashMap.value(5)

// hashMap.set('Mano', 'tff')

// hashMap.value(5)
