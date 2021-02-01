const solution = (input) => {
const answers = [];
for(let y = 0; y <= input.length - 8; y ++) {


for(let x = 0; x <= input[0].length - 8; x ++) {
  let bw = 0;
  let wb = 0;
  for(let i = y; i < y +8; i++) {
    for(let j = x; j < x + 8; j++) {
      const current = input[i][j];
      if(i % 2 === 0 ) {
        if(j % 2 === 0) {
          if(current === 'W') {
            bw += 1;
            continue;
          } 
          wb += 1;
          continue;
        }

        if(current === 'B') {
          bw += 1;
          continue;
        }
        wb += 1;
        continue;
      }
    
    if(j % 2 === 0) {
      if(current === 'B') {
        bw += 1;
        continue
      }
      wb += 1;
      continue;
    }
    if(current === 'W') {
      bw+= 1;
      continue;
    }
    wb += 1;
    }
  }
  answers.push(Math.min(bw, wb));
}
}
  return Math.min(...answers);
}


test('solution', () => {
  expect(solution([
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBBBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW"])).toBe(1);
  
  expect(solution([
    "BBBBBBBBWBWBW",
    "BBBBBBBBBWBWB",
    "BBBBBBBBWBWBW",
    "BBBBBBBBBWBWB",
    "BBBBBBBBWBWBW",
    "BBBBBBBBBWBWB",
    "BBBBBBBBWBWBW",
    "BBBBBBBBBWBWB",
    "WWWWWWWWWWBWB",
    "WWWWWWWWWWBWB"])).toBe(12);
    
});