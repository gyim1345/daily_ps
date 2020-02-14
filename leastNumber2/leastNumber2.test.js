const leastNumber = (a,b) =>{
  a.sort(function(a, b) { 
    return a - b;
  });
  b.sort(function(a, b) { 
    return b - a;
  });
        
  let array = Array(a.length).fill()
    .map((v,i) => v = a[i]*b[i])
    .reduce((a, b) => a + b, 0)        
  
  return array;
}
    
test('leastNumber', () =>{
    expect(leastNumber([1, 4, 2],[5, 4, 4])).toBe(29);
})