
```javascript
const mapper = new Map([['1', [1,2,3,4,5]], ['2', 'b']]);
 console.log(Array.from(mapper.values()));
// ['a', 'b'];

 console.log(Array.from(mapper.keys()));
  // ['1', '2'];
```
맵(key,values)로 되어 있는데 
배열 안의 배열들의 첫번째 값들을 가져올려면 .key를 불러오면 되고 두번째 값들만 불려올려면 values를 쓰면 된다. 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from


``` javascript
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]
```

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/keys