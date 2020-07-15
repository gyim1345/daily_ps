const solution = (n) => {
    // let fibo = new Array(n);
    // fibo[0] = 0;
    // fibo[1] = 1;

    // for (let i = 2; i <= n; i++) {
    //     fibo[i] = (fibo[i - 1] + fibo[i - 2]) % 1234567;
    // }

    // return fibo[n];
// }
    return fibo(n);
}

function fibo(number) {


    if(number === 2) {
        return 1;
    }

    if(number === 1) {
        return 1;
    }

    if(number === 0) {
        return 0;
    }

    if(number> 2) {
        return (fibo(number-1) + fibo(number-2))
    }
}


test('solution', () => {
    expect(solution(3)).toBe(2);
    expect(solution(5)).toBe(5);
});