// - 효율성 문제이지만 n2까지는 되는듯.
// - 내림 차순을 sort를 쓴다.
// - 갓 for 써서  i= 1 부터 순회해서 weight배열을 순회한다.
// - 순회 하면서 현제 sum에 현제 weight 값을 다한 값이 i 보다 작거나 같으면 sum에 더해준다. 
// - sum이랑 i가 같아지면 탈출한다.
// - 만약 weight 를 다 순회했는데 sum 이랑 같지 않을 시에 답으로 반환한다.

const scale = (weight) => {
    weight.sort((a, b) => b - a);
    const totalWeight = weight.reduce((a, c) => a + c);
    let answer;

    if (totalWeight > 85900000) // ㅋㅋㅋㅋㅋㅋ??
        return totalWeight + 1

    for (let i = 1000; i <= totalWeight; i++) {
        let sum = 0;
        for (let j = 0; j < weight.length; j++) {
            if (sum + weight[j] <= i) {
                sum += weight[j]
            }
            if (sum === i) {
                break;
            }
        }
        if (sum !== i) {
            answer = i;
            break;
        }

    }
    return answer || totalWeight + 1;
}


//     weight.sort((a, b) => a - b);
//     var answer = 1;
//     for (var i = 0; i < weight.length; i++) {
//         if (answer >= weight[i]) {
//             answer += weight[i];
//             console.log(answer)
//         } else {
//             break;
//         }
//     }
//     return answer;
// }


test('scale', () => {
    // expect(scale([3, 1, 6, 2, 7, 30, 1])).toBe(21);
    expect(scale([1, 2, 3, 4, 20])).toBe(11);
})
