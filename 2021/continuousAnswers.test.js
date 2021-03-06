const solution = (answer_sheet, sheets) => {

  let max = 0;
  sheets.forEach((currentSheet,index) => {
    
    for(let i = index + 1; i < sheets.length; i ++) {
      const comparedSheet = sheets[i];

      let maxContinuousIncorrectAnswer = 0;
      let currentContinuousIncorrectAnswer = 0;
      let sameAnswerCount = 0;
      for(let questionNumber = 0; questionNumber < answer_sheet.length; questionNumber ++) {
        const answer = answer_sheet[questionNumber]
        const currentSheetAnswer = currentSheet[questionNumber];
        const comparedSheetAnswer = comparedSheet[questionNumber];
        if(answer !== currentSheetAnswer && currentSheetAnswer === comparedSheetAnswer) {
          sameAnswerCount += 1;
          currentContinuousIncorrectAnswer += 1;
        } else {
          maxContinuousIncorrectAnswer = Math.max(currentContinuousIncorrectAnswer, maxContinuousIncorrectAnswer);
          currentContinuousIncorrectAnswer = 0;
        }
      }
      max = Math.max(max, sameAnswerCount + Math.pow(maxContinuousIncorrectAnswer, 2));
    }
  });

  return max;
}


test('solution', () => {
  expect(solution("41323115142", ["32415123133", "4121231445", "32435423133", "44333525251", "24123413253"])).toBe(17);
});