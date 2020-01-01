function solution(s){
    // s = s.toLowerCase().split('');
    // let count = 0;
    // for(let i = 0; i<s.length; i++){
    //     if(s[i] === 'p')
    //     count += 1;
    //     else if(s[i] === 'y')
    //     count += -1;
    // }

    console.log(s.toUpperCase().split("P"));
    console.log(s.toUpperCase().split("P").length);
    console.log(s.toUpperCase().split("Y"));
    console.log(s.toUpperCase().split("Y").length);

    
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}

test('solution', () => {
    expect(solution('pPoooyY')).toBe(true);
    // expect(solution('Pyy')).toBe(false);
})