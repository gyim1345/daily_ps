const immigrationProcess = (n, times) => {
    let min = 1;
    let max = n * times[times.length - 1];
    while (min <= max) {
        let mid = Math.floor((max + min) / 2)
        let count = 0;

        times.forEach(value => {
            count += Math.floor(mid / value);
        });

        if (count >= n) {
            max = mid - 1;
        }

        if (count < n)
            min = mid + 1;
    }

    return min;
}




//     times.sort((a,b) => a-b);
//     let finalArray = [...times];
//     let array = [];
//     let count = 2;
//     while(count<n) {
//         times.forEach((x,i) => {
//             array.push(x*count);
//         })
//         count += 1;
//     }
//     let sortedArray = array.sort((a,b) => a-b);
//     while(finalArray.length <n){
//         finalArray.push(sortedArray.shift());
//     }

//     return Math.max(...finalArray);
// }


// times.sort((a,b) => a-b);
// console.log(times);
// let array = [];
// let count = 1;
// while(array.length <= n) {
//     times.forEach((x,i) => {
//         array.push(x*count);
//     })
//     count += 1;
// }
// console.log(array)
// console.log(array.sort((a,b) => a-b))
// let answer = array.sort((a,b) => a-b)[n-1];

// return answer;
// }

test('immigrationProcess', () => {
    expect(immigrationProcess(6, [7, 10])).toBe(28);
    expect(immigrationProcess(6, [1, 10])).toBe(6);
    expect(immigrationProcess(6, [1, 5, 10])).toBe(5);

})