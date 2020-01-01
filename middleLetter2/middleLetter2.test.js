function solution(s) {
    console.log(Math.ceil(s.length / 2) - 1)
    return s.length % 2 ==0 ? s.substr(s.length/2-1,2) : s.substr(s.length/2,1)
}

test('solution()', () => {
    expect(solution('abcde')).toBe('c')
})