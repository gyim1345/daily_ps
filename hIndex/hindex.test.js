// citation안에 있는 것들을 하나씩 
// 돌려서 그 값을 비교해서 그 값보다 같거나 
// 큰것들의 숫자가 자신과 같고 자신보다 작은 
// 것들이 자신보다 작게 있으면 그것을 return 한다

const hindex = (citations) => {
    if(citations.every(x=> x === 0))
    return 0;
    let answer = [];
    let asd = new Array(citations.length).fill();
    asd = asd.map((x,i) => i+1);
    asd.forEach(x =>{
       const maxlength = citations.filter(y => x<=y).length
       const minLength = citations.filter(y => x>=y).length
       console.log(maxlength, minLength)
       if(maxlength>= x && minLength<=x) {
           answer.push(x);
       }
    })
    console.log(answer)
    return Math.max(...answer);
}


test('hindex', () => {
    expect(hindex([3, 0, 6, 1, 5])).toBe(3);
    expect(hindex([3, 4, 6, 1, 5, 7, 2])).toBe(4);
    expect(hindex([3, 4, 6, 1, 5, 7, 2])).toBe(4);
})