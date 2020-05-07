// 배열의 오른쪽 부터 pop을 해서 heights에서 역순으로 
// 자신 보다 큰 값이 있는 지 확인을 한다

// - 그 확인 한 값의 index를 반환한다. 


const top = (heights) => {
    const finalstack = [];
    while(heights[0] !== undefined) {
        
        const currentTop = heights.pop();
        const height = heights.map((x,i) => x= {value: x, index: i})
        const higherTop = height.filter(x => x.value > currentTop);
        const lastTop = higherTop.pop()
        if(lastTop !== undefined) {
            finalstack.push(lastTop.index+1);
        } else {
            finalstack.push(0);
        }
        
    }
    return finalstack.reverse();
}

test('top', () => {
    expect(top([6,9,5,7,4])).toEqual([0,0,2,2,4]);
})