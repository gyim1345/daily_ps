var solution=(participant,completion)=>
participant.find(participant=>!completion[participant]--,completion
    .map(participant=>completion[participant]=(completion[participant]|0)+1))




test('solution', () => {
    expect(solution(['mislav', 'stanko', 'mislav', 'ana'], 
                    ['stanko', 'mislav', 'ana'])).toBe('mislav');
    // expect(solution([2, 2, 3, 3], 10)).toBe(4);
 
});