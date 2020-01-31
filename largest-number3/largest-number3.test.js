// const largestNumber = () => {

//     return "9534330";   
// }


test('largestNumber', () =>  {
    expect(largestNumber([3, 30, 34, 5, 9])).toBe("9534330");
})


function largestNumber(numbers) {
//     const mapper = new Map([['1', [1,2,3,4,5]], ['2', 'b']]);
// console.log(Array.from(mapper.values()));
// // ['a', 'b'];

// console.log(Array.from(mapper.keys()));
// // ['1', '2'];


    const arr =  Array.from(numbers,String)
  return   arr.sort((a,b) => (b+a) - (a+b))[0] === 0 ? '0' : arr.join('')
}