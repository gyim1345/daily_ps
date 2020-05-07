
// sort를 해서 큰것 부터 첫번째 값으로 쓰자.
// string 값으로 변환해서 앞뒤랑 뒤앞의 숫자화 해서 비교를 해서 sorting을 하자


const largestNumber = (array) => {
    if(array.every(x =>x === 0))
    return '0';
    return sortNumber(array).join('')
}

const sortNumber = (array) => {
return array.map(x=> x.toString()).sort((a,b) => {
        return Number(b+a) - Number(a+b)
    })
}

// test('sort', () => {
//     expect(sortNumber([6,10,2])).toEqual(['6','2','10'])
//     expect(sortNumber([3, 30, 34, 5, 9])).toEqual(['9','5','34','3','30'])
// })

test('largestNumber', () => {
    expect(largestNumber([6, 10, 2])).toBe('6210')
    expect(largestNumber([3, 30, 34, 5, 9])).toBe('9534330')
    expect(largestNumber([124124124, 0, 4])).toBe('41241241240')
    expect(largestNumber([0,0,0,0])).toBe('0')
})

