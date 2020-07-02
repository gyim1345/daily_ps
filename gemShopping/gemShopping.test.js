const solution = (gems) => {
    const gemVarietyCounts = new Set(gems).size;
    const gemMap = new Map();
    const gemLengths = [];

    gems.forEach((gem, i) => {
        gemMap.delete(gem);
        gemMap.set(gem, i);
        if (gemMap.size === gemVarietyCounts) {
            gemLengths.push([gemMap.values().next().value + 1, i + 1])
        }
        console.log(gemMap)
    })

    gemLengths.sort((a, b) => {
        if ((a[1] - a[0]) === (b[1] - b[0])) {
            return a[1] - b[1];
        }
        return (a[1] - a[0]) - (b[1] - b[0])
    });

    return gemLengths[0]
}

// const solution = (gems) => {
//     const gemVarietyCounts = new Set(gems).size;
//     let stack = [];
//     let tempStack = [];
//     let count = 1;

//     let setStack = new Set(stack)

//     for (let i = 0; i < gems.length; i++) {
//         if (stack[0] === gems[i]) {
//             stack.shift()
//             count += 1;
//         }
//         let temppStack = [];
//         while(temppStack.length<stack.length) {
//             temppStack.push(stack.pop());
//             while(temppStack.includes(stack[0])){
//                 stack.shift();
//                 count += 1;
//             }
//         }
//         stack = [...stack, ...temppStack.reverse()];

//         stack.push(gems[i]);
//         setStack.add(gems[i]);
//         console.log(stack, "count" , count, count + stack.length - 1, i)
//         if (setStack.size >= gemVarietyCounts) {
//             tempStack.push([count, count + stack.length - 1])
//         }

//     }

//     tempStack.sort((a, b) => {
//         return (a[1] - a[0]) - (b[1] - b[0]);
//     })
//     console.log(tempStack)
//     return tempStack[0]
// }

test('solution', () => {
    expect(solution(
        ["DIA", "RUBY", "RUBY",
            "DIA", "DIA", "EMERALD",
            "SAPPHIRE", "DIA"
        ])).toEqual([3, 7]);

    // expect(solution(["a", "b", "e", "c", "b", "a", "a", "c", "d"])).toEqual([3, 9])

    // expect(solution(
    //     ["a", "b", "b", "c", "a", "b"])
    //     ).toEqual([3, 5])


    //     expect(solution(
    //         ["a", "b", "b", "c", "c", "b","b","b","b", "c", "b", "c", "a", "b", "c", "c", "a"])
    //         ).toEqual([11, 13])



    // expect(solution(
        // ["AA", "AB", "AC", "AA", "AC"])).toEqual([1, 3]);

    // expect(solution(
    //     ["XYZ", "XYZ", "XYZ"])).toEqual([1, 1]);

    // expect(solution(
    //     ["ZZZ", "YYY", "NNNN", "YYY", "BBB"])).toEqual([1, 5]);
});