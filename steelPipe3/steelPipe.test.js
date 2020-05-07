// arrangemnet를 배열로 만들고 들어 오는것 마다 스택에 쌓는다. 
// 스택에 넣다가 다음 값이 ) 가 나오면 스택에 쌓은 만큼 카운트를 
// 더해준다. ) 가 나오면 카운트에 +1 을 해준다.


const steelPipe = (arrangement) => {
   const arrangementArr = arrangement.split('');
    const stack = [];
    let count = 0;
    let index =0;
    while (arrangementArr[index]) {
        if(arrangementArr[index] === '(' && arrangementArr[index+1] === ')') {
            count += stack.length;
            index += 2;
        } else if(arrangementArr[index] === '(' ) {
            stack.push('(');
            index += 1;
        } else if (arrangementArr[index] === ')') {
            count += 1;
            stack.pop();
            index += 1;
        }
    }
    return count;
}




test('steelPipe', () => {
    expect(steelPipe('()(((()())(())()))(())')).toBe(17);
})