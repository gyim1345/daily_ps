const maxMinNumber = (string) => {
    return `${Math.min(...string.split(' '))} ${Math.max(...string.split(' '))}`
}

// const maxMinNumber = (string) => {
//     return [Math.min(...string.split(' ')), Math.max(...string.split(' '))].join(' ')
// }

test('maxMinNumber', () => {
    expect(maxMinNumber('1 2 3 4')).toBe('1 4')
    expect(maxMinNumber('-1 -2 -3 -4')).toBe('-4 -1')
    expect(maxMinNumber('-1 -1')).toBe('-1 -1')
})