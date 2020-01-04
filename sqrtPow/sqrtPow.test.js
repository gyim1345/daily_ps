const solution1 = (n) => {
    for(let i = 0; i<=n; i++)
    {   
        if(i*i === n){
        return (i+1)*(i+1)
        }
        if(i == n)
        return -1  
    }
}

const solution2 = (n) => {
   return n % Math.sqrt(n) == 0 ?  Math.pow(Math.sqrt(n) + 1, 2) : -1
  
}


test('solution', () => {
    [solution1, solution2].forEach(solution => { 
        expect(solution(121)).toBe(144);
        expect(solution(3)).toBe(-1);
    });    
})

