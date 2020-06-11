
const govBudget = (budgets, M) => {
    budgets.sort((a,b)=> a-b);
    let min = 0;
    let max = Math.max(...budgets);
    let mid;
    let answer;

    
    
    while (true) {
         mid = Math.ceil((max + min) / 2);
        
         let sum = budgets.reduce((acc, cur) => {
            if (cur >= mid) {
                return acc + mid;
            } else {
                return acc + cur;
            }
        },0)
        
        
        
        if(mid == answer){
            answer = mid;
            break;
        }

        if(sum >=M) {
            answer = mid;
            max = mid-1;
        } else {
            answer = mid;
            min = mid+1;
        }
        
      
    }
    
    return answer-1
}


test('govBudget', () => {
    expect(govBudget([120, 110, 140, 150], 485)).toBe(127);
    // expect(govBudget([ 3, 4, 5, 6, 222, 333, 444], 555)).toBe(178)
    expect(govBudget([ 3, 4, 5, 6, 7, 8, 9, 10], 53)).toBe(10);
    expect(govBudget([ 3, 4, 5, 6, 7, 8, 9, 10], 48)).toBe(9);
})
