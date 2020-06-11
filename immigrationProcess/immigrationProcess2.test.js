// 최소치와 최대치를 구해서 거기서 2진탐색을 한다.

// 2진 탐색을 할때 최소 최대치의 중간을 기점으로 times 
//안에 값을 중간 값보다 작을때 까지 count를 숫자를 해서 n 보다 크면 min을 mid로. 
// count가 n보다 작으면 max를 mid 값으로.

// 오름 차순으로 times를 해서 구해보자


const immigrationProcess = (n, times) => {
    let min = 0;
    let max = times[times.length - 1] * n;
    
    while (min<=max) {
        let mid = Math.floor((max + min) / 2);
        let count = 0;
    
        times.forEach(x => {
            count += Math.floor(mid / x);
        })
    
        if (count >= n) {
            max = mid-1;
        }
    
        if (count < n) {
            min = mid+1;
        }
    }
    return min;
    }


test('immigrationProcess', () => {
    expect(immigrationProcess(6, [7, 10])).toBe(28)
    expect(immigrationProcess(12, [1, 3, 4, 7, 10])).toBe(8)
    expect(immigrationProcess(3, [2,3,4])).toBe(4)
    expect(immigrationProcess(43, [2,3,4])).toBe(40)
})


// +1 6
// 0 9
// -1 1,2

// min 2,6, 9