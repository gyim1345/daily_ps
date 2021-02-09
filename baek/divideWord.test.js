const solution = (string) => {
  let count = 2;
  let answer = '';
  let index = 0;
  for(let i = 0; i < 2; i ++) {
    let startIndex = index;
    for(let j = startIndex; j < string.length - count; j ++) {
      if(string[index] > string[j]) {
        index = j;
        continue;
      }
      if(string[index] === string[j]) {
        const a = string.substring(startIndex,index + 1).split('').reverse().join('');
        const b = string.substring(startIndex,j + 1).split('').reverse().join('');
        a.localeCompare(b) > 0 ? index = j : index;
      }
    }
    answer += string.substring(startIndex,index + 1).split('').reverse().join('');
    count --;
    index ++;
  }
  answer += string.substring(index).split('').reverse().join('');
  return answer;
}

// const reverse = (string) => {

//   let newString = '';
//   for(let i = string.length -1; i >= 0; i --) {
//     newString += string[i];
//   }
//   return newString;
// }

// const solution = (string) => {
//   const arr = [];
//   let currentWord = '';
//   for(let i = 1; i < string.length-1; ++i){
//     for(let j = i+1; j < string.length; ++j){
        
//         arr[0] = string.substring(0,i);
//         arr[1] = string.substring(i,j);
//         arr[2] = string.substring(j, string.length);

//       // let comparedWord = reverse(arr);
//       comparedWord = arr.map(word => word.split('').reverse().join('')).join('');
//       currentWord.localeCompare(comparedWord) > 0 || currentWord === '' ? currentWord = comparedWord : '';
//     }    
//   }
//   return currentWord
// }

// const reverse = (a) => {
//   const sb = ''
//   for(let i=0; i<3; ++i){
//     for(let j=a[i].length-1; j>=0; --j){
//         console.log(a[i])
//         sb.concat(a[i].charAt(j));
//     }
//   } 
//   console.log(sb)
//   return sb
// }


test('solution', () => {
  expect(solution("mobitel")).toBe("bometil");
  expect(solution("abcd")).toBe("abdc");
  expect(solution("abcdefg")).toBe("abgfedc");
  expect(solution("abc")).toBe("abc");
  expect(solution("agca")).toBe("acga");
  expect(solution("afbdba")).toBe("abdbfa");
  expect(solution("baaaaaaaa")).toBe("aaaaaabaa");
});

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//   input.push(line);
// })
//   .on('close', function () {
//   //solution
//   process.exit();
// });