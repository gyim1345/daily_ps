function combine(items, numSubItems) {
    var result = [];
    var indexes = new Array(numSubItems);
    for (var i = 0; i < numSubItems; i++) {
        indexes[i] = i;
    }
    while (indexes[0] < (items.length - numSubItems + 1)) {
        var v = [];
        for (var i = 0; i < numSubItems; i++) {
            v.push(items[indexes[i]]);
        }
        result.push(v);
        indexes[numSubItems - 1]++;
        var l = numSubItems - 1; 
        while ((indexes[numSubItems - 1] >= items.length) && (indexes[0] < items.length - numSubItems + 1)) {
            l--; 
            indexes[l]++;
            for (var i = l + 1; i < numSubItems; i++) {
                indexes[i] = indexes[l] + (i - l);
            }
        }
    }
    return result;
}

const primeNumbers = (number) => {
    for (let i = 2; i <= Math.ceil(Math.sqrt(number)); i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

const solution = (nums) => {
    return combine(nums, 3).map(x => x.reduce((a, c) => a + c)).filter(x => primeNumbers(x)).length;
}


// const solution = (nums) => {
//     nums.sort((a,b) => a-b);
//     // let array = findSpecificCombinations(3,Math.pow(2,nums.length));
//     let list = combinations(nums);
//     let sumList = list.filter(x=> x.length === 3).map(x => x.reduce((a,c)=> a+c));
//     return primeNumbers(sumList).length
// }


// const primeNumbers = (sumList) => {
//     for (let i = 2; i <= Math.ceil(Math.sqrt(Math.max(...sumList))); i++) {
//         sumList = sumList.filter(x=> {
//             if(i !== x) {
//                 return x % i !== 0
//             }
//             return x;
//         });
//     }
//     return sumList;
// }
// function combinations(array, n) {
//     let lists = [];
//     let length = 1 << array.length;
//     for (let i = 1  ; i < length; ++i) {
//         let tempList = array.filter((v, index) => {
//             return i >> index & 1 
//         });
//         // if (tempList.reduce((a, c) => a + c) <= n)
//             lists.push(tempList);
//     }
//     return lists;
// }
// // function combinations(array, n) {
// //     let lists = [];
// //     n.forEach(i => {
// //         let tempList = array.filter((v, index) => {
// //             return i >> index & 1
// //         });
// //         lists.push(tempList);
// //     })

// //     return lists;
// // }


// const findSpecificCombinations = (r,total) => {
//     let array = [];
//     for(let i = 1; i < total; i += 1 ) {
//         if(i.toString(2).split("").filter(x => x == 1).length === r) {
//             array.push(i)
//         }
//     }
//     return array
// }

// test('findSpecificCombinations', () => {
//     expect(findSpecificCombinations(3,31)).toEqual([
//         7, 11, 13, 14, 19,
//        21, 22, 25, 26, 28
//      ])
// })

function factorial(x) {
    return (x > 1) ? x * factorial(x - 1) : 1;
}

// i 4 
// tostring(2) 55   11배
// split 75 .3배
// filter 175 2.5배
// test('isPrimeNumber', () => {
//     expect(isPrimeNumber(7)).toBe(true);
//     expect(isPrimeNumber(6)).toBe(false);
//     expect(isPrimeNumber(9)).toBe(false);
// })

test('solution', () => {
    expect(solution([1, 2, 3, 4])).toBe(1);
    expect(solution([1, 2, 7, 6, 4])).toBe(4);
    expect(solution([1, 2, 3])).toBe(0);
});
