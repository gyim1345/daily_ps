const solution = (arr1,arr2) => {

    let answer = new Array(arr1.length).fill(0);
    answer = answer.map(() => new Array(arr2[0].length).fill(0));

    for(let i = 0; i < arr2.length; i++ ) {
        for(let j = 0; j < arr1.length; j++ ) {
            for(let k = 0; k < arr2[0].length; k++ ){
                answer[j][k] += arr1[j][i] * arr2[i][k];
            }
        }
    }

    return answer;
}

// let answer = new Array(arr1.length).fill(0);
// answer = answer.map(() => new Array(arr2[0].length).fill(0));

// for(let i = 0; i < arr1.length; i++ ) {
//     for(let j = 0; j < arr2[0].length; j++ ) {
//         for(let k = 0; k < arr2.length; k++ ){
//             answer[i][j] += arr1[i][k] * arr2[k][j];
//         }
//     }
// }

// return answer;
// }


// const result = [...Array(arr1.length)].map(() => Array(arr2[0].length).fill(0));
//   for (let row = 0; row < arr1.length; row += 1) {
//     for (let col = 0; col < arr2[0].length; col += 1) {
//       for (let i = 0; i < arr2.length; i += 1) {
//         result[row][col] += arr1[row][i] * arr2[i][col];
//       }
//     }
//   }
//   return result;
// }

test('solution', () => {
    expect(solution([[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]])).toEqual([[15, 15], [15, 15], [15, 15]]);
    expect(solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]], [[5, 4, 3], [2, 4, 1], [3, 1, 1]])).toEqual([[22, 22, 11], [36, 28, 18], [29, 20, 14]]);
});