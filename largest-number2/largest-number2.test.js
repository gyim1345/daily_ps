// const largestNumber = (a) => {
//     return sortNumber(a).join('')
// }

const largestNumber = (a) => {
    return Math.max(...a) === 0 ? '0' : a.sort(function(a, b) { return a+ '' + b > b + '' + a ? -1 : 1}).join('')
}


const sortNumber = (a) => {
    return a.sort(compare)
}

const compare = (a,b) => {
    return a+ '' + b > b + '' + a ? -1 : 1
}

test( 'sortNumber', () => { 
  expect(sortNumber([89,99])).toEqual([99, 89])
})

test( 'largestNumber' ,  () => {
    expect(largestNumber([89, 989, 987,123])).toBe('98998789123');
    expect(largestNumber([21, 11, 0, 10, 100, 1000, 1, 9, 911, 90, 99, 101])).toBe('99991190211111011010010000');
    expect(largestNumber([1, 0, 9, 911, 90, 99, 10, 12, 11])).toBe('9999119012111100');
    expect(largestNumber([0,0,0,0,0])).toBe('0');

})