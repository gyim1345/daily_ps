
const solution = (n, words) => {
  const usedWords = [words[0]];
  let currentWord = words[0];
  let conflictIndex ;
  for(let i = 1; i < words.length; i += 1) {
    if(usedWords.includes(words[i]) || currentWord[currentWord.length-1] !== words[i][0]) {
      conflictIndex = i;
      break;
    }
    usedWords.push(words[i]);
    currentWord = words[i];

  }

  if(!conflictIndex) {
    return [0,0]
  }

  return [conflictIndex % n +1, Math.floor(conflictIndex  / n) +1];
}




// const solution = (n, words) => {
//   const answer = [];
//   dfs(answer, words.slice(1,words.length), words[0]);
  
//   console.log(answer.sort((a,b)=> a.length - b.length))
//   if(answer[0].length === 0) {
//     return [0,0]
//   }

//   const usedLength = words.length - answer[0].length;

//   console.log([Math.floor((usedLength + 1) / n), (usedLength % n)+1])
//   return [Math.floor((usedLength + 1) / n), (usedLength % n)+1];
// }

// const dfs = (answer, newWords, currentWord, usedWords = [currentWord]) => {
  
//   if(!newWords[0]) {
//     answer.push(newWords);
//     return;
//   }

//   newWords.forEach((newWord,index)=> {
//     let hasAtLeastOneSame = false;
//     if(newWord[0] === currentWord[currentWord.length-1] && !usedWords.includes(newWord)) {
//       hasAtLeastOneSame = true;
//       dfs(answer, [...newWords.slice(0,index), ...newWords.slice(index+1, newWords.length)], newWord, [...usedWords, currentWord] )
//     }
//     if(!hasAtLeastOneSame) {
//       answer.push(newWords);
//       return;
//     }
//   })

//   return;
// }


test('solution', () => {
  expect(solution(	3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"])).toEqual([3, 3]);
  expect(solution(	5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"])).toEqual([0, 0]);
  expect(solution(	2, ["hello", "one", "even", "never", "now", "world", "draw"])).toEqual([1, 3]);
  expect(solution(	2, ['qwe', 'eqwe', 'eqwe'])).toEqual([1,2]);
});