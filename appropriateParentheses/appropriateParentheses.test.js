// 스택을 이용한 풀이를 해보자.  

// 하나씩 넣다가 넣은 값이 ) 이고 그전 값이 ( 이면 스택에서 없앤다. 
//     마지막에 스택에 요소가 하나라도 남아 있으면 false 반환 아니면 true 반환.

const appropriateParentheses = (s) => {
    const stack = [];
    const parenthesesArray = s.split("");

    parenthesesArray.forEach((parentheses,i)=> {
        if(parentheses === ')' && stack[stack.length-1] === '('){
            stack.pop();
        } else {

            stack.push(parentheses);
        }
    })
    return stack.length === 0 ? true : false
}

test('appropriateParentheses', () => {
    expect(appropriateParentheses('()()')).toBe(true);
    expect(appropriateParentheses('(()(')).toBe(false);
    expect(appropriateParentheses(')()(')).toBe(false);
    expect(appropriateParentheses('(()(')).toBe(false);
})