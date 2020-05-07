// 1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
// 2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 
// 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
// 3. 그렇지 않으면 J를 인쇄합니다.


// ## 계획

// priorities의 최대값을 구한다음에 
// 그 최대값이 나올때 까지 배열의 값들을 위의 조건 처럼 정렬을 한다. 
// 최대값이 맨 처음 것이면 빼주고 카운트를 하나 추가해서 이 작업을 반복을 한다.
// 내가 원하는 문서가 뽑히면 그때 count만큼 반환해준다.

const printer = (priorities, location) => {
    const prioritiess = priorities.map((x,i)=> x = {priority: x, index: i})
    let count = 0;

    while(prioritiess[0]) {
        const max = Math.max(...priorities);
        if(prioritiess[0].priority === max) {
            if(prioritiess[0].index === location ){
                return count +1;
            }
            priorities.shift();
            prioritiess.shift();
            count += 1;
        } else {
            prioritiess.push(prioritiess.shift());
            priorities.push(priorities.shift());
        }
    }

}

test('printer', () =>{
    expect(printer([2,1,3,2], 2)).toBe(1);
    expect(printer([1, 1, 9, 1, 1, 1], 0)).toBe(5);
})