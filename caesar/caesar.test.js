function solution(s, n){
    let answer = [];
    
    let sArray = s.split('');

    for (let i = 0; i<sArray.length; i++)
    {   
        if(sArray[i].charCodeAt(0) == 32){
            answer[i] = ' '
        
        }
        else 
        if(s.charCodeAt(i)+n>122){
        answer[i] = String.fromCharCode(s.charCodeAt(i)+n-26)
        }
        else
        if(s.charCodeAt(i)+n>90 && s.charCodeAt(i)<91){
         answer[i] = String.fromCharCode(s.charCodeAt(i)+n-26)
        }
        else
        answer[i]= String.fromCharCode((s.charCodeAt(i))+n)
   
    }

    
return answer.join('');
}


test('solution', () => {
    expect(solution('a B z', 4)).toBe("e F d");
    expect(solution('z', 1)).toBe("a");
})