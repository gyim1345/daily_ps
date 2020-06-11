function createBigNumber(number, k) {
    let numberArray = number.split("");
    let stack = [];
    for (let i = 0; i < numberArray.length; i++) {
          while (k > 0 && stack.length > 0 && stack[stack.length - 1] < numberArray[i]) {
            stack.pop();
            k -= 1;
        }
        stack.push(numberArray[i]);
    }
    return stack.splice(0, stack.length - k).join("")
}

test('createBigNumber', () => {
    expect(createBigNumber("1924", 2)).toBe("94");
    expect(createBigNumber("1231234", 3)).toBe("3234");
    expect(createBigNumber("4177252841", 4)).toBe("775841");
    expect(createBigNumber("77777776", 2)).toBe("777777");
})