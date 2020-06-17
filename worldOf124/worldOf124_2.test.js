// let $,solution = $ = n => n --> 0 ? $(n/3^0) + (1<<(n)%3) : ""


function solution(n) {
    console.log( n, parseInt((n-1) / 3), [1, 2, 4][(n - 1) % 3])
    return n === 0 ? '' : solution(parseInt((n-1) / 3)) + [4, 1, 2][(n ) % 3];
}



test('solution' , () => {
    expect(solution(1)).toBe('1');
    expect(solution(2)).toBe('2');
    expect(solution(3)).toBe('4');
    expect(solution(4)).toBe('11');
    expect(solution(5)).toBe('12');
    expect(solution(6)).toBe('14');
    expect(solution(7)).toBe('21');
    expect(solution(8)).toBe('22');
    expect(solution(9)).toBe('24');
    expect(solution(10)).toBe('41');
    expect(solution(11)).toBe('42');
    expect(solution(12)).toBe('44');
    expect(solution(13)).toBe('111');
})