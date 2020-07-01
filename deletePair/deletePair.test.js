function solution(s) {
    const sArray = s.split("");
    let stack = [];
    for (let i = 0; i < sArray.length; i += 1) {

        if (stack[0] && stack[stack.length - 1] === sArray[i]) {
            stack.pop();
        } else {
            stack.push(sArray[i]);
        }
    }
    return stack[0] ? 0 : 1
}