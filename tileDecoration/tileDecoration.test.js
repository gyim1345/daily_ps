const solution = (n) => {
    return (getFibonacci(n) +  getFibonacci(n+1)) * 2;
}

const getFibonacci = (n) => {
    if (n === 1 || n === 2) {
        return 1;
    }

    let previous = 1;
    let next = 1;
    let tempt

    for (let i = 0; i < n - 2; i +=1 ) {
        tempt = next;
        next = previous + next;
        previous = tempt;
    }

    return next;
};

test('getFibonacci', () => {
    expect(getFibonacci(7)).toBe(13);
    expect(getFibonacci(5)).toBe(5);
});

test('solution', () => {
    expect(solution(5)).toBe(26);
});