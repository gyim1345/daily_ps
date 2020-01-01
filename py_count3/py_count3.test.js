function solution(s){
    console.log(s.match(/p/i))
    console.log(s.match(/p/ig))
    if (s.match(/p/ig) === null && s.match(/y/ig) === null)
        return true;
    else if(s.match(/p/ig) === null || s.match(/y/ig) === null)
        return false;
    return s.match(/p/ig).length == s.match(/y/ig).length
}

//


test('solution()', () => {
    expect(solution('pPoooyY')).toBe(true)
})