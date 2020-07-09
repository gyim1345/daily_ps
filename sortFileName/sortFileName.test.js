const solution = (n, t, m, p) => {
        let array = [];
    
        for(let i = 0; i < m * t; i += 1){
            i.toString(n).split("").forEach((x,i)=> {
                array.push(x.toUpperCase())
            });
            if(array.length >= t * m){
                break;
            }
        }
    
        let array2 = [];
    
        for(let i = p-1; p < array.length; i += m){
            if(array2.length === t) {
                break;
            }
            array2.push(array[i]);
        }
        return array2.join(""); 
    }
    
    


test('solution', () => {
    expect(solution(2,4,2,1)).toBe("0111");
    expect(solution(16,16,2,1)).toBe("02468ACE11111111");
    
});