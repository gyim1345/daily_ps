function solution(n, lost, reserve) {
    var answer = 0;

    let array1 = new Array(n);
    lost.sort(sortNumber);
    reserve.sort(sortNumber);
    array1 = array1.fill(1,0,n)
    let lostIndex =0;
    let reserveIndex =0; 
    for(let i =0; i<n; i++)
    {  
      
        if( lost[lostIndex] == i+1 && lost[lostIndex] !== null){
          
        array1[i] = Number(array1[i]-1);
        lostIndex++;    
        }

        if(reserve[reserveIndex] == i+1 && reserve[reserveIndex] !== null){
     
            array1[i] = Number(array1[i]+1);
            reserveIndex++;
        }
        
    }


    for(let i = 0; i<n; i++)
    {
        if(array1[i] == 0){
            if(array1[i-1] ==2 && array1[i-1] !== null){
                array1[i-1] = array1[i-1] -1;
                array1[i] = array1[i] +1;
            }else
            if(array1[i+1] ==2 && array1[i+1] !== null){
                array1[i+1] = array1[i+1] -1 
                array1[i] = array1[i] +1;
            }
                
            }
            
    }


    array1 = array1.map(item => item >0 ? item = 1 : item = 0)

    return array1.reduce((a, b) => a + b, 0);
}

function sortNumber(a, b) {
    return a - b;
}

test('solution()', () => {
    // expect(solution(5 , [1,3,4,5], [2] ) ).toBe(2)
    // expect(solution(3 , [3], [1] ) ).toBe(2)
    // expect(solution(5 , [2, 4], [3] ) ).toBe(4)
    // expect(solution(10 , [2, 4,5,6,9], [1, 5,6,7] ) ).toBe(8)
    // expect(solution(3 , [1,2,3], [1,2,3] ) ).toBe(3)
    // expect(solution(2 , [1], [2] ) ).toBe(2)
    expect(solution(2 , [2], [1, 2] ) ).toBe(2)
    // expect(solution(1 , [], [1,2,3] ) ).toBe(3)
    // expect(solution(30 , [27,28], [30] ) ).toBe(28)
    // expect(solution(25, [12,23,25], [12,24])).toBe(24)
})

// 1, 0, 1, 0, 1, 1, 2, 1, 0, 1