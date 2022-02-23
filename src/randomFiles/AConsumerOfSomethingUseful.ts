import {SomethingUseful} from './somePackage';

const s = new SomethingUseful();
const first = s.foo('a', 2);
const second = s.bar('foo', 'bar');

console.log('first', first);
console.log('second', second);