const solution = (n) => {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        let sum = 0;
        let incline = i;
        while (sum < n) {
            if (sum + incline <= n) {
                sum += incline;
            }
            console.log(sum)
            incline += 1;
            if (sum === n) {
                count += 1;
                console.log(sum, count, "count")
                break;
            }
            if (sum + incline > n) {
                break;
            }
        }
    }
    return count;
}


test('solution', () => {
    expect(solution(15)).toBe(4);
});