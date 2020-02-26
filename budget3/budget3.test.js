function budgetf(d, budget) {
    d.sort((a, b) => a - b);
    console.log(d.reduce((a, b) => (a + b), 0))

    while (d.reduce((a, b) => (a + b), 0) > budget) {
        console.log(d.reduce((a, b) => (a + b), 0))
        d.pop();
        console.log(d)
    }
    return d.length;
}




test('budget', () => {
    expect(budgetf([1,3,2,5,4], 9)).toBe(3);
    expect(budgetf([2,2,3,3], 10)).toBe(4)
})