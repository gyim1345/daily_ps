function solution(arr) {
    var answer = 0;
    const max = arr.reduce((acc,cur) => acc*cur);
    for(let i = Math.max(...arr); i<=max; i ++ ) {
            if(arr.every(x=> i%x === 0)) {
                return i;
            }
    }
    return answer;
}



test('solution', () => {
    expect(solution([2,6,8,14])).toBe(168);
    expect(solution([1,2,3])).toBe(6);
});