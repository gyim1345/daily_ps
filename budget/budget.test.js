// 를 오름 차순으로 정렬한다.  
// 지원 한 만큼 빼고 지원한 횟수를 따로 저장한다. 

const budget = (d, budget) => {
    
    d.sort((a,b)=> {return a-b})
    let count =0;
    while (budget-d[count]>=0)
    {
        budget = budget - d[count];
        count+=1;
    }
    
    return count
}

test('budget', () => {
    expect(budget([1,3,2,5,4], 9)).toBe(3);
    expect(budget([2,2,3,3], 10)).toBe(4)
})