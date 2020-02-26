const budgetf = (d, budget) => {
    d.sort((a,b)=> a-b);

    return step(d, budget, 0);
}

const step = (d, budget, count) => {
    if(budget - d[count] < 0 || count >= d.length) {
        return count;
    }
    
    return step(d, budget - d[count], count + 1)
};

// const budgetf = (d, budget, count = 0) => {
//     if( count === 0 )
//       d.sort((a,b)=> {return a-b})

//     if(budget - d[count]<0 || count >= d.length)
//     return count
    
//     return budgetf(d, budget - d[count], count+1)
 
// }





test('budget', () => {
    expect(budgetf([1,3,2,5,4], 9)).toBe(3);
    expect(budgetf([2,2,3,3], 10)).toBe(4)
})