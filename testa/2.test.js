const solution = (n) => {

    let pow = [];
    let count = 0;

    while (Math.pow(3, count) <= 35) {
        pow.push(Math.pow(3, count));

        count += 1;
    }

    let combinationResult = combinations(pow, 10000).map(x => {
        return x.reduce((a, b) => a + b);
    });

    return combinationResult[n - 1]
}

function combinations(array, n) {
    let lists = [];
    let length = 1 << array.length;
    for (let i = 1  ; i < length; ++i) {
        let tempList = array.filter((v, index) => {
            return i >> index & 1 
        });
        // if (tempList.reduce((a, c) => a + c) <= n)
            lists.push(tempList);
    }
    return lists;
}
// function getCombinations(chars) {
//     var result = [];
//     var f = function(prefix, chars) {
//       for (var i = 0; i < chars.length; i++) {
//         result.push(prefix + chars[i]);
//         f(prefix + chars[i], chars.slice(i + 1));
//       }
//     }
//     f('', chars);
//     return result;
//   }


test('solution', () => {
    expect(solution(4)).toBe(9);
})