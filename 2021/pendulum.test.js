// const solution = function (s) {
//   let string = s.split('')
//   let reversed = s.split('').reverse();

//   if (isPalindrome(s)){
//     return s.length;
//   }

//   for (let i = 0, n = string.length - 1; i < n; i++) {
//       let joined = reversed.slice(0, i + 1).concat(string).join('');
//       console.log(joined)
//       if (isPalindrome(joined)) {
//           return joined.length;
//       }
//   }
// };

// const isPalindrome = function (str) {
//   let string = str.split('');
//   for (let i = 0, n = Math.floor(string.length / 2); i < n; i++) {
//       if (string[i] !== string[string.length - i - 1]) {
//           return false;
//       }
//   }
//   return true;
// };


// const solution = (plain) => {
//   let answer = plain;
//   let temp = '';
//   let even = 0;
//   plain.length % 2 === 0 ? '' : even = 1;
//   console.log(even, plain.length)
//   for(let i = plain.length -1 - even; i >= 0; i --) {
//     if(isPalindrome(answer + temp)) {
//       console.log(temp + answer)

//       return (temp + answer).length;
//     }
//     // if(plain[i] === plain[i - 1]) {
//     //   continue;
//     // }
//     temp += plain[i];
//     console.log(temp)
//   }
//   console.log(temp + answer)
//   return (temp + answer).length;
// }

const solution = (plain) => {
  let answer = plain;
  let temp = '';
  for(let i = 0; i < plain.length; i ++) {
    if(isPalindrome(answer + temp, temp.length)) {
      return (answer + temp).length;
    }

    temp = plain[i] + temp;
  }
  return (temp + answer).length;
}



const isPalindrome = (string, length) => {
  for(let i = length; i < string.length/2; i ++) {
    if(string[i] !== string[string.length -i -1]) {
      return false;
    }
  }
  return true;
}

// test.only('solution', () => {
//   expect(isPalindrome('abab')).toBe(false);
//   expect(isPalindrome('ababb')).toBe(false);
//   expect(isPalindrome('babab')).toBe(true);
// });


test('solution', () => {
  expect(solution('abab')).toBe(5);
  expect(solution('abcd')).toBe(7);
  // expect(solution('abcde')).toBe(9);
  expect(solution('aaacecaa')).toBe(9);
  expect(solution('abeee')).toBe(7);
});