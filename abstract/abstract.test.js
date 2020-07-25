function solution(msg) {
  const answer = [];
  const hashTable = {};
  for (let i = 65; i <= 90; i += 1) {
      hashTable[String.fromCharCode(i)] = i - 64;
  }
  
  const charaters = msg.split("");
  let array = [charaters[0]];

  for (let i = 0; i < charaters.length; i += 1) {
      if (hashTable[array.join('')]) {
          array.push(msg[i+1]);
      } else {
          hashTable[array.join('')] = Object.keys(hashTable).length+1;
          array.pop();
          answer.push(hashTable[array.join('')]);
          array = [msg[i]];
          i -= 1;
      }
  }

  array.pop();
  answer.push(hashTable[array.join('')]);
  return answer;
}

test('solution', () => {
  expect(solution('KAKAO')).toEqual(	[11, 1, 27, 15]);
});