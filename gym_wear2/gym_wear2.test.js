function solution(n, lost, reserve) {
    var answer = 0;
    let array = new Array(n).fill(1,0,n);
    lost.forEach(index => {
        array[index-1] -=1;
    })
    reserve.forEach(index => {
        array[index-1] +=1;
    })

    for(let i = 0; i<n; i++)
    {
        if(array[i] == 0){
            if(array[i-1] ==2 && array[i-1]){
                array[i-1] = array[i-1] -1;
                array[i] = array[i] +1;
            }else
            if(array[i+1] ==2 && array[i+1]){
                array[i+1] = array[i+1] -1 
                array[i] = array[i] +1;
            }
                
            }
            
    }

    
    array = array.map(item => item >0 ? item = 1 : item = 0)

    return array.reduce((a, b) => a + b, 0);
}


test ('solution()', () => {
    expect(solution(5, [2, 4], [1, 3, 5])).toBe(5)
})