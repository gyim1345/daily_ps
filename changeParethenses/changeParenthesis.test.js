const solution = (p) => {
    if(p === '') {
        return '';
    }
    const [u,v] = splitStringToArrayUV(p);

    if(checkRightfulness(u)) {
        return  u + solution(v);
    } else {
        return "(" + solution(v) + ")" + modifiedU(u);
    }
    
}  

const modifiedU = (string) => {
    string = string.substring(1,string.length-1);
    
    string = string.split('').map(x=> {
        if(x === "(") {
            return ")"
        }
        return "("
    }).join("");
    return string;
}
    
const checkRightfulness = (parenthesis) => {
    // const stack = [parenthesis[0]];
    // for(let i = 1;  i < parenthesis.length; i += 1) {
    //     if(stack[stack.length-1] === '(' && parenthesis[i] === ')') {
    //         stack.pop();
    //     }else {
    //         stack.push()
    //     }
    // }
    // return !stack[0];
    return (parenthesis[0] === "(" && parenthesis[parenthesis.length-1] === ")")
}

const splitStringToArrayUV = (string) => {
    let countL = 0;
    let countR = 0;
    for(let i = 0; i < string.length; i += 1) {
        if(string[i] === '(') {
            countL += 1;
        } else {
            countR += 1;
        }
        
        if(countL === countR) {
            return [string.substring(0,i+1), string.substring(i+1)];
        }
    }
}   

test('modifiedU', () => {
    expect(modifiedU("())()(((")).toBe("(()())");
})
    
test('checkRightfulness', () => {
    expect(checkRightfulness("))((")).toBe(false);
    expect(checkRightfulness("(())")).toBe(true);
    expect(checkRightfulness("(())()")).toBe(true);
    expect(checkRightfulness("()(())()")).toBe(true);
})

test('splitStringToArrayUV', () => {
    expect(splitStringToArrayUV("()))((()")).toEqual(["()","))((()"]);
    expect(splitStringToArrayUV(")(")).toEqual([")(",""]);
})

    test('solution', () => {
        expect(solution("(()())()")).toBe("(()())()");
        expect(solution(")(")).toBe("()");
        expect(solution("()))((()")).toBe("()(())()");
        expect(solution(")()()()(")).toBe("(((())))");
    });









//     let a = p.split('');
//     let b = a.map((v,i) => v = {v,i} );

//     let stack = changeParaenthesis(b);
//     while(stack[0]) {
//         stack = reverseParenthesis(stack,b);
//         stack = changeParaenthesis(stack);
//     }

//     let c = b.map((v)=> v = v.v).join("");

//     let d = c.split("");

//     let stack1 = [];


//     return b.map((v)=> v = v.v).join("");
// }

// const change = (c) => {
    
// }

// const reverseParenthesis = (stack,b) => {
//     for(let i = 1; i<stack.length; i += 1) {
//         if(stack[i-1].v === ")" && stack[i].v === "(") {
//             b[stack[i].i].v = ")";
//             b[stack[i-1].i].v = "(";
//             i += 1;
//         }

//     }
//     return stack
// }


// const changeParaenthesis = (b) => {
//     let stack = [b[0]];
//     for(let i = 1; i < b.length; i += 1 ) {
//         if(stack[0]) {
//             if(stack[stack.length-1].v === "(" && b[i].v === ")") {
//                 stack.pop();
//             }else {
//                 stack.push(b[i]);
//             }
//         }
//         else {
//             stack.push(b[i]);
//         }
//     }
//     return stack;
// }
