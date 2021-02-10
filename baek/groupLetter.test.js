// const solution = (string) => {
//   let result = 0;
//   for(word of string) {
//     const firstLetter = word[0];
//     const history = { [firstLetter]: true};
//     let prevLetter = firstLetter;
//     let isGroup = true;
//     for(letter of word) {
//       console.log(history, "letter", letter, "prev", prevLetter)
//       if(history[letter] && prevLetter !== letter) {
//         isGroup = false;
//         break;
//       }
//       if(prevLetter !== letter) {
//         prevLetter = letter;
//         history[letter] = true;
//       }
//     }

//     if(isGroup) {
//       result += 1;
//     }
//   }

//   return result;
// }

const solution = (string) => {

  let a = [];
  for (word of string) {
    
    let string = word[0];
    for(let i = 1; i < word.length; i ++) {
      if(word[i-1] !== word[i]) {
        string += word[i];
      }
    }
    a.push(string);
  }
  const sets = a.map(x=> [...new Set(x.split(''))].join(''))
  
  let count = 0;
  a.forEach((word,i) => {
    if(word.length === sets[i].length){
      count ++;
    }
  })
  return count;
}



test('solution', () => {
  expect(solution([
    "happy",
    "new",
    "year",])).toBe(3);

    expect(solution([
      "aba",
      "abab",
      "abcabc",
      "a",])).toBe(1);

        expect(solution([
          "jjjkkqq",
          "bear",
          "blockdmask",
          "kkkjjjjmmmj",])).toBe(2);
});
