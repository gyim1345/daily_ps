function leastNumber(A,B){
    B = B.sort((a,b) => b-a)
    
    console.log(A.sort((a,b) => a-b).map((a,i) => a * B[i]))
return A.sort((a,b) => a-b).map((a,i) => a * B[i]).reduce((a,b) => a+b)
}

test('leastNumber', () =>{
    expect(leastNumber([1, 4, 2],[5, 4, 4])).toBe(29);
})