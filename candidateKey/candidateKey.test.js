const solution = (relation) => {
    const newRelation = relation.map(key => key.slice(0));
    let count = 0;
    let candidateKeys = [];
    for (let i = 0; i <= newRelation[0].length; i += 1) {
        let savedArray = [];

        for (let j = 0; j < newRelation.length; j += 1) {
            let a = combine(newRelation[j], i);
            savedArray.push(a);
        }


        const reversedArray = reverseIndex(savedArray);
        const newSet = [];

        reversedArray.forEach(array=> {
            newSet.push(removeDuplicateArrayFromArrays(array));
        })


        reversedArray.forEach((array,i)=> {
            if(array.length === newSet[i].length){
                if(isNotIncluded(array, candidateKeys)) {
                    array.forEach(arr=> {
                        candidateKeys.push(arr);
                    })
                    count += 1;
                }
            }
        })
    }
    return count;
}

const isNotIncluded = (array , candidateKeys) => {
    let notIncluded = true;
    for(let j = 0; j < array.length; j += 1) {

        for(let i = 0; i < candidateKeys.length; i += 1) {
            if(candidateKeys[i].every((word, index) => word === array[j][index])) {
                notIncluded = false;
                break;
            }
        }

        if(!notIncluded) {
            break;
        }

    }
    return notIncluded;
}

const removeDuplicateArrayFromArrays = (arrays) => {
    let newArray = [];

    for (let i = 0; i < arrays.length; i += 1) {
        let currentArray = arrays[i];
        let has = false;

        for (let j = 0; j < newArray.length; j += 1) {
            if (newArray[j].every((word, wordIndex) => word === currentArray[wordIndex] )) {
                has = true;
            }
        }
        if(!has){
            newArray.push(currentArray);
        }
    }

    return [...newArray];
}


const reverseIndex = (array) => {
    let newArray = Array(array[0].length).fill().map(x => x = Array(array.length).fill());
    newArray = newArray.map((x, i1) => {
        return x.map((y, i2) => array[i2][i1]);
    })
    return newArray
}

const combine = (items, combinationCount) => {
    let result = [];
    let indexes = new Array(combinationCount);
    for (let i = 0; i < combinationCount; i++) {
        indexes[i] = i;
    }
    while (indexes[0] < (items.length - combinationCount + 1)) {
        let temp = [];
        for (let i = 0; i < combinationCount; i += 1) {
            temp.push(items[indexes[i]]);
        }
        result.push(temp);
        indexes[combinationCount - 1] += 1;
        let countIndex = combinationCount - 1;
        while ((indexes[combinationCount - 1] >= items.length) && (indexes[0] < items.length - combinationCount + 1)) {
            countIndex -= 1;
            indexes[countIndex] += 1;
            for (let i = countIndex + 1; i < combinationCount; i += 1) {
                indexes[i] = indexes[countIndex] + (i - countIndex);
            }
        }
    }
    return result;
}


test('isNotIncluded', () => {
    expect(isNotIncluded(
        [
            [ 'ryan', 'music', '2' ],
            [ 'apeach', 'math', '2' ],
            [ 'tube', 'computer', '3' ],
            [ 'con', 'computer', '4' ],
            [ 'muzi', 'music', '3' ],
            [ 'apeach', 'music', '2' ]
          ],
        [
            [ 'ryan', 'music' ],
            [ 'apeach', 'math' ],
            [ 'tube', 'computer' ],
            [ 'con', 'computer' ],
            [ 'muzi', 'music' ],
            [ 'apeach', 'music' ],
          ]
    )).toBe(false);
});



// const removeRepetitiveArrays = (arrays) => {
//     let newArray = [];
//     arrays.forEach((array, i) => {
//         let count = 0;
//         for (let k = 0; k < arrays.length; k += 1) {
//             if (array.every((word, i2) => word === arrays[k][i2]))
//                 count += 1;
//         }
//         console.log(count,array)
//         if(count === 1) {
//             newArray.push(array)
//         }
//     })
//     console.log(newArray)
// }

test('removeDuplicateArrayFromArrays', () => {
    expect(removeDuplicateArrayFromArrays([
        ['music', '2'],
        ['math', '2'],
        ['computer', '3'],
        ['computer', '4'],
        ['music', '3'],
        ['music', '2']
    ])).toEqual([
        ['music', '2'],
        ['math', '2'],
        ['computer', '3'],
        ['computer', '4'],
        ['music', '3'],
    ])
});



test('solution', () => {
    expect(solution([["100", "ryan", "music", "2"], ["200", "apeach", "math", "2"], ["300", "tube", "computer", "3"], ["400", "con", "computer", "4"], ["500", "muzi", "music", "3"], ["600", "apeach", "music", "2"]])).toBe(2);
    expect(solution([["a","b","c"], ["1","b","c"], ["a","b","4"], ["a","5","c"]])).toBe(1);
    expect(solution([["a","1","4"], ["2","1","5"], ["a","b","4"], ["a","2","4"]])).toBe(2);
    


});

