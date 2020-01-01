function solution(participant, completion) {
    for(let i=participant.length-1; i>=0; i--){
        for(let j=completion.length-1; j>=0; j--){
             if(participant[i] == completion[j]){
                 participant.splice(i,1);
                completion.splice(j,1); 
                 break;
            }
        }
        
    }
    
    return participant.toString();

    let answer = '';
    console.log(participant);

    console.log(completion);
    answer = participant.filter(elements => !completion.includes(elements)).toString();
    console.log(answer);
    
    let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)

    if(answer =='')
    answer = findDuplicates(participant).toString();

    return answer;
}




test('solution', () => {
    expect(solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'mislav', 'ana'])).toBe('mislav');
    // expect(solution([2, 2, 3, 3], 10)).toBe(4);
 
});