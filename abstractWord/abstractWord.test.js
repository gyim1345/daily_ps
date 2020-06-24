// 문자열을 배열로 만든다. 
// 첫번째 요소 부터 문자열이 있는지 확인한다. 
// 없으면 다음 문자열로 넘어간다.
// 있으면 다음 문자열을 포함해서 그 두 요소가 붙어 있는지 확인한다.\
// 반복.... 없을때 까지 확인후 반복횟수만큼 압축한다.
//  위에 말했듯이 반복횟수 + 문자열로 바꾼다.
// 단위 별로 짜를시에만 확인한다. 


const abstractWord = s => {
    for (let i = 1; i <= s.length; i += 1) {
        const result = [];
        let count = 0;
        let duplicate = s.slice(0, i);
        for (let j = 0; j <= s.length; j += i) {
            if (duplicate === s.slice(j, j + i)) {
                count += 1;
            } else {
                let prefix;
                count >= 2 ? prefix = count : prefix = '';
                result.push(prefix.toString().concat(duplicate));
                duplicate = s.slice(j, j + i);
                count = 1;
            }
            if (j + i > s.length) {
                result.push(s.slice(j, s.length));
            }
        }
        answer.push(result.join("").length);
    }
    return Math.min(...answer);
}

//     const range = [...Array(s.length)].map((_, i) => i + 1);
//     console.log(range)
//     console.log(range.map(i => compress(s, i)))
//     return Math.min(...range.map(i => compress(s, i).length));
//   };

//   const compress = (s, n) => {
//     const make = ([a, l, c]) => `${a}${c > 1 ? c : ''}${l}`;
//     return make(
//       chunk(s, n).reduce(
//         ([a, l, c], e) => e === l ? [a, l, c + 1] : [make([a, l, c]), e, 1],
//         ['', '', 0]
//       )
//     );
//   };

//   const chunk = (s, n) =>
//     s.length <= n ? [s] : [s.slice(0, n), ...chunk(s.slice(n), n)];




// const abstract = (s) => {
//     let countArr =[];
//     for(let i = 1; i <2; i++) {
//         let arr = [];
//         let count =0;
//         let exp = "";
//         for(let j =0; j<i; j++) {
//             exp = exp.concat(".");
//         }
//         console.log(exp)
//         let re = new RegExp(exp, 'g');

//         let sArray = s.match(re);
//         console.log(sArray)
//         let duplicateCount = 1;
//         let currentLetter = sArray[0];
//         for(let k = 1; k < sArray.length; k++){
//             console.log(duplicateCount, k, currentLetter, "start")  
//             // console.log(currentLetter, sArray[k], count, duplicateCount)
//             if(currentLetter === sArray[k]) {
//                 duplicateCount += 1;
//                 console.log(duplicateCount, k, currentLetter, "if")  


//             } else {
//                 if(duplicateCount>1) {
//                     count += 1 + exp.length;
//                     // console.log(currentLetter, sArray[k], count, duplicateCount)

//                 } else {
//                     count += exp.length;
//                     console.log(duplicateCount, k, currentLetter, "else")  

//                     // console.log(duplicateCount, currentLetter, "this")
//                     arr.push(duplicateCount.toString().concat(currentLetter));
//                 }
//                 currentLetter = sArray[k];
//                 duplicateCount = 1;
//             }

//             console.log(arr)
//         }
//         countArr.push(count)
//         count += 1 + exp.length;
//     }
//     console.log(countArr)
//     return 7
// }

// test.only('abstract' , () => {
//     expect(abstract("aabbaccc")).toBe("2a2ba3c");
// })

test('abstractWord', () => {
    // expect(abstract("aabbaccc")).toBe(7);
    expect(abstract("ababcdcdababcdcd")).toBe(9);
})