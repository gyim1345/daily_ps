const maxMinNumber = (s) => `${Math.min(...s.split(' '))} ${Math.max(...s.split(' '))}`

const maxMinNumber1 = (s) => {
    const testnumber = s.split(' ').sort(function(a, b){return a-b})
    return `${testnumber.shift()} ${testnumber.pop()}`
}

test('maxMinNumber1', () => {
    expect(maxMinNumber1('-1 -2 -3 -4')).toBe('-4 -1');
})

test('maxMinNumber' , () => {
    expect(maxMinNumber('1 2 3 4')).toBe('1 4');
    expect(maxMinNumber('-1 -2 -3 -4')).toBe('-4 -1');
})