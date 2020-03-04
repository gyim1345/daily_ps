function solution(participant, completion) {
    participant.sort();
    completion.sort();
    for(let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            return participant[i];
        }
    }

}

test('solution', () => {
    expect(solution(['mislav', 'stanko', 'mislav', 'ana'], 
                    ['stanko', 'mislav', 'ana'])).toBe('mislav');
    // expect(solution([2, 2, 3, 3], 10)).toBe(4);
 
});