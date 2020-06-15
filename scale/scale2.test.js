const scale = (weight) => {
    weight.sort((a, b) => a - b);
    let answer = 1;
    for (let i = 0; i < weight.length; i++) {
        if (answer >= weight[i]) {
            answer += weight[i];
            console.log(answer)
        } else {
            break;
        }
    }
    return answer;
}


test('scale', () => {
    expect(scale([3, 1, 6, 2, 7, 30, 1])).toBe(21);
    expect(scale([1, 2, 3, 4, 20])).toBe(11);
    expect(scale([1, 3])).toBe(2);
    expect(scale([ 2, 3, 4, 20])).toBe(1);
    expect(scale([ 1, 1, 1, 1, 1, 1, 20])).toBe(7);
})
