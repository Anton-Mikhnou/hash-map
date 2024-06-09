import HashMap from '../modules/hash';
import LinkedList from '../modules/linkedList';

let hashMap = new HashMap();

console.log(hashMap.set('Car', 'fsdf'));

hashMap.value(4);

console.log(hashMap.set('Car', 'trtr'));

hashMap.value(4);

hashMap.set('Mano', 'Farci')

hashMap.value(5)

hashMap.set('Mano', 'tff')

hashMap.value(5)
console.log('===============');
let list = new LinkedList();

console.log(list.append('sd'));
console.log(list.append('tr'));
// console.log(list.prepend('re'));

console.log(list.size());
console.log('list', list);


// console.log('head',list.getHead());
// console.log('tail',list.getTail());
// console.log(list.at(1));
// console.log('list1', list);

// console.log('pop',list.pop())

console.log('list', list);

// list.append('pp');
// list.append('rr')
// list.pop()
// list.pop()

console.log('list', list);
console.log('contains', list.contains('tr'));
// console.log('find', list.find(''));
