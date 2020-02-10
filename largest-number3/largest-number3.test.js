// const largestNumber = () => {

//     return "9534330";   
// }


test('largestNumber', () =>  {
    expect(largestNumber([3, 30, 34, 5, 9])).toBe("9534330");
})


function largestNumber(numbers) {
    const arr =  Array.from(numbers,String)
  return   arr.sort((a,b) => (b+a) - (a+b))[0] === 0 ? '0' : arr.join('')
}