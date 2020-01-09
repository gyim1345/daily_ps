// - 계획
//   - 들어오는지 확인한다
//   - 왼쪽 탑 부터 시작해서 다른 탑이랑 비교해서 왼쪽에서 제일 가까이 있는 왼쪽보다 큰것의 index를 돌려준다.
//   - 돌려준 index들을 반환한다.
function solution(heights) {
    const value = [];
    for (let i = heights.length-1; i>= 0; i--)
    {
        for (let j = i; j>=0; j--)
        {   
            if(heights[i] < heights[j]){
                value.push(j+1)
                break;
            }
            else{
                if(j == 0)
                value.push(0)
            }
        }
      
    }   
    return value.reverse();
}


test ('solution', () => {
    expect(solution([3,9,9,3,5,7,2])).toEqual([0,0,0,3,3,3,6]);
})