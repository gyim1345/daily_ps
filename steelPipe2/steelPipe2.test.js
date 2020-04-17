const steelPipe = (arrangement) => {
    let count = 0;
    const stack = [];
    arrangement.split('').forEach((e,i)=> {
        if(e === '(') {
            stack.push(e);
        }else if(e === ')' && arrangement[i-1] === '(') {
            stack.pop();
            count = count + stack.length
        }
        else {
            stack.pop();
            count += 1;
        }
    })
    return count;
}


test('steelPipe', () => {
    expect(steelPipe('()(((()())(())()))(())')).toBe(17);
})