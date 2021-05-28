const solution = (array) => {
    return array.map(number => {
        const binaryNumber = number.toString(2);
        if(checkAllOne(binaryNumber)) {
            return parseInt('10' + binaryNumber.substring(1),2);                
        }
        const firstZeroIndex = binaryNumber.lastIndexOf('0');
        if(firstZeroIndex === binaryNumber.length -1) {
            return parseInt(binaryNumber.substring(0, binaryNumber.length -1) + '1',2);
        }
        return parseInt(binaryNumber.substring(0,firstZeroIndex) +'10' + binaryNumber.substring(firstZeroIndex+2),2);
    })
};




// const solution = (array) => {

//     const binaryObject = {};

//     return array.map(number => {
//         const binaryNumber = number.toString(2);
//         for(let i = number + 1; i < Math.pow(10,15); i++) {
//             if(!binaryObject[i]) {
//                 binaryObject[i] = i.toString(2);
//             }
//             const nextBinaryNumber = binaryObject[i];
//             if(checkAllOne(nextBinaryNumber)) {
//                 console.log(nextBinaryNumber.substring(1), nextBinaryNumber)
//                 return parseInt('10' + nextBinaryNumber.substring(1),2);                
//             }
//             const isMatch = checkMatch(binaryNumber.split('').reverse().join(''), nextBinaryNumber.split('').reverse().join(''));
//             if(isMatch) {
//                 return i;
//             }
//         }
//     })
// };

const checkAllOne = (stringNumber) => {
    return !stringNumber.split('').filter(string => string !== '1').length;
}

// const checkMatch = (sourceStringBinaryNumber, targetStringBinaryNumber) => {
//     let matchCount = 0;
//     let index = 0;
//     while(matchCount <= 2 && index < targetStringBinaryNumber.length) {
//         if(targetStringBinaryNumber[index] !== sourceStringBinaryNumber[index]) {
//             matchCount += 1;
//         }
//         index ++;
//     }
//     if(matchCount <= 2) {
//         return true;
//     }
//     return false
// }


test('solution', () => {
  expect(solution([2,7, 293])).toEqual([3,11, 294]);
});