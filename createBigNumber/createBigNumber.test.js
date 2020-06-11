function createBigNumber(number, k) {

    let b = [];
    console.log(number.length)
    for (let i = 0; i < number.length; i++) {
        let c = number[i];
        console.log(number, number[i]);
        while (k > 0 && b.length > 0 && b[b.length - 1] < c) {
            b.pop();
            k--;
        }
        b.push(c);
    }

    b.splice(b.length - k, k);
    let answer = b.join('');
    return answer;
}

// let arrNumbers = number.split("");
// let set = new Set(arrNumbers);
// if(set.size === 1) {
//     return arrNumbers.slice(0,arrNumbers.length-k).join("")
// }
// let checkLength = k;
// let looplength = arrNumbers.length;
// for( let i  =0; i < looplength; i ++) {
//     if(checkLength == 0){
//         break;
//     }
    
//     for(let j = i+1; j<= k+i; j++){
//         if(j-i <= k ) {
//             if(arrNumbers[i]<arrNumbers[j]){
//                 arrNumbers.splice(i,1);
//                 i--;
//                 looplength--;
//                 k = k-1;
//                 break;
//             }

//         } 
//     }
// }
// return arrNumbers.slice(0,arrNumbers.length-k).join("")
// }


test('createBigNumber', () => {
    expect(createBigNumber("1924",2)).toBe("94");
    // expect(createBigNumber("1231234",3)).toBe("3234");
    // expect(createBigNumber("4177252841",4)).toBe("775841");
    // expect(createBigNumber("77777776",2)).toBe("777777");
})