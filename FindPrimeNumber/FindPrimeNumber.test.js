// 문자열을의 모든 조합을 구한후에

// 배열에 저장하는데 그 배열에 값이 저장 되어 있지 않을 시에만 저장한다.

// 그리고 저장한 배열들의 소수를 찾는다.

// function solution(numbers) {
//     var answer = 0;
//     var set = new Set();
//     makeNumbers(set , '' , numbers.split(''));
//     return set.size;
// }
// function issosu(num) {
//     if( num < 2) return false;
//     for (var i =2; i <= num / 2 ; i++) {
//         if( num % i === 0) return false;
//     }
//     return true;
// }
// function makeNumbers(set , cur, nums) {
//     if( nums.length === 0 ) return;
//     console.log(nums,'a')
//     var clone = nums.slice().reverse();
//     console.log(clone)
//     nums.forEach(function(i) {
//         var su = clone.pop();
//         var num = Number(cur+su);
//         if ( issosu(num)) {
//             set.add(num);
//         }
//         makeNumbers(set, cur+su , clone);
//         clone.unshift(su);
//     }) 
// }





const primeNumber = (numbers) => {
    const array = numbers.split('');
    // findCombination(array)
    const combination = [];
    let splitNumber = numbers.split('');
    console.log(splitNumber, 'aaaa')
    array.sort((a, b) => {
        return b - a
    })
    console.log(array)
    for (let i = 2; i <= array.join(''); i += 1) {
        if (i.toString().split('').every(el => array.includes(el))) {
            console.log(i);
            combination.push(i);
        }
    }
    console.log('1'.split(''))
    const zzz =[];
    splitNumber.forEach(number=> {
        combination.map(x=>{ 
            let y = x.toString().split('');
            console.log(y,'aaaaaaaaasdasd')
            y[y.findIndex(z=> z === number)] = ''
            console.log(y,'a');
            zzz.push(y);d
            return y
        }          )
        console.log(combination, 'combination')
    
        })
        console.log(zzz,'zzzzzzzzzzz');
        // splitNumber[splitNumber.findIndex(y=> y === x)] = '';

    console.log(combination)

    return 3;
}

// const findCombination = (array) => {
//     const combination = [];
//     const set = new Set();   
//     array.sort((a,b) =>{
//         return b-a
//     })

//     console.log(array.join(''));


//     return [7,17,71];
// }


// test('combination', ()=> {
//     expect(findCombination([1,7])).toEqual([7,17,71]);
// })

test('primeNumber', () => {
    expect(primeNumber('17')).toBe(3);
})